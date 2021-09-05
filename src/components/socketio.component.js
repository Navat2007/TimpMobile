import React from 'react';
import socketio from 'socket.io-client';

import {ProjectsContext} from "../context";
import AuthService from "../services/auth.service";
import ProjectsService from "../services/projects.service";

const SocketioComponent = ({children, ...props}) => {

    const [projects, setProjects] = React.useState([]);
    const [projectsNeedLoad, setProjectsNeedLoad] = React.useState(true);
    const [projectsLoading, setProjectsLoading] = React.useState(false);

    React.useEffect(()=>{

        if(projectsNeedLoad)
        {
            setProjectsLoading(true);
            ProjectsService.getAll(AuthService.getCurrentUser()?.ID).then((data) => {
                setProjects(data);
                setProjectsLoading(false);
                setProjectsNeedLoad(false);
            });

        }

    }, [projectsNeedLoad]);

    return (
        <ProjectsContext.Provider value={{projects, setProjects, projectsLoading, setProjectsNeedLoad}}>
            {children}
        </ProjectsContext.Provider>
    );
};

export default SocketioComponent;