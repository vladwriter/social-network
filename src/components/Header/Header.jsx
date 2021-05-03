import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return(
        <header className={s.header}>
        <img  src = "https://www.logodesign.net/images/illustration-logo.png" alt='logo'/>
        <div className={s.loginBlock}>
          {PaymentResponse.isAuth ? props.login:
          <NavLink to={'/login'}>Login</NavLink> }
        </div>
      </header>
    );
}

export default Header;