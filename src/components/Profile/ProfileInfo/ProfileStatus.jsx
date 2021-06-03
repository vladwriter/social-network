import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component{
    
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
        this.props.updateStatus(this.state.status);
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render(){
      return (
            <div>
                {!this.state.editMode &&
                <div>
<<<<<<< HEAD
                    <span onDoubleClick={this.activateEditMode || '--------' }>{this.props.status}</span>
=======
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
>>>>>>> 9f6bde7db35cfb8020d61703c9a79a3049333a19
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
                </div>}
        </div>
    )
}
}
export default ProfileStatus;