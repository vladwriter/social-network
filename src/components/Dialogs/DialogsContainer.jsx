import React from 'react';
import { connect } from 'react-redux';
import {compose } from 'redux';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        sendMessage: (newMessageBody) =>{
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);