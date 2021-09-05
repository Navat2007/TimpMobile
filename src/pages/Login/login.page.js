import React from "react";
import AuthService from "../../services/auth.service";
import {Link} from "react-router-dom";
import {ProjectsContext, UserContext} from "../../context";

const Login = () => {

    const {setUser} = React.useContext(UserContext);
    const {setProjectsNeedLoad} = React.useContext(ProjectsContext);

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const doLogin = async () => {

        if (window.global.debug) {
            console.log("do Login");
            console.log(username);
            console.log(password);
        }

        let result = await AuthService.login(username, password);

        if (window.global.debug)
            console.log("Login result: ", result);

        if (result) {
            setProjectsNeedLoad(true);
            setUser(true);
        }

    }

    return (
        <div className="m-popup m-login-bg">
            <div className="m-popup__card">
                <div className="m-login-form">
                    <div className="m-login-form__section">
                        <p className="m-login-form__title">Вход</p>
                        <div className="a-field">
                            <div className="a-field__inner">
                                <input className="a-field__input"
                                       name="email"
                                       type="email"
                                       autoComplete="email"
                                       placeholder="Введите логин"
                                       onChange={event => setUsername(event.target.value)}>
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
                                       placeholder="Введите пароль"
                                       onChange={event => setPassword(event.target.value)}>
                                </input>
                                <i className="a-field__icon"/>
                                <i className="a-field__eye-icon"/>
                                <span className="a-field__info"/>
                            </div>
                        </div>
                        <button
                            onClick={() => doLogin()}
                            className="m-login-form__btn"
                            type="button"
                        >
                            Войти
                        </button>
                    </div>
                    <div className="m-login-form__social --hide">
                        <p className="m-login-form__label">Вход с помощью:</p>
                        <button className="a-social-icon-link --facebook"></button>
                        <button className="a-social-icon-link --vk"></button>
                        <button className="a-social-icon-link --telegram"></button>
                        <button className="a-social-icon-link --viber"></button>
                        <button className="a-social-icon-link --whatsapp"></button>
                    </div>
                    <div className="m-login-form__bottom">
                        <Link to="/forgot">Забыли пароль?</Link>
                        <Link className="a-link-btn" to="/register">Регистрация</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

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
