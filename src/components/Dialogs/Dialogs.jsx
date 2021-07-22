import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';


const Dialogs = (props) => {
    const state = props.dialogsPage;
    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} photo={d.photo}/>);
    const messages = state.messages.map(m => <Message message={m.message} key={m.id} />);
    const newMessageBody = state.newMessageBody;

    const addNewMessage = (values) =>{
       props.sendMessage(values.newMessageBody);
    }


    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messages }</div>
                < AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}
const AddMessageForm = (props)=>{
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/><br/></div>
            <div><button>Send</button></div>
        </form> )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;