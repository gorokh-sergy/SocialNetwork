import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  let {message, likesCount} = props
  return (
      <div className={styles.item}>
        <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
             alt=""/>
        {message}
        <div>
          <span>like {likesCount}</span>
        </div>
      </div>
  )
}

export default Post