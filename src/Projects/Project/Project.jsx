import React from 'react';
import s from './Project.module.scss'

const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer} style={props.style}>
                <a href={props.linkTo} className={s.showBtn} target="_blank" rel="noreferrer noopener">Show more</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.projectTitle}</h3>
                <p className={s.description}>{props.projectDescription}</p>
                <p className={s.stack}>{props.stack}</p>
                <p className={s.code}><a href={props.codeLink} title="Project repository">Code</a></p>
            </div>
        </div>
    );
};

export default Project;