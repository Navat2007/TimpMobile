import React, {Component} from 'react';
import AuthService from './services/auth.service';
import Login from "./pages/Login/login.page";
import './css/styles.min.css';
import Modal from "./components/Modal/modal.component";

const App = () => {

    const [modalActive, setModalActive] = React.useState(true);
    const user = AuthService.getCurrentUser();

    const logOut = () => {
        AuthService.logout();
    }

    if(user == null){
        console.log("No user. Load login");
        //return <Login />
    }

    return (
        <div>
            <main>
                <button onClick={() => setModalActive(true)}>Показать popup</button>
            </main>
            <Modal active={modalActive} setActive={setModalActive}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam eius eos hic quae quidem saepe, sint sit voluptas. Et ipsum iusto molestias neque nobis rerum! Commodi corporis quos voluptatibus.</p>
            </Modal>
        </div>
    );

}

export default App;