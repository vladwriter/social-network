import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZadRfF_T-e-7C4nufNJ8T514HyWO5WDG7Ig&usqp=CAU' />
      </div>
      <div className={s.descriptionBlock}>
        img+desc
        </div>
    </div>
  );
}

export default ProfileInfo;