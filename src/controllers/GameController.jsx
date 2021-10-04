import React, { useEffect, useState } from "react";
import { Button, Col, message, Row } from 'antd';

import {
    getEmptyBoard,
    generateRandom,
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    isOver,
    checkWin
} from "../game/GameBoard";

const Cell = ({ number }) => {
    return (
        <div className={`cell cell-${number}`}>{number > 0 ? number : ""}</div>
    );
};

const GameController = () => {
    const [board, updateBoard] = useState(generateRandom(getEmptyBoard()));

    const checkEndGame = () => {
        if (checkWin(board)) {
            message.success("You win!");
        } else if (isOver(board)) {
            message.error("Game over!");
        }
    };

    const left = () => {
        const newBoard = moveLeft(board);
        updateBoard(generateRandom(newBoard));
        checkEndGame();
    };

    const right = () => {
        const newBoard = moveRight(board);
        updateBoard(generateRandom(newBoard));
        checkEndGame();
    };

    const up = () => {
        const newBoard = moveUp(board);
        updateBoard(generateRandom(newBoard));
        checkEndGame();
    };

    const down = () => {
        const newBoard = moveDown(board);
        updateBoard(generateRandom(newBoard));
        checkEndGame();
    };

    const onKeyDown = (e) => {
        switch (e.key) {
            case "ArrowLeft":
                left();
                break;
            case "ArrowRight":
                right();
                break;
            case "ArrowUp":
                up();
                break;
            case "ArrowDown":
                down();
                break;

            default:
        }
    };

    const mobileVersion = () => {
        if (document.documentElement.scrollWidth < 600) {
            return (
                <>
                    <Row>
                        <Col span={4} offset={10}>
                            <Button onClick={up}>
                                Вверх
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4} offset={6}>
                            <Button onClick={left}>
                                Право
                            </Button>
                        </Col>
                        <Col span={4} offset={4}>
                            <Button onClick={right}>
                                Право
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4} offset={10}>
                            <Button onClick={down}>
                                Вниз
                            </Button>
                        </Col>
                    </Row>
                </>
            )
        } else {
            return null;
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    });

    return (
        <>
            <div className="game-board">
                <Row>
                    {/* <Col xs={0} xl={7}>
                    </Col> */}

                    <Col xs={{ span: 24, offset: 0 }} xl={{ span: 10, offset: 7 }}>
                        {board.map((row, i) => {
                            return (
                                <div key={`row-${i}`} className="row">
                                    {row.map((cell, j) => (
                                        <Cell key={`cell-${i}-${j}`} number={cell} />
                                    ))}
                                </div>
                            );
                        })}
                    </Col>

                    {/* <Col xs={0} xl={7}>
                    </Col> */}
                </Row>
                {mobileVersion()}
            </div>
        </>
    );
};

export default GameController;
