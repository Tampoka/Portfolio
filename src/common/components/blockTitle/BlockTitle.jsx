import React from 'react';
import s from './BlockTitle.module.scss';

const BlockTitle = (props) => {
    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>
    );
};

export default BlockTitle;