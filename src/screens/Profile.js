import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/authActions';
import { SEARCH_OFFSET } from '../components/styleHelpers';
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
    const { loggedIn, user } = this.props.auth;
    if (loggedIn) {
      this.props.fetchCupboardTeas();
      this.props.returnCupboardTeas(user._id);
    }
  }

  isLoggedIn() {
    const { cupboard } = this.props;
    const { loggedIn, user } = this.props.auth;
    if (loggedIn) {
      return (
        <View>
          <ProfileInfo user={user} />
          <UserTeaList user={user} cupboard={cupboard} heading={'Teas in your cupboard'} />
        </View>
      );
    }
    return <Login />;
  }

  render() {
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

export default connect(mapStateToProps, { fetchUser, fetchCupboardTeas, returnCupboardTeas })(ProfileScene);
