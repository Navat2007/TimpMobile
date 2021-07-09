import React, {Component} from 'react';
import auth from "../services/Auth";

export default  class LoginPage extends Component{

    handleSubmit = () => {

        console.log("do login");
        console.log(this.login);
        console.log(this.password);

        auth.login({login: this.login, password: this.password},()=>{
            this.props.history.push("/main");
        });

    };

    render() {
        return (
            <div>
                <h3>Login</h3>
                <div><input placeholder="Name" type="text" onChange={(event) => this.login = event.target.value}/></div>
                <div><input placeholder="Password" type="password" onChange={(event) => this.password = event.target.value}/></div>
                <button type="button" onClick={this.handleSubmit}>Login</button>
            </div>
        )
    }

}