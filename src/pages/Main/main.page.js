import React, {Component} from 'react';
import io from "socket.io-client";
import AuthService from "../../services/auth.service";

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
    }

    componentDidMount() {

        const socket = io.connect("ws://" + window.baseUrl);

        socket.on("connect", () => {
            console.log("Successfully connected!");

            socket.emit('login', {});
        });

    }

    render() {

        const { currentUser } = this.state;

        return (
            <div className="container">
                Main page
            </div>
        );
    }

}