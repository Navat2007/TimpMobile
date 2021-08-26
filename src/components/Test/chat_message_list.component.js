import React from 'react';
import ChatMessage from "./chat_message.component";

const ChatMessageList = ({messages, title, remove}) => {

    if(!messages.length)
        return (
            <h1 style={{textAlign:'center'}}>
                Сообщения не найдены
            </h1>
        )

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {messages.map((message, index) =>
                <ChatMessage remove={remove} id={index + 1} message={message} key={message.id}/>
            )}
        </div>
    );

};

export default ChatMessageList;