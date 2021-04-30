import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  const posts = props.posts.map( p => <Post message={p.text} likesCount={p.likesCount} />);

  const newPostElement = React.createRef();

  const onAddPost = () =>{
    props.addPost();
  }

  const onPostChange = () =>{
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <textarea onChange = {onPostChange} ref= {newPostElement} value = {props.newPostText}/>
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div>
        New post
      </div>
      <div className={s.posts}>
        {posts}
      </div>
    </div>
  );
}

export default MyPosts;