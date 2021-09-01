import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {

    const [route, setRoute] = React.useState('');

    React.useEffect(() => {

        switch (window.location.pathname){
            case '/projects':
                setRoute('projects');
                break;
            case '/tasks':
                setRoute('tasks');
                break;
            case '/chats':
                setRoute('chats');
                break;
            case '/config':
                setRoute('config');
                break;
            default:
                break;
        }

    }, []);

    return (
        <div className="o-section__bottom">
            <div className="m-bottom-menu">
                <Link onClick={() => setRoute('projects')} to="/projects">
                    <div className={route === "projects" ? "a-bottom-menu-item --active": "a-bottom-menu-item"}>
                        <i className="a-bottom-menu-item__icon --icon-dashboard"/>
                        <p className="a-bottom-menu-item__name">Проекты</p>
                    </div>
                </Link>
                <Link onClick={() => setRoute('tasks')} to="/tasks">
                    <div className={route === "tasks" ? "a-bottom-menu-item --active": "a-bottom-menu-item"}>
                        <i className="a-bottom-menu-item__icon --icon-check-circle"/>
                        <p className="a-bottom-menu-item__name">Задачи</p>
                    </div>
                </Link>
                <Link onClick={() => setRoute('chats')} to="/chats">
                    <div className={route === "chats" ? "a-bottom-menu-item --active": "a-bottom-menu-item"}>
                        <i className="a-bottom-menu-item__icon --icon-bubble-chart"/>
                        <p className="a-bottom-menu-item__name">Чаты</p>
                    </div>
                </Link>
                <Link onClick={() => setRoute('config')} to="/config">
                    <div className={route === "config" ? "a-bottom-menu-item --active": "a-bottom-menu-item"}>
                        <i className="a-bottom-menu-item__icon --icon-more-horiz"/>
                        <p className="a-bottom-menu-item__name">Еще</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Footer;