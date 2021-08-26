import React from 'react';
import AuthService from './services/auth.service';
import Login from "./pages/Login/login.page";
import './css/styles.min.css';

import ChatMessageList from "./components/Test/chat_message_list.component";
import ChatMessageForm from "./components/Test/chat_message_form.component";
import ChatMessageFilter from "./components/Test/chat_message_filter.component";
import ButtonComponent from "./components/Test/UI/button/button.component";
import TestModal from "./components/Test/UI/modal/test_modal.component";
import {useMessages} from "./hooks/useMessages";

const App = () => {

    const user = AuthService.getCurrentUser();

    if (user == null) {
        //console.log("No user. Load login");
        //return <Login />
    }

    const [messages, setMessages] = React.useState([
        {id: 1, title: 'Javascript', text: 'Text about JS'},
        {id: 2, title: 'C#', text: 'Yep, it good'},
        {id: 3, title: 'Python', text: 'A good one'}
    ]);
    const [filter, setFilter] = React.useState({sort: '', search: ''});
    const [modalActive, modalSetActive] = React.useState();
    const sortedAndSearchedMessages = useMessages(messages, filter.sort, filter.search);

    const createMessage = (message) => {
        setMessages([...messages, message]);
        modalSetActive(false);
    }

    const removeMessage = (message) => {
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (
        <div className="o-container">
            <div className="o-container__wrap" style={{padding: '14px'}}>
                <TestModal active={modalActive} setActive={modalSetActive}>
                    <ChatMessageForm create={createMessage}/>
                </TestModal>
                <ButtonComponent onClick={() => modalSetActive(true)}>Add message</ButtonComponent>
                <ChatMessageFilter filter={filter} setFilter={setFilter}/>
                <ChatMessageList
                    remove={removeMessage}
                    messages={sortedAndSearchedMessages}
                    title={"Список сообщений чата"}
                />
            </div>
        </div>
    );

}

export default App;