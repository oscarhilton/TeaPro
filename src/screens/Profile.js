import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import ProfileInfo from '../components/ProfileInfo';
import UserTeaList from '../components/UserTeaList';
import Login from '../components/Login';
import {
  fetchCupboardTeas,
  returnCupboardTeas,
} from '../actions';

class ProfileScene extends Component {
  componentWillMount() {
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
      <View style={{ flex: 1 }}>
        {this.isLoggedIn()}
      </View>
    );
  }
}

const mapStateToProps = ({ auth, cupboard }) => {
  return { auth, cupboard };
};

export default connect(mapStateToProps, { fetchCupboardTeas, returnCupboardTeas })(ProfileScene);
