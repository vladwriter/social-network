import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';

const MyPosts = (props) => {
  
  const posts = props.posts.map( p => <Post message={p.text} likesCount={p.likesCount} />);

  const newPostElement = React.createRef();

  const onAddPost = (values) =>{
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostForm onSubmit ={onAddPost} />
      <div className={s.posts}>
        {posts}
      </div>
    </div>
  );
}

let AddNewPostForm = (props) =>{
  return (
    <form onSubmit={props.handleSubmit}>
    <div>
      <Field name="newPostText" component="textarea"/>
    </div>
    <div>
      <button>Add post</button>
    </div>
    </form>
  )
}
AddNewPostForm = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm);
export default MyPosts;