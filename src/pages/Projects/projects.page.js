import React from 'react';
import ProjectsService from "../../services/projects.service";
import AuthService from "../../services/auth.service";
import ProjectComponent from "../../components/project.component";

const ProjectsPage = () => {

    const [projects, setProjects] = React.useState([]);

    React.useEffect(()=>{

        const user = AuthService.getCurrentUser();

        async function fetch(){

            const data = await ProjectsService.getAll(user.ID);
            setProjects(data);

        }

        fetch();

    }, []);

    return (
        <div className="o-container__section o-section">
            <div className="o-section__top">
                <div className="m-top-panel">
                    <div className="m-top-title">
                        <p className="a-main-title">Проекты</p>
                        <div className="m-context-menu">
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
                               placeholder="Название, проект, ответственный"/>
                    </div>
                </div>
            </div>
            <div className="o-section__content">
                {
                    projects.map(project =>
                        <ProjectComponent key={project.ID} project={project} />
                    )
                }
                <div className="m-add-btn-menu">
                    <i className="m-add-btn-menu__icon"/>
                    <div className="m-add-btn-menu__wrap">
                        <ul className="m-add-btn-menu__list">
                            <li className="m-add-btn-menu__item">Пункт 1</li>
                            <li className="m-add-btn-menu__item">Пункт 2</li>
                            <li className="m-add-btn-menu__item">Пункт 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;