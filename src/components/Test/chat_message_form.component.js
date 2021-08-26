import React from 'react';
import InputComponent from "./UI/input/input.component";
import ButtonComponent from "./UI/button/button.component";

const ChatMessageForm = ({create}) => {

    const [message, setMessage] = React.useState({title: '', text: ''});

    const addNewMessage = (e) => {

        e.preventDefault();

        const newMessage = {
            ...message,
            id: Date.now()
        }

        create(newMessage);

        setMessage({title: '', text: ''});

    }

    return (
        <form>
            <InputComponent
                value={message.title}
                onChange={e => setMessage({...message, title: e.target.value})}
                type="text"
                placeholder="Название сообщения"
            />
            <InputComponent
                value={message.text}
                onChange={e => setMessage({...message, text: e.target.value})}
                type="text"
                placeholder="Текст сообщения"
            />
            <ButtonComponent onClick={addNewMessage}>Отправить сообщение</ButtonComponent>
        </form>
    );
};

export default ChatMessageForm;