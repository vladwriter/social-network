import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';



const Dialogs = (props) => {
    const state = props.dialogsPage;
    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} photo={d.photo}/>);
    const messages = state.messages.map(m => <Message message={m.message} key={m.id} />);
    const newMessageBody = state.newMessageBody;

    const onSendMessageClick = () =>{
        props.sendMessage();
    }
    const onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messages }</div>
                <div>
                    <div><textarea  value={newMessageBody}
                                    onChange={onNewMessageChange}
                                    placeholder='Write your message'
                    /><br/></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;