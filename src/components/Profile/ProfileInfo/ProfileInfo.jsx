import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
if(!props.profile){
  return <Preloader />
}

  return (
    <div>
      {/* <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZadRfF_T-e-7C4nufNJ8T514HyWO5WDG7Ig&usqp=CAU' />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <div>{props.profile.fullName}</div>
        <ProfileStatus status={props.status} updateStatus = {props.updateStatus}/>
        <ul>Contacts:
          <li>{props.profile.contacts.facebook}</li>
          <li>{props.profile.contacts.website}</li>
          <li>{props.profile.contacts.twitter}</li>
          <li>{props.profile.contacts.instagram}</li>
          <li>{props.profile.contacts.youtube}</li>
          <li>{props.profile.contacts.github}</li>
        </ul>
        </div>
    </div>
  );
}

export default ProfileInfo;