import React from 'react';
import s from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={s.nav}>
            <a href={"#main"}>Main</a>
            <a href={"#projects"} >Projects</a>
            <a href={"#skills"}>Skills</a>
            <a href={"#contacts"}>Contacts</a>
        </div>
    );
};

export default Nav;