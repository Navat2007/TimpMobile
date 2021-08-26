import React from 'react';
import './chat_message.component.css';
import ButtonComponent from "./UI/button/button.component";

const ChatMessage = (props) => {
    return (
        <div className="message">
            <div>
                <strong>{props.id}. {props.message.title}</strong>
                <div>{props.message.text}</div>
            </div>
            <div>
                <ButtonComponent onClick={() => props.remove(props.message)}>
                    Delete
                </ButtonComponent>
            </div>
        </div>
    );
};

export default ChatMessage;