import React from 'react';
import s from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import BlockTitle from "../common/components/blockTitle/BlockTitle";


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <BlockTitle title="My skills"/>
                <div className={s.skills}>
                    <Skill title="JS" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nulla."/>
                    <Skill title="React" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nulla."/>
                    <Skill title="Redux" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nulla."/>
                    <Skill title="Redux" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nulla."/>
                </div>
            </div>

        </div>
    );
};

export default Skills;