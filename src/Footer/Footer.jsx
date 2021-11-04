import React from 'react';
import s from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'


const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <h2 className={s.name}> Robot-coder</h2>
                <div className={s.icons}>
                    <img  className={s.icon} src="" alt=""/>
                    <img  className={s.icon} src="" alt=""/>
                    <img  className={s.icon} src="" alt=""/>
                    <img  className={s.icon} src="" alt=""/>
                </div>
                <p className={s.copy}>
                    Copyright &copy; 2021 Tampoka. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;