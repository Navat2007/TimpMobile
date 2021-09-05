import React from 'react';
import person from '../img/person.png';

const ProjectComponent = (props) => {

    //console.log(props);

    const donePercent = Math.ceil((props.project.task_done * 100) / (props.project.task_need + props.project.task_work + props.project.task_done));

    return (
        <div className="m-card">
            <div className="m-card__wrap">
                <div className="m-card__section">
                    <div className="m-project-card">
                        <div className="m-project-card__top">
                            <div className="a-title-block">
                                <div className="a-title-block__img"><img src={person}
                                                                         alt="Logo project"/></div>
                                <p className="a-title-block__title">{props.project.title}</p>
                            </div>
                            <span className="a-update-time">{props.project.date}</span>
                        </div>
                        <div className="m-project-card__center">
                            <div className="m-avatar-group">
                                <i className="a-icon --icon-person"/>
                                <span className="m-avatar-group__number">{props.project.user_count}</span>
                            </div>
                            {
                                props.project.message_count > 0
                                    ? <div className="a-notif-counter"><p>{props.project.message_count}</p></div>
                                    : ''
                            }
                        </div>
                        <div className="m-project-card__bottom">
                            <div className="m-task-bar">
                                <div className="a-task-item">Новые - {props.project.task_need}</div>
                                <div className="a-task-item">В работе - {props.project.task_work}</div>
                                <div className="a-task-item">Выполнено - {props.project.task_done}</div>
                            </div>
                            <div className="a-progress">
                                <div className="a-progress__percentage" style={{width: donePercent + '%'}}/>
                                <p>{donePercent}%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-card__section">
                    <div className="m-card-edit-panel">
                        <div className="a-edit-panel-btn">
                            <i className="a-icon --icon-more-horiz"/>
                            <p>Ещё</p>
                        </div>
                        <div className="a-edit-panel-btn">
                            <i className="a-icon --icon-person-add"/>
                            <p>Добавить</p>
                        </div>
                        <div className="a-edit-panel-btn">
                            <i className="a-icon --icon-trash"/>
                            <p>Удалить</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;