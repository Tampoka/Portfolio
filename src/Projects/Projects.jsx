import React from 'react';
import s from './Projects.module.scss';
import Project from './Project/Project';
// import socialImg from '../assets/images/social.png'
import todoImg from '../assets/images/todo.png'
import cardsImg from '../assets/images/learning_cards.png'
import paintImg from '../assets/images/redux_paint.png'
import BlockTitle from '../common/components/blockTitle/BlockTitle'

const Projects = () => {
    // const social = {
    //     backgroundImage: `url(${socialImg})`
    // }

    const todo = {
        backgroundImage: `url(${todoImg})`
    }

    const cards = {
        backgroundImage: `url(${cardsImg})`
    }

    const paint = {
        backgroundImage: `url(${paintImg})`
    }
    return (
        <div className={s.projectsBlock} id="projects">
            <div className={s.projectsContainer}>
                <BlockTitle title="Projects"/>
                <div className={s.projects}>
                    <Project projectTitle="Todo list"
                             projectDescription="Classic todo application with auth flow implemented. Features adding, updating, sorting todos."
                             style={todo} linkTo="https://tampoka.github.io/Todo/"
                             stack="React, Typescript, Redux, Redux thunk, Redux Toolkit, Formik, Axios, Material UI, Storybook, Jest."
                             codeLink="https://github.com/Tampoka/Todo"/>
                    <Project projectTitle="Learning cards"
                             projectDescription="Application for studying things throw learning cards. Auth flow implemented.(sign up, sign in, forgot password etc.)"
                             style={cards} linkTo='https://tampoka.github.io/React_cards/'
                             stack="React, Typescript, Redux, Formik, Axios, SCSS."
                             codeLink='https://github.com/Tampoka/React_cards'/>
                    {/*<Project projectTitle="Social network"*/}
                    {/*         projectDescription="My  first React project, still in progress.While learning new technologies, updating every month."*/}
                    {/*         style={social} linkTo="https://tampoka.github.io/my_social_network/"*/}
                    {/*         stack="React, Redux, redux-form, axios, Ant Design."*/}
                    {/*         codeLink="https://github.com/Tampoka/my_social_network"/>*/}
                    <Project projectTitle="Paint"
                             projectDescription="Canvas board. Features saving, loading, exporting drawings."
                             style={paint} linkTo="https://tampoka.github.io/redux-paint"
                             stack="React, Typescript, Redux Toolkit, Canvas, xp.css."
                             codeLink="https://github.com/Tampoka/redux-paint"/>
                    <Project projectTitle="Coming soon"
                             projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing."
                             codeLink=""/>
                </div>
            </div>

        </div>
    );
};

export default Projects;