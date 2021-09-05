import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";

import AuthService from "../../services/auth.service";
import {Link} from "react-router-dom";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const RegisterPage = () => {

    const [login, setLogin] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirm, setPasswordConfirm] = React.useState('');

    const register = () => {

        if(window.global.debug)
        {

            console.log("Регистрация: ");
            console.log(login);
            console.log(email);
            console.log(password);
            console.log(passwordConfirm);

        }



    };

    return (
        <div className="m-popup m-login-bg">
            <div className="m-popup__card">
                <div className="m-login-form">
                    <div className="m-login-form__section">
                        <p className="m-login-form__title">Регистрация</p>
                        <div className="a-field">
                            <div className="a-field__inner">
                                <input className="a-field__input"
                                       name="login"
                                       type="login"
                                       autoComplete="login"
                                       placeholder="Введите логин"
                                       onChange={event => setLogin(event.target.value)}
                                />
                                <i className="a-field__icon"/>
                                <span className="a-field__info"/>
                            </div>
                        </div>
                        <div className="a-field">
                            <div className="a-field__inner">
                                <input className="a-field__input"
                                       name="email"
                                       type="email"
                                       autoComplete="email"
                                       placeholder="Введите email"
                                       onChange={event => setEmail(event.target.value)}
                                />
                                <i className="a-field__icon"/>
                                <span className="a-field__info"/>
                            </div>
                        </div>
                        <div className="a-field">
                            <div className="a-field__inner">
                                <input className="a-field__input"
                                       name="password"
                                       type="password"
                                       autoComplete="new-password"
                                       placeholder="Придумайте пароль"
                                       onChange={event => setPassword(event.target.value)}
                                />
                                <i className="a-field__icon"/>
                                <span className="a-field__info"/>
                            </div>
                        </div>
                        <div className="a-field">
                            <div className="a-field__inner">
                                <input className="a-field__input"
                                       name="password"
                                       type="password"
                                       autoComplete="new-password"
                                       placeholder="Повторите пароль"
                                       onChange={event => setPasswordConfirm(event.target.value)}
                                />
                                <i className="a-field__icon"/>
                                <span className="a-field__info"/>
                            </div>
                        </div>
                        <button
                            className="m-login-form__btn"
                            type="button"
                            onClick={() => register()}
                        >
                            Регистрация
                        </button>
                    </div>
                    <div className="m-login-form__social --hide">
                        <p className="m-login-form__label">Регистрация с помощью:</p>
                        <button className="a-social-icon-link --facebook"></button>
                        <button className="a-social-icon-link --vk"></button>
                        <button className="a-social-icon-link --telegram"></button>
                        <button className="a-social-icon-link --viber"></button>
                        <button className="a-social-icon-link --whatsapp"></button>
                    </div>
                    <div className="m-login-form__bottom">
                        <span>Уже есть аккаунт?</span>
                        <Link className="a-link-btn" to="/login">Войти</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;