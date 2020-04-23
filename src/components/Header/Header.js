import React from 'react';
import HeaderClasses from './Header.module.css';

const Header = (props) => {
    
    const menuElements = props.menuItems.map( el => <li key={el.id} onClick={el.value !== "CamCube" ? () => props.switchComponents(el.value) : null}>{el.text}</li>)
    
    return(
        <nav className={HeaderClasses.header}>
            {menuElements}
        </nav>
    )
}

export default Header;