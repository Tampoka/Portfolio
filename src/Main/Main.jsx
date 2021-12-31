import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.intro}>
                    <span>Hi there</span>
                    <h1>I am Robot-coder</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    );
};

export default Main;