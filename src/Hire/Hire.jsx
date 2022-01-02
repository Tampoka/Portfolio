import React from 'react';
import s from './Hire.module.scss'

const Hire = () => {
    return (
        <div className={s.hire}>
            <div className={s.container}>
                <h2 className={s.title}>I am open for remote work</h2>
                <button className={s.btn}>Hire me</button>
            </div>
        </div>
    );
};

export default Hire;