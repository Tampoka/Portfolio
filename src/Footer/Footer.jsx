import React from 'react';
import s from './Footer.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import {faTelegram} from '@fortawesome/free-brands-svg-icons/faTelegram';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';
import Rotate from 'react-reveal/Rotate';

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <h2 className={s.name}> Robot-coder</h2>
                <Rotate top left>
                    <div className={s.icons}>
                        <span className={s.icon}>
                        <a href="https://twitter.com/flusk20" target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                    </span>
                        <span className={s.icon}>
                    <a href="https://t.me/Tampoka" target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon icon={faTelegram}/>
                    </a>
                    </span>
                        <span className={s.icon}>
                        <a href="https://www.linkedin.com/in/olga-bajetha-b16a54211/" target="_blank"
                           rel="noreferrer noopener">
                        <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                    </span>
                    </div>
                </Rotate>
                <p className={s.copy}>
                    Copyright &copy; 2022 Tampoka. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;