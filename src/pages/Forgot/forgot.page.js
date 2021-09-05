import React from 'react';
import {Link} from "react-router-dom";

const ForgotPage = () => {

    const [email, setEmail] = React.useState('');

    const sendEmail = () => {

        if(window.global.debug)
        {
            console.log("Восстановление пароля: ", email);
        }



    };

    return (
        <div className="m-popup m-login-bg">
            <div className="m-popup__card">
                <div className="m-login-form">
                    <div className="m-login-form__section">
                        <p className="m-login-form__title">Восстановление пароля</p>
                        <div className="a-field">
                            <div className="a-field__inner">
                                <input className="a-field__input"
                                       name="email"
                                       type="email"
                                       autoComplete="email"
                                       placeholder="Введите email"
                                       onChange={event => setEmail(event.target.value)}/>
                                <i className="a-field__icon"/>
                                <span className="a-field__info"/>
                            </div>
                        </div>
                        <button
                            className="m-login-form__btn"
                            type="button"
                            onClick={() => sendEmail()}
                        >
                            Отправить
                        </button>
                    </div>
                    <div className="m-login-form__bottom">
                        <Link className="a-link-btn" to="/login">Войти</Link>
                        <Link className="a-link-btn" to="/register">Регистрация</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPage;