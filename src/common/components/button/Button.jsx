import React from 'react';
import s from './Button.module.scss';

const Button = (props) => {
    return (
        <>
            <a className={s.btn} href={props.linkTo}>Hire me</a>
        </>
    );
};

export default Button;