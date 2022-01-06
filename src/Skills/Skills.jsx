import React from 'react';
import s from './Skills.module.scss'
import Skill from "./Skill/Skill";
import BlockTitle from "../common/components/blockTitle/BlockTitle";
import jsIcon from "../assets/icons/projects/icons8-js-64.png"
import tsIcon
    from "../assets/icons/projects/icons8-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-48.png"
import reduxIcon from "../assets/icons/projects/icons8-redux-48.png"
import sbIcon from "../assets/icons/projects/storybook.svg"
import muiIcon from "../assets/icons/projects/icons8-material-ui-48.png"
import tddIcon from "../assets/icons/projects/icons8-product-64.png"
import apiIcon from "../assets/icons/projects/restApi.svg"
import gitHubIcon from "../assets/icons/projects/icons8-github-48.png"
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import Fade from "react-reveal/Fade";


const Skills = () => {
    return (
        <div className={s.skillsBlock} id="skills">
            <Fade left>
                <div className={s.skillsContainer}>
                    <BlockTitle title="My skills"/>
                    <div className={s.skills}>
                        <Skill title="JS" icon={jsIcon}
                               description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nulla."/>
                        <Skill title="TypeScript" icon={tsIcon}
                               description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nulla."/>
                        <Skill title="React" icon={faReact}
                               description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nulla."/>
                        <Skill title="Redux" icon={reduxIcon}
                               description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nulla."/>
                        <Skill title="StoryBook" icon={sbIcon}
                               description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nulla."/>
                        <Skill title="Material UI" icon={muiIcon}
                               description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nulla."/>
                        <Skill title="Unit Testing & TDD" icon={tddIcon}
                               description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nulla."/>
                        <Skill title="Rest API & Axios" icon={apiIcon}
                               description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nulla."/>
                        <Skill title="GitHub" icon={gitHubIcon}
                               description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nulla."/>
                    </div>
                </div>
            </Fade>

        </div>
    );
};

export default Skills;