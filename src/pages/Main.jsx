import { useState, useEffect, useRef } from 'react';
import { Space, Table, Tag } from 'antd';
import socket from '../socket';
import ACTIONS from '../socket/Actions';
import { useHistory } from 'react-router';
import { v4 } from 'uuid';
import { Button } from 'antd';

export default function Main() {
    const history = useHistory();
    const [rooms, updateRooms] = useState([]);
    const [count, updateCount] = useState([]);
    const rootNode = useRef();

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Count',
            dataIndex: 'count',
            key: 'count'
        },
        {
            title: 'join',
            dataIndex: 'join',
            key: 'join',
            render: (text, record) => (
                <Space size="middle">
                    <Button ghost type='primary' onClick={() => {
                        history.push(`/room/${record.name}`);
                    }}>Войти в комнату</Button>
                </Space>
            )
        }
    ]

    const dataSource = rooms.map((roomID, i) => {
        return {
            key: i,
            name: roomID,
            count: <Tag color='blue'>{count[i]}</Tag>
        }
    })

    useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [], count = [] } = {}) => {
            if (rootNode.current) {
                updateRooms(rooms);
                updateCount(count);
                console.log(rooms);
                console.log(count);
            }
        });
    }, []);

    return (
        <div ref={rootNode}>
            <h1>Available Rooms</h1>
            <Table dataSource={dataSource} columns={columns} />;

            <Button onClick={() => {
                history.push(`/room/${v4()}`);
            }}>Create New Room</Button>
        </div>
    );
}