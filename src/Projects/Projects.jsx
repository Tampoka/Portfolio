import React from 'react';
import s from "./Projects.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Project from "./Project/Project";
import BlockTitle from "../common/components/blockTitle/BlockTitle";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <BlockTitle title="Projects"/>
                <div className={s.projects}>
                    <Project projectTitle="E-commerce website"
                             projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing."/>
                    <Project projectTitle="Redux forms"
                             projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing."/>
                    <Project projectTitle="Coffee shop"
                             projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing."/>
                </div>
            </div>

        </div>
    );
};

export default Projects;