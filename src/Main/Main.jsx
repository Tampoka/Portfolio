import React from 'react';
import s from './Main.module.scss'
import Particles from "react-tsparticles";
import {particlesOpt} from "../common/components/Particles/particlesOpt";

const Main = () => {

    return (
        <div className={s.mainBlock} id="main">
            <Particles className={s.particles} options={particlesOpt}/>
            <div className={s.container}>
                <div className={s.intro}>
                    <span>Hi there,</span>
                    <h1>I am Robot-coder</h1>
                    <p>Front-End developer</p>
                </div>
            </div>
        </div>
    );
};

export default Main;