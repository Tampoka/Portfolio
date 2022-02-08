import React from 'react';
import s from './Main.module.scss'
import Particles from "react-tsparticles";
import {particlesOpt} from "../common/components/Particles/particlesOpt";
import ReactTypingEffect from 'react-typing-effect';

const Main = () => {

    return (
        <div className={s.mainBlock} id="main">
            <Particles className={s.particles} options={particlesOpt}/>
            <div className={s.container}>
                <div className={s.intro}>
                    <span>Hi there,</span>
                    <h1>I am Tampoka</h1>
                    <ReactTypingEffect text={"<Front-End developer  >"}
                                       speed={300}
                                       eraseDelay={100}
                                       typingDelay={500}
                                       cursor={"💻"}/>
                </div>
            </div>
        </div>
    );
};

export default Main;