import React from 'react';
import s from './../../Dialogs.module.css'

const Photo = (props) => { 
    return(
        <div className={s.dialog}>
            <img src={props.photo} alt=""/>
         </div>
    )
}

export default Photo;