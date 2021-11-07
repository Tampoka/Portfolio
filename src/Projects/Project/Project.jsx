import React from 'react';
import s from './Project.module.css'

const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <img className={s.image}
                     src="https://image.shutterstock.com/image-photo/istanbul-turkey-july-2021-illustrative-260nw-2019755717.jpg"
                     alt="Project screenshot"/>
                <a href='#'>Show more</a>
            </div>
            <h3>{props.projectTitle}</h3>
            <p>{props.projectDescription}</p>
        </div>
    );
};

export default Project;