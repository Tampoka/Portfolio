import React from 'react';
import s from './Additional.module.css'
import styleContainer from './../common/styles/Container.module.css'

const Additional = () => {
    return (
        <div className={s.ad}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <h2 className={s.title}>I am open for remote work</h2>
                <button className={s.btn}>Hire me</button>
            </div>
        </div>
    );
};

export default Additional;