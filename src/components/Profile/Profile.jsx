import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
<<<<<<< HEAD
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
=======
      <ProfileInfo profile={props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
>>>>>>> 9f6bde7db35cfb8020d61703c9a79a3049333a19
      <MyPostsContainer store={props.store}/>
    </div>
  );
}

export default Profile;