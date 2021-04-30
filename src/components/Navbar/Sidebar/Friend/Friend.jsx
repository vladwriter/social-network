import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return(
        <div className={s.item}>
          <img src={props.photo} alt=""/><br></br>
          <span>{props.name}</span>
        </div>
    );
}

export default Friend;