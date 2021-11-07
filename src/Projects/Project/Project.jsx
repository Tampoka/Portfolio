import React from 'react';
import s from './Project.module.css'

const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <a href='#'>Show more</a>
            </div>
            <h3>{props.projectTitle}</h3>
            <p>{props.projectDescription}</p>
        </div>
    );
};

export default Project;