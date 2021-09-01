import React from 'react';
import person from '../img/person.png';

const ProjectComponent = (props) => {

    //console.log(props);

    const donePercent = Math.ceil((props.project.task_done * 100) / (props.project.task_need + props.project.task_work + props.project.task_done));

    return (
        <div className="m-panel-card">
            <div className="m-panel-card__wrap">
                <div className="m-panel-card__card-section">
                    <div className="a-title-block">
                        <div className="a-title-block__img"><img src={person}
                                                                 alt="Logo project"/></div>
                        <p className="a-title-block__title">{props.project.title}</p>
                    </div>
                    <span className="a-xs-font">Только что</span>
                    <div className="a-participants">
                        <div className="a-participants__author"><img src={person}
                                                                     alt=""/>
                        </div>
                        <i className="a-icon --icon-arrow-right-sm"/>
                        <div className="a-participants__assigned"><img src={person}
                                                                       alt=""/>
                        </div>
                    </div>
                    <p className="a-expiration">
                        <i className="a-icon --icon-update"/>
                        <span className="a-expiration__date">12.05.22</span>
                    </p>
                    <div className="a-notif-counter">{props.project.message_count > 0 ? props.project.message_count : ''}</div>
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
                <div className="m-panel-card__edit-section">
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
    );
};

export default ProjectComponent;