import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchUser, checkOnBoarding, logOutUser } from '../actions/authActions';
import { goToScene } from '../actions/navActions';
import { Button } from '../components/common';
import ProfileInfo from '../components/ProfileInfo';
import UserTeaList from '../components/UserTeaList';
import Login from '../components/Login';
import {
  fetchCupboardTeas,
  returnCupboardTeas,
} from '../actions';

class ProfileScene extends Component {
  async componentWillMount() {
    const { user } = this.props.auth;
    await this.props.fetchUser();
    this.props.fetchCupboardTeas();
    this.props.returnCupboardTeas(user._id);
  }

  async componentWillReceiveProps(newProps) {
    if (this.props.auth.loggedIn !== newProps.auth.loggedIn) {
      const { loggedIn, user, onBoard } = newProps.auth;
      if (loggedIn) {
        await this.props.checkOnBoarding(user._id);
        if (!onBoard) {
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
    const { cupboard, wishlist } = this.props;
    console.log(wishlist, cupboard);
    // const showCupboard =
    //   cupboard ?
    //   return <UserTeaList user={user} cupboard={cupboard} heading={'Teas in your cupboard'} /> : return null;
    const { loggedIn, user } = this.props.auth;
    if (loggedIn) {
      return (
        <ScrollView>
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
        </ScrollView>
      );
    }
    return <Login />;
  }

  render() {
    console.log(this.props.auth);
    return (
      <View style={{ flex: 1 }}>
        {this.isLoggedIn()}
      </View>
    );
  }
}

const mapStateToProps = ({ auth, cupboard, wishlist }) => {
  return { auth, cupboard, wishlist };
};

export default connect(mapStateToProps, {
  fetchUser,
  fetchCupboardTeas,
  returnCupboardTeas,
  checkOnBoarding,
  logOutUser,
  goToScene
})(ProfileScene);
