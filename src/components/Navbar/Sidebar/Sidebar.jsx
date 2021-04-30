import React from 'react';
import Friend from './Friend/Friend';
import s from './Sidebar.module.css';

const Sidebar = (props) => {
    const friend =  props.sidebar.friends.map( f => <Friend photo={f.photo} name={f.name}/>);
    return(
      <div className={s.sidebar}>
        My friends
        <div className={s.space}>
         {friend} 
        </div>
      </div>
    );
}

export default Sidebar;