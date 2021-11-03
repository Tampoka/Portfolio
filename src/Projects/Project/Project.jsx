import React from 'react';
import s from './Project.module.css'

const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.image}>
                <img src="" alt="Project screenshot"/>
            </div>
            <h3>{props.projectTitle}</h3>
            <p>{props.projectDescription}</p>
        </div>
    );
};

export default Project;