import React from "react";
import s from "./Projects.module.scss";
import Project from "./Project/Project";
import BlockTitle from "../common/components/blockTitle/BlockTitle";
import socialImg from "../assets/images/social.png"
import todoImg from "../assets/images/todo.png"

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImg})`
    }

    const todo = {
        backgroundImage: `url(${todoImg})`
    }
    return (
        <div className={s.projectsBlock} id="projects">
            <div className={s.projectsContainer}>
                <BlockTitle title="Projects"/>
                <div className={s.projects}>
                    <Project projectTitle="Social network"
                             projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing."
                             style={social} linkTo="https://github.com/Tampoka/my_social_network"/>
                    <Project projectTitle="Todo list"
                             projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing."
                             style={todo}/>
                    <Project projectTitle="Coffee shop"
                             projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing."/>
                    <Project projectTitle="Coffee shop"
                             projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing."/>
                    <Project projectTitle="Coffee shop"
                             projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing."/>
                </div>
            </div>

        </div>
    );
};

export default Projects;