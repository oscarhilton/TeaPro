import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from '../components/common';
import ProfileInfo from '../components/ProfileInfo';
import UserTeaList from '../components/UserTeaList';
import Login from '../components/Login';
import ImageCardList from '../components/ImageCardList';

import {
  fetchUser,
  checkOnBoarding,
  logOutUser
} from '../actions/authActions';
import { goToScene } from '../actions/navActions';
import {
  fetchCupboardTeas,
  returnCupboardTeas,
} from '../actions/cupboardActions';
import {
  fetchWishlistTeas,
  returnWishlistTeas,
} from '../actions/wishlistActions';
import {
  fetchUserImages,
  returnUserImages,
} from '../actions/mediaActions';

class ProfileScene extends Component {
  async componentWillMount() {
    const { user } = this.props.auth;
    await this.props.fetchUser();
    this.props.fetchCupboardTeas();
    this.props.fetchWishlistTeas();
    this.props.fetchUserImages();
    this.props.returnCupboardTeas(user._id);
    this.props.returnWishlistTeas(user._id);
    this.props.returnUserImages(user._id);
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
    const { cupboard, wishlist, media } = this.props;
    const { loggedIn, user } = this.props.auth;
    console.log(media);
    if (loggedIn) {
      return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black'}}>
          <ProfileInfo user={user} />
          <Text style={{ padding: 10, backgroundColor: 'white' }}>{user.profileBio}</Text>
          <UserTeaList
            user={user}
            data={cupboard}
            heading={'Teas in your cupboard'}
          />
          <UserTeaList
            user={user}
            data={wishlist}
            heading={'Teas in your wishlist'}
          />
          <ImageCardList imageList={[1, 2]} />
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

const mapStateToProps = ({ auth, cupboard, wishlist, media }) => {
  return { auth, cupboard, wishlist, media };
};

export default connect(mapStateToProps, {
  fetchUser,
  fetchCupboardTeas,
  returnCupboardTeas,
  fetchWishlistTeas,
  returnWishlistTeas,
  fetchUserImages,
  returnUserImages,
  checkOnBoarding,
  logOutUser,
  goToScene
})(ProfileScene);
