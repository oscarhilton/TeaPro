/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import UserTeaList from '../components/UserTeaList';
import ProfileInfo from '../components/ProfileInfo';

import {
  fetchUserCupboardTeas,
  returnUserCupboardTeas,
  fetchUserWishlistTeas,
  returnUserWishlistTeas
  // fetchWishlistTeas,
  // returnWishlistTeas,
  // fetchUserImages,
  // returnUserImages,
} from '../actions/userActions';

class UserProfile extends Component {
  componentWillReceiveProps(newProps) {
    const { loading, userProfile } = newProps.users;
    if (userProfile !== this.props.users.userProfile) {
      if (!loading) {
        this.props.fetchUserCupboardTeas();
        this.props.returnUserCupboardTeas(userProfile._id);
        this.props.fetchUserWishlistTeas();
        this.props.returnUserWishlistTeas(userProfile._id);

        // this.props.fetchUserImages();
        // this.props.returnUserImages(userProfile._id);
      }
    }
  }
  renderUser() {
    const { users } = this.props;
    const { loading, userProfile, wishlist, cupboard } = users;
    const { name } = userProfile;
    switch (loading) {
      case null:
        return (<Text>null</Text>);
      case true:
        return (<Text>loading</Text>);
      case false:
        return (
          <View>
            <ProfileInfo user={userProfile} />
            <UserTeaList data={{ ...cupboard }} heading={`Teas in ${name}'s cupboard`} />
            <UserTeaList data={{ ...wishlist }} heading={`Teas in ${name}'s wishlist`} />
          </View>
        );
      default:
        return;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderUser()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ users }) => {
  return { users };
};

export default connect(mapStateToProps, {
  fetchUserCupboardTeas,
  returnUserCupboardTeas,
  fetchUserWishlistTeas,
  returnUserWishlistTeas
})(UserProfile);
