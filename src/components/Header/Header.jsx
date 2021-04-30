import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>
        <img  src = "https://www.logodesign.net/images/illustration-logo.png" alt='logo'/>
      </header>
    );
}

export default Header;