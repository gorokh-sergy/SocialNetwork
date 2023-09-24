import React from 'react';
import styles from './../Dialogs.module.css'

const Message = ({msg}) => {
  return (
      <div className={styles.message}>{msg}</div>

  )
}

export default Message