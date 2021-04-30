import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'
import Photo from './Photo/Photo';

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id; 
    return(
        <div className={s.dialog + ' ' + s.active}>
            <Photo photo={props.photo}/>
            <NavLink to={path}>{props.name}</NavLink>
         </div>
    )
}

export default DialogItem;