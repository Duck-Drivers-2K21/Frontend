import './Feed.css';
import {useEffect, useState} from "react";


export function Feed() {
    const [socket, setSocket] = useState()

    useEffect(() => {
        let ws = new WebSocket("ws://localhost:3000/ws")

        ws.onopen = () => {
            console.log("Socket Connected")
        };

        ws.onmessage = evt => {
            const message = JSON.parse(evt.data)
            console.log(message)
        }

        ws.onclose = () => {
            console.log("Socket Disconnected")
        }

        setSocket(ws)
    }, [])

    const sendMessage = (msg) => {
        try {
            console.log(msg)
            socket.send(msg)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="twitch-container">
                <div className="stream-container">
                    <iframe className="stream" src="https://player.twitch.tv/?channel=esl_csgo&parent=localhost"
                            title="Stream" frameBorder="0"
                            allowFullScreen="true" scrolling="no" height="100%" width="100%"/>
                </div>
                <div className="chat-container">
                    <iframe src="https://www.twitch.tv/embed/esl_csgo/chat?parent=localhost" title="chat"
                            height="100%" width="100%"/>
                </div>
            </div>

            <div className="input-container">
                <div className="joypad-container">
                    <button className="joypad-button" onClick={() => sendMessage("FORWARD")}>
                        FORWARD
                    </button>
                    <div>
                        <button className="joypad-button" onClick={() => sendMessage("LEFT")}>
                            LEFT
                        </button>
                        <button className="joypad-button" onClick={() => sendMessage("RIGHT")}>
                            RIGHT
                        </button>
                    </div>
                    <button className="joypad-button" onClick={() => sendMessage("BACKWARDS")}>
                        BACKWARDS
                    </button>
                </div>

            </div>
        </div>
    );

}
