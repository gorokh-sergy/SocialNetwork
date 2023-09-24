import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {

  const postsElements = props.posts
      .map(post => <Post message={post.message} likesCount={post.likesCount}/>)

  const newPostElement = React.createRef()

  const onAddPost = () => {
    props.addPost()
  }
  const onPostChange = () => {
    const text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
      <div className={styles.myPostsContent}>
        <h3>My Posts</h3>
        <div>
          <div>
            <textarea
                onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>
          </div>
          <div>
            <button onClick={onAddPost}>Add post</button>
          </div>

        </div>
        <div className={styles.posts}>
          {postsElements}
        </div>
      </div>
  )
}

export default MyPosts