import React from 'react';
import s from './Skill.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact} from '@fortawesome/free-brands-svg-icons/faReact';

const Skill = ({title, description, icon}) => {
    return (
        <div className={s.skill}>
            <div className={s.skillInner}>
                <div className={s.icon}>
                    {icon !== faReact
                        ? <img src={icon} alt="icon"/>
                        : <FontAwesomeIcon icon={icon} spin/>}
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