const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { version, validate } = require('uuid');

const ACTIONS = require('./Actions');
const { count } = require('console');
const PORT = process.env.PORT || 8080;

function getClientRooms() {
    const { rooms } = io.sockets.adapter;

    return Array.from(rooms.keys()).filter(roomID => validate(roomID) && version(roomID) === 4);
}

function getClientsCount() {
    const { rooms } = io.sockets.adapter;
    let clientsCount = [];
    Array.from(rooms.keys())
        .filter(roomID => validate(roomID) && version(roomID) === 4)
        .forEach(roomID => {
            const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);
            let count = 0
            clients
                .forEach(() => {
                    ++count;
                });
            clientsCount.push(count);
            // socket.leave(roomID);
            console.log(`count: ${count}`);
        });
    console.log(clientsCount);
    return clientsCount;
}

function shareRoomsInfo() {
    io.emit(ACTIONS.SHARE_ROOMS, {
        rooms: getClientRooms(),
        count: getClientsCount()
    })
}

io.on('connection', socket => {
    shareRoomsInfo();

    socket.on(ACTIONS.JOIN, config => {
        const { room: roomID } = config;
        const { rooms: joinedRooms } = socket;

        if (Array.from(joinedRooms).includes(roomID)) {
            return console.warn(`Already joined to ${roomID}`);
        }

        const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);

        clients.forEach(clientID => {
            io.to(clientID).emit(ACTIONS.ADD_PEER, {
                peerID: socket.id,
                createOffer: false
            });

            socket.emit(ACTIONS.ADD_PEER, {
                peerID: clientID,
                createOffer: true,
            });
        });

        socket.join(roomID);
        shareRoomsInfo();
    });

    function leaveRoom() {
        const { rooms } = socket;

        Array.from(rooms)
            // LEAVE ONLY CLIENT CREATED ROOM
            .filter(roomID => validate(roomID) && version(roomID) === 4)
            .forEach(roomID => {

                const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);

                clients
                    .forEach(clientID => {
                        io.to(clientID).emit(ACTIONS.REMOVE_PEER, {
                            peerID: socket.id,
                        });

                        socket.emit(ACTIONS.REMOVE_PEER, {
                            peerID: clientID,
                        });
                    });

                socket.leave(roomID);
            });

        shareRoomsInfo();
    }

    function isRoomPresent({ currentRoomID }) {
        const { rooms } = socket;
        let present = false;
        Array.from(rooms)
            // LEAVE ONLY CLIENT CREATED ROOM
            .filter(roomID => validate(roomID) && version(roomID) === 4)
            .forEach(roomID => {

                if (roomID === currentRoomID) {
                    present = true;
                }
                // const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);

                // clients
                //     .forEach(clientID => {
                //         io.to(clientID).emit(ACTIONS.REMOVE_PEER, {
                //             peerID: socket.id,
                //         });

                //         socket.emit(ACTIONS.REMOVE_PEER, {
                //             peerID: clientID,
                //         });
                //     });

                // socket.leave(roomID);
            });
        return { present };
    }

    // socket.on(ACTIONS.COUNT, getClientsCount);
    socket.on(ACTIONS.PRESENT, isRoomPresent);
    socket.on(ACTIONS.LEAVE, leaveRoom);
    socket.on('disconnecting', leaveRoom);

    socket.on(ACTIONS.RELAY_SDP, ({ peerID, sessionDescription }) => {
        io.to(peerID).emit(ACTIONS.SESSION_DESCRIPTION, {
            peerID: socket.id,
            sessionDescription,
        });
    });

    socket.on(ACTIONS.RELAY_ICE, ({ peerID, iceCandidate }) => {
        io.to(peerID).emit(ACTIONS.ICE_CANDIDATE, {
            peerID: socket.id,
            iceCandidate,
        });
    });

});

const publicPath = path.join(__dirname, 'build');

app.use(express.static(publicPath));
app.use(cors());

// app.get('*', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'));
// });

server.listen(PORT, () => {
    console.log(`Server Started at port: ${PORT} !`)
})