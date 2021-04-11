import './Feed.css';
import {useEffect, useState, useCallback} from "react";
import head from './res/img/duck_head.png';

import socketIOClient from "socket.io-client";

const ENDPOINT = "http://192.168.1.200:5000";


export function Feed() {
    const [socket, setSocket] = useState();
    const [sid, setSid] = useState(false)
    const [queue, setQueue] = useState([])

    useEffect(() => {
        const newSocket = socketIOClient(ENDPOINT);
        newSocket.on('connect', () => {
                setSid(newSocket.id)
                console.log(newSocket.id)
            }
        )
        newSocket.on('move', (data) => console.log(data))
        newSocket.on('queue', (data) => {
                console.log(data.queue)
                setQueue(data.queue)
            }
        )
        setSocket(newSocket)
    }, []);


    const handleMouseAction = (direction) => {
        socket.emit('move', {data: direction})
    }

    return (
        <div>
            <div className="twitch-container">
                <div className="stream-container">
                    <iframe className="stream" src="https://player.twitch.tv/?channel=duckdriverbath&parent=localhost"
                            title="Stream" frameBorder="0"
                            allowFullScreen="true" scrolling="no" height="100%" width="100%"/>
                </div>
                <div className="chat-container">
                    <iframe src="https://www.twitch.tv/embed/esl_csgo/chat?parent=localhost" title="chat"
                            height="100%" width="100%"/>
                </div>
            </div>
            <div id="queueStatusContainer"><QueueStatus queue={queue} sid={sid}/></div>

            <div className="input-container">
                <div className="joypad-container">
                    <div className="button">
                        <a onMouseDown={() => handleMouseAction("F")} onMouseUp={() => handleMouseAction("F_OFF")}>⬆</a>
                    </div>
                    <div>
                        <div className="button">
                            <a onMouseDown={() => handleMouseAction("L")}
                               onMouseUp={() => handleMouseAction("L_OFF")}>⬅</a>
                        </div>
                        <div className="button">
                            <a onMouseDown={() => handleMouseAction("B")}
                               onMouseUp={() => handleMouseAction("B_OFF")}>⬇</a>
                        </div>
                        <div className="button">
                            <a onMouseDown={() => handleMouseAction("R")}
                               onMouseUp={() => handleMouseAction("R_OFF")}>⮕️️</a>
                        </div>
                    </div>

                </div>
                <div className="button" id="quack">
                    <a><span id="quackText">Quack!</span></a>
                </div>
            </div>
        </div>
    );

}

function QueueStatus (props) {
    if (props.queue[0] === props.sid)  {
        return (<p id="queueStatus">&#62; YOUR GO</p>);
    } else if (props.queue.indexOf(props.sid) === -1) {
        return (<p id="queueStatus">&#62; END OF YOUR GO</p>);
    } else if (props.queue.indexOf(props.sid) === 1) {
        return (<p id="queueStatus">&#62; PLEASE WAIT, THERE IS {props.queue.indexOf(props.sid)} PERSON AHEAD OF YOU</p>);
    } else {
        return (<p id="queueStatus">&#62; PLEASE WAIT, THERE ARE {props.queue.indexOf(props.sid)} PEOPLE AHEAD OF YOU</p>);
    }
}
