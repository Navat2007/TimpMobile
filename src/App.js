import React, {Component} from 'react';
import AuthService from './services/auth.service';
import Login from "./pages/Login/login.page";

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            user: {},
        };

    }

    componentDidMount() {

        const user = AuthService.getCurrentUser();
        this.setState({
            user: user
        });

    }

    logOut() {
        AuthService.logout();
    }

    render() {

        if(this.state.user == null){
            console.log("No user. Load login");
            return <Login />
        }

        return (
            <div>
                Main
            </div>
        );

    }

}

export default App;