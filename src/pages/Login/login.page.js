import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../../services/auth.service";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                () => {
                    this.props.history.push("/");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }

    render() {

        return (
            <div className="a-popup m-login-bg">
                <div className="a-popup__card">
                    <div className="m-login-form">
                        <div className="m-login-form__section">
                            <p className="m-login-form__title">Вход</p>
                            <div className="a-field">
                                <div className="a-field__inner">
                                    <input className="a-field__input"
                                           name="email"
                                           type="email"
                                           autoComplete="email"
                                           placeholder="Введите email">
                                    </input>
                                    <i className="a-field__icon"/>
                                    <span className="a-field__info"/>
                                </div>
                            </div>
                            <div className="a-field">
                                <div className="a-field__inner">
                                    <input className="a-field__input"
                                           name="password"
                                           type="password"
                                           autoComplete="password"
                                           placeholder="Введите пароль">
                                    </input>
                                    <i className="a-field__icon"/>
                                    <i className="a-field__eye-icon"/>
                                    <span className="a-field__info"/>
                                </div>
                            </div>
                            <button className="m-login-form__btn" type="button">Войти</button>
                        </div>
                        <div className="m-login-form__social">
                            <p className="m-login-form__label">Регистрация с помощью:</p>
                            <a href="" className="m-social-icon-link --facebook"></a>
                            <a href="" className="m-social-icon-link --vk"></a>
                            <a href="" className="m-social-icon-link --telegram"></a>
                            <a href="" className="m-social-icon-link --viber"></a>
                            <a href="" className="m-social-icon-link --whatsapp"></a>
                        </div>
                        <div className="m-login-form__bottom">
                            <a href="">Забыли пароль?</a>
                            <a className="m-link-btn" href="">Регистрация</a>
                        </div>
                    </div>
                </div>
            </div>
        );


    }
}

/*
return (
    <div className="col-md-12">
        <div className="card card-container">
            <img
                src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card"
            />

            <Form
                onSubmit={this.handleLogin}
                ref={c => {
                    this.form = c;
                }}
            >
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        validations={[required]}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        validations={[required]}
                    />
                </div>

                <div className="form-group">
                    <button
                        className="btn btn-primary btn-block"
                        disabled={this.state.loading}
                    >
                        {this.state.loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Login</span>
                    </button>
                </div>

                {this.state.message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {this.state.message}
                        </div>
                    </div>
                )}
                <CheckButton
                    style={{ display: "none" }}
                    ref={c => {
                        this.checkBtn = c;
                    }}
                />
            </Form>
        </div>
    </div>
);
*/
