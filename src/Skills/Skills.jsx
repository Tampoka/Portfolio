import React from 'react';
import s from './Skills.module.scss'
import Skill from './Skill/Skill';
import BlockTitle from '../common/components/blockTitle/BlockTitle';
import jsIcon from '../assets/icons/projects/icons8-js-64.png'
import tsIcon
    from '../assets/icons/projects/icons8-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-48.png'
import reduxIcon from '../assets/icons/projects/icons8-redux-48.png'
import sbIcon from '../assets/icons/projects/storybook.svg'
import muiIcon from '../assets/icons/projects/icons8-material-ui-48.png'
import tddIcon from '../assets/icons/projects/icons8-product-64.png'
import apiIcon from '../assets/icons/projects/restApi.svg'
import gitHubIcon from '../assets/icons/projects/icons8-github-48.png'
import {faReact} from '@fortawesome/free-brands-svg-icons/faReact';
import Fade from 'react-reveal/Fade';


const Skills = () => {
    return (
        <div className={s.skillsBlock} id="skills">
            <Fade left>
                <div className={s.skillsContainer}>
                    <BlockTitle title="My skills"/>
                    <div className={s.skills}>
                        <Skill title="JS" icon={jsIcon}
                               description=" powers the dynamic behavior on most websites, including this one..."/>
                        <Skill title="TypeScript" icon={tsIcon}
                               description="strict syntactical superset of JavaScript and adds optional static typing."/>
                        <Skill title="React" icon={faReact}
                               description="JavaScript library for building user interfaces / interactive UIs."/>
                        <Skill title="Redux" icon={reduxIcon}
                               description="open-source JS library for managing and centralizing application state."/>
                        <Skill title="StoryBook" icon={sbIcon}
                               description="tool for building UI components and pages in isolation."/>
                        <Skill title="Material UI" icon={muiIcon}
                               description="library of UI components, enabling to build your own design system"/>
                        <Skill title="Unit Testing & TDD" icon={tddIcon}
                               description="approach to SD when unit tests are written before the business logic."/>
                        <Skill title="Rest API & Axios" icon={apiIcon}
                               description="promise-based HTTP Client JS library to make CRUD requests to Rest API. "/>
                        <Skill title="GitHub" icon={gitHubIcon}
                               description="code hosting platform for version control and collaboration."/>
                    </div>
                </div>
            </Fade>

        </div>
    );
};

export default Skills;