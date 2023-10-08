import React from 'react';
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
      <header className={styles.header}>
        <img src="https://logowik.com/content/uploads/images/lion7161.logowik.com.webp" alt=""/>

        <div className={styles.loginBlock}>
          {props.isAuth ? props.login
              : <NavLink to={'/login'}>Login</NavLink>}

        </div>
      </header>
  )
}

export default  Header