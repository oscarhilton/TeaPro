import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import TeaCardList from '../components/TeaCardList';
import ProfileInfo from '../components/ProfileInfo';
import { SectionHeader } from '../components/common';
import { getCupboardTeas, getWishlistTeas } from '../actions';
import Login from '../components/Login';

class ProfileScene extends Component {
  componentWillMount() {
    const { loggedIn, user } = this.props.auth;
    if (loggedIn) {
      this.props.getCupboardTeas(user._id);
      this.props.getWishlistTeas(user._id);
    }
  }

  isLoggedIn() {
    const { loggedIn } = this.props.auth;
    if (loggedIn) {
      return (
        <View>
          {this.renderProfile()}
          {this.renderCupboard()}
          {this.renderWishlist()}
        </View>
      );
    }
    return <Login />;
  }

  renderProfile() {
    const { loggedIn, user } = this.props.auth;
    if (loggedIn) {
      return <ProfileInfo user={user} />;
    }
  }

  renderCupboard() {
    const { user } = this.props.auth;
    const { loaded, teas } = this.props.cupboard;
    if (loaded) {
      return (
        <View>
          <SectionHeader
            heading={`${user.name}s cupboard`}
          />
          <TeaCardList
            teaList={teas}
          />
        </View>
      );
    }
    return <Text>LOADING!</Text>;
  }

  renderWishlist() {
    const { user } = this.props.auth;
    const { loaded, teas } = this.props.wishlist;
    if (loaded) {
      return (
        <View>
          <SectionHeader
            heading={`${user.name}s wishlist`}
          />
          <TeaCardList
            teaList={teas}
          />
        </View>
      );
    }
    return <Text>LOADING!</Text>;
  }

  render() {
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

export default connect(mapStateToProps, { getCupboardTeas, getWishlistTeas })(ProfileScene);
