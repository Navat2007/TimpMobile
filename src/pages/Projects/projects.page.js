import React from 'react';

import ProjectComponent from "../../components/project.component";
import Footer from "../../components/Footer/footer.component";
import Container from "../../components/container.component";
import {ProjectsContext} from "../../context";
import Accordion from "../../components/accordion";
import AuthService from "../../services/auth.service";

const ProjectsPage = () => {

    const {projects} = React.useContext(ProjectsContext);

    const [plusBtnOpen, setPlusBtnOpen] = React.useState(false);
    const [topMenuOpen, setTopMenuOpen] = React.useState(false);

    const groupByKey = (list, key) => list.reduce((hash, obj) => ({
        ...hash,
        [obj[key]]: (hash[obj[key]] || []).concat(obj)
    }), {});

    const getFiltered = projects => {

        let array = [];
        let result = [];

        array.push(Object.values(groupByKey(projects
            .filter(project => project.autorID != AuthService.getCurrentUser().ID && project.archive == 0), 'autorID')));

        for (let i = 0; i < array[0].length; i++) {

            result.push({
                autorID: array[0][i][0].autorID,
                autor: array[0][i][0].autor,
                title: array[0][i][0].team_title,
                array: array[0][i]
            })

        }

        return result;

    }

    return (
        <Container onClick={() => {
            setPlusBtnOpen(false);
            setTopMenuOpen(false);
        }}>
            <div className="o-section__top">
                <div className="m-top-panel">
                    <div className="m-top-title">
                        <p className="a-main-title">Проекты</p>
                        <div className={topMenuOpen ? "m-context-menu --open --hide" : "m-context-menu --hide"}
                             onClick={(e) => {
                                 e.stopPropagation();
                                 setTopMenuOpen(!topMenuOpen);
                             }}>
                            <i className="m-context-menu__icon" title="Дополнительно"/>
                            <div className="m-context-menu__wrap">
                                <ul className="m-context-menu__list">
                                    <li className="m-context-menu__item">пункт 1</li>
                                    <li className="m-context-menu__item">пункт 2</li>
                                    <li className="m-context-menu__item">пункт 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="a-search-filed">
                        <input type="search" className="a-search-filed__input"
                               placeholder="Название, ответственный"/>
                    </div>
                </div>
            </div>
            <div className="o-section__content">
                <Accordion title={"Мои проекты"} open={true}>
                    {
                        projects
                            .filter(project => project.autorID == AuthService.getCurrentUser().ID && project.archive == 0)
                            .map(project => <ProjectComponent key={project.ID} project={project}/>)
                    }
                </Accordion>
                <Accordion title={"Участвую"}>
                    {
                        getFiltered(projects).map(group =>
                            <Accordion key={group.autorID} title={`${group.title} (${group.autor.email})`}>
                                {
                                    group.array.map(project => <ProjectComponent key={project.ID} project={project}/>)
                                }
                            </Accordion>
                        )
                    }
                </Accordion>
                <Accordion title={"Архив"}>
                    {
                        projects
                            .filter(project => project.autorID == AuthService.getCurrentUser().ID && project.archive == 1)
                            .map(project => <ProjectComponent key={project.ID} project={project}/>)
                    }
                </Accordion>
            </div>
            <div className={plusBtnOpen ? 'm-add-btn-menu --open' : 'm-add-btn-menu'} onClick={(e) => {
                e.stopPropagation();
                setPlusBtnOpen(!plusBtnOpen);
            }}>
                <i className="m-add-btn-menu__icon"/>
                <div className="m-add-btn-menu__wrap">
                    <ul className="m-add-btn-menu__list">
                        <li className="m-add-btn-menu__item">Добавить проект</li>
                        <li className="m-add-btn-menu__item">Пункт 2</li>
                        <li className="m-add-btn-menu__item">Пункт 3</li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </Container>
    );
};

export default ProjectsPage;