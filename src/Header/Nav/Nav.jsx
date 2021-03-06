import {useState} from 'react';
import s from './Nav.module.scss';
import {Link} from 'react-scroll';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);
    const menuItemsClassName = s.menuItems + " " + (showMenu ? s.visible : "")

    return (
        <>
            <div className={s.nav}>
                <div className={menuItemsClassName}><Link to="main"
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
                          offset={1}>Contacts</Link></div>
            </div>
            <div className={s.burgerMenu}><FontAwesomeIcon icon={faBars} onClick={toggleMenu}/></div>
        </>
    );
};

export default Nav;