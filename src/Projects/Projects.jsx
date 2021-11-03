import React from 'react';
import s from "./Projects.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project/>
                    <Project/>
                </div>
            </div>

        </div>
    );
};

export default Projects;