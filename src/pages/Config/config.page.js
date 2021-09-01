import React from 'react';
import {UserContext} from "../../context";
import Container from "../../components/container.component";
import Footer from "../../components/Footer/footer.component";
import AuthService from "../../services/auth.service";

const ConfigPage = () => {

    const {setUser} = React.useContext(UserContext);

    return (
        <Container>
            <div>
                <ul>
                    <li>
                        <button onClick={() => {
                            AuthService.logout();
                            setUser(false);
                        }}>Выйти из аккаунта</button>
                    </li>
                </ul>
            </div>
            <Footer/>
        </Container>
    );
};

export default ConfigPage;