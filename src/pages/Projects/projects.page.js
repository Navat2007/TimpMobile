import React from 'react';
import ProjectsService from "../../services/projects.service";
import AuthService from "../../services/auth.service";
import ProjectComponent from "../../components/project.component";
import Footer from "../../components/Footer/footer.component";
import Container from "../../components/container.component";

const ProjectsPage = () => {

    const [projectsLoading, setProjectsLoading] = React.useState(false);
    const [plusBtnOpen, setPlusBtnOpen] = React.useState(false);
    const [topMenuOpen, setTopMenuOpen] = React.useState(false);
    const [projects, setProjects] = React.useState([]);

    React.useEffect(()=>{

        const user = AuthService.getCurrentUser();

        async function fetch(){

            setProjectsLoading(true);
            const data = await ProjectsService.getAll(user.ID);
            setProjects(data);
            setProjectsLoading(false);
        }

        fetch();

    }, []);

    return (
        <Container onClick={() => {
            setPlusBtnOpen(false);
            setTopMenuOpen(false);
        }}>
            <div className="o-section__top">
                <div className="m-top-panel">
                    <div className="m-top-title">
                        <p className="a-main-title">Проекты</p>
                        <div className={topMenuOpen ? "m-context-menu --open --hide":"m-context-menu --hide"} onClick={(e) => {
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
                {
                    projects.map(project =>
                        <ProjectComponent key={project.ID} project={project} />
                    )
                }
            </div>
            <div className={plusBtnOpen ? 'm-add-btn-menu --open':'m-add-btn-menu'} onClick={(e) => {
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