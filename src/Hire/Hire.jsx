import React from 'react';
import s from './Hire.module.scss'
import Button from "../common/components/button/Button";

const Hire = () => {
    return (
        <div className={s.hire}>
            <div className={s.container}>
                <h2 className={s.title}>I am open for remote work</h2>
                <Button linkTo="#contacts">Hire me </Button>
            </div>
        </div>
    );
};

export default Hire;