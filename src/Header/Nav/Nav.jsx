import React from 'react';
import s from './Nav.module.scss';
import {Link} from 'react-scroll';

const Nav = () => {
    return (
        <div className={s.nav}>
            <Link to="main"
                  activeClass={s.active}
                  spy={true}
                  smooth={true}
                  duration={600}>
                Main</Link>
            <Link to="projects" activeClass={s.active}
                  spy={true}
                  smooth={true}
                  duration={600}>Projects</Link>
            <Link to="skills" activeClass={s.active}
                  spy={true}
                  smooth={true}
                  duration={600}>Skills</Link>
            <Link to="contacts" activeClass={s.active}
                  spy={true}
                  smooth={true}
                  duration={600}
            offset={1}>Contacts</Link>
        </div>
    );
};

export default Nav;