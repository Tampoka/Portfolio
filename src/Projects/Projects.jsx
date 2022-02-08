import React from 'react';
import s from './Projects.module.scss';
import Project from './Project/Project';
import BlockTitle from '../common/components/blockTitle/BlockTitle';
import socialImg from '../assets/images/social.png'
import todoImg from '../assets/images/todo.png'
import cardsImg from '../assets/images/learning_cards.png'

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImg})`
    }

    const todo = {
        backgroundImage: `url(${todoImg})`
    }

    const cards = {
        backgroundImage: `url(${cardsImg})`
    }
    return (
        <div className={s.projectsBlock} id="projects">
            <div className={s.projectsContainer}>
                <BlockTitle title="Projects"/>
                <div className={s.projects}>
                    <Project projectTitle="Todo list"
                             projectDescription="Classic todo application with auth flow implemented. Features adding, updating, sorting todos."
                             style={todo} linkTo="https://tampoka.github.io/Todo/"
                             stack="React, Redux, redux toolkit, formik, axios, Material UI."
                             codeLink="https://github.com/Tampoka/Todo"/>
                    <Project projectTitle="Learning cards"
                             projectDescription="Application for studying things throw learning cards. Auth flow implemented.(sign up, sign in, forgot password etc.)"
                             style={cards} linkTo='https://tampoka.github.io/react-cards/#/profile'
                             stack="React, Redux, formik, axios, scss."
                             codeLink='https://github.com/Tampoka/react-cards'/>
                    {/*<Project projectTitle="Social network"*/}
                    {/*         projectDescription="My  first React project, still in progress.While learning new technologies, updating every month."*/}
                    {/*         style={social} linkTo="https://tampoka.github.io/my_social_network/"*/}
                    {/*         stack="React, Redux, redux-form, axios, Ant Design."*/}
                    {/*         codeLink="https://github.com/Tampoka/my_social_network"/>*/}
                    <Project projectTitle="Coming soon"
                             projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing."
                             codeLink=""/>
                </div>
            </div>

        </div>
    );
};

export default Projects;