import React from 'react';
import Profile from './Profile';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId){
      userId = 16898;
    }
    this.props.getUserProfile(userId);
<<<<<<< HEAD
    this.props.getStatus(userId)
    
=======
    this.props.getUserStatus(userId);
>>>>>>> 9f6bde7db35cfb8020d61703c9a79a3049333a19
  }

  render() {
    
    return (
<<<<<<< HEAD
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
=======
      <Profile {...this.props} profile={this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus}/>
>>>>>>> 9f6bde7db35cfb8020d61703c9a79a3049333a19
    )
  }

}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);