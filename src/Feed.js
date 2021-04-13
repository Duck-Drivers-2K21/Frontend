import './Feed.css';
import {useEffect, useState} from "react";
import useSound from 'use-sound';
import socketIOClient from "socket.io-client";
import quackSound from './res/quack.mp3'

const ENDPOINT = "http://duckdriver.co.uk:5000";

export function Feed() {
    const [socket, setSocket] = useState();
    const [sid, setSid] = useState(false)
    const [queue, setQueue] = useState([])

    const [playQuack] = useSound(quackSound);

    useEffect(() => {
        const newSocket = socketIOClient(ENDPOINT);
        newSocket.on('connect', () => {
                setSid(newSocket.id)
            }
        )
        newSocket.on('move', (data) => console.log(data))
        newSocket.on('quack', playQuack)
        newSocket.on('queue', (data) => {
            setQueue(data.queue)
        })
        setSocket(newSocket)
    }, [playQuack]);


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
                    <iframe className="stream"
                            src="https://player.twitch.tv/?channel=duckdriverbath&parent=duckdriver.co.uk"
                            title="Stream" frameBorder="0" scrolling="no" height="100%" width="100%"/>
                </div>
                <div className="chat-container">
                    <iframe src="https://www.twitch.tv/embed/duckdriverbath/chat?parent=duckdriver.co.uk" title="chat"
                            height="100%" width="100%"/>
                </div>
            </div>
            <div className="input-container">
                <div id="queueStatusContainer"><QueueStatus queue={queue} sid={sid}/></div>
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

function QueueStatus(props) {
    if (props.queue[0] === props.sid) {
        return (<p id="queueStatus">&#62; YOUR GO</p>);
    } else if (props.queue.indexOf(props.sid) === -1) {
        return (<p id="queueStatus">&#62; END OF YOUR GO</p>);
    } else if (props.queue.indexOf(props.sid) === 1) {
        return (
            <p id="queueStatus">&#62; PLEASE WAIT, THERE IS {props.queue.indexOf(props.sid)} PERSON AHEAD OF YOU</p>);
    } else {
        return (
            <p id="queueStatus">&#62; PLEASE WAIT, THERE ARE {props.queue.indexOf(props.sid)} PEOPLE AHEAD OF YOU</p>);
    }
}
