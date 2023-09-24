import React from 'react';
import styles from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = ({name, id}) => {

  return (
      <div className={styles.dialog + ' ' + styles.active}>
        <NavLink to={id}> {name} </NavLink>
      </div>)
}

export default DialogItem