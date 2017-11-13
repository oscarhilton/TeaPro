import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { fetchUser, checkOnBoarding, logOutUser } from '../actions/authActions';
import { goToScene } from '../actions/navActions';
import { SEARCH_OFFSET } from '../components/styleHelpers';
import { Button } from '../components/common';
import ProfileInfo from '../components/ProfileInfo';
import UserTeaList from '../components/UserTeaList';
import Login from '../components/Login';
import {
  fetchCupboardTeas,
  returnCupboardTeas,
} from '../actions';

class ProfileScene extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.auth.loggedIn !== newProps.auth.loggedIn) {
      const { loggedIn, user, onBoard } = newProps.auth;
      if (loggedIn) {
        this.props.checkOnBoarding(user._id);
        if (onBoard) {
          this.props.fetchCupboardTeas();
          this.props.returnCupboardTeas(user._id);
        } else {
          this.props.goToScene('OnBoarding', user);
        }
      }
    }
  }

  handleOpenOnBoarding() {
    const { user } = this.props.auth;
    this.props.goToScene('OnBoarding', user);
  }

  handleLogOut() {
    this.props.logOutUser();
  }

  isLoggedIn() {
    const { cupboard } = this.props;
    const { loggedIn, user } = this.props.auth;
    if (loggedIn) {
      return (
        <View>
          <ProfileInfo user={user} />
          <UserTeaList user={user} cupboard={cupboard} heading={'Teas in your cupboard'} />
          <View style={{ height: 100 }}>
            <Button
              onPress={this.handleLogOut.bind(this)}
            >
              Log Out
            </Button>
            <Button
              onPress={this.handleOpenOnBoarding.bind(this)}
            >
              Open OnBoarding
            </Button>
          </View>
        </View>
      );
    }
    return <Login />;
  }

  render() {
    console.log(this.props.auth);
    return (
      <View style={{ flex: 1, paddingTop: SEARCH_OFFSET }}>
        {this.isLoggedIn()}
      </View>
    );
  }
}

const mapStateToProps = ({ auth, cupboard }) => {
  return { auth, cupboard };
};

export default connect(mapStateToProps, {
  fetchUser,
  fetchCupboardTeas,
  returnCupboardTeas,
  checkOnBoarding,
  logOutUser,
  goToScene
})(ProfileScene);
