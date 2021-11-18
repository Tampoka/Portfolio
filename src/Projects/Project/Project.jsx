import React from 'react';
import s from './Project.module.scss'

const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer} style={props.style}>
                <a href='#' className={s.btn}>Show more</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.projectTitle}</h3>
                <p className={s.description}>{props.projectDescription}</p></div>
        </div>
    );
};

export default Project;