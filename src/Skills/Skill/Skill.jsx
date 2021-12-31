import React from 'react';
import s from './Skill.module.scss'

const Skill = ({title,description,icon}) => {
    return (
        <div className={s.skill} >
            <div className={s.skillInner}>
                <div className={s.icon}>
                    <img src={icon} alt="icon"/>
                </div>
                <div className={s.text}>
                    <h3>{title}</h3>
                    <p className={s.description}>{description}</p>
                </div>
        </div>
        </div>
    );
};

export default Skill;