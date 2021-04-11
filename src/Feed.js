import './Feed.css';
import {useEffect, useState, useCallback} from "react";
import head from './res/img/duck_head.png';
import useSound from 'use-sound';
import socketIOClient from "socket.io-client";
import quackSound from './res/quack.mp3'

const ENDPOINT = "https://duckdriver.co.uk:5000";

export function Feed() {
    const [socket, setSocket] = useState();
    const [sid, setSid] = useState(false)
    const [queue, setQueue] = useState([])

    const [playQuack] = useSound(quackSound);

    useEffect(() => {
        playQuack()
        const newSocket = socketIOClient(ENDPOINT);
        newSocket.on('connect', () => {
                setSid(newSocket.id)
            }
        )
        newSocket.on('move', (data) => console.log(data))
        newSocket.on('quack', () =>  { playQuack()
            console.log("quack")
        })
        newSocket.on('queue', (data) => {
                setQueue(data.queue)
            }
        )
        setSocket(newSocket)
    }, []);


    const handleMouseAction = (direction) => {
        socket.emit('move', {data: direction})
    }

    const handleQuack = () => {
        socket.emit('quack', {data: "quack"})
    }

    return (
        <div>
            <div className="twitch-container">
                <div className="stream-container">
                    <iframe className="stream" src="https://player.twitch.tv/?channel=duckdriverbath&parent=bath-duck.ew.r.appspot.com"
                            title="Stream" frameBorder="0"
                            allowFullScreen="true" scrolling="no" height="100%" width="100%"/>
                </div>
                <div className="chat-container">
                    <iframe src="https://www.twitch.tv/embed/duckdriverbath/chat?parent=bath-duck.ew.r.appspot.com" title="chat"
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
                    <a onClick={() => handleQuack()}><span id="quackText">Quack!</span></a>
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
