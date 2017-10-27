import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import TeaCardList from '../components/TeaCardList';
import ProfileInfo from '../components/ProfileInfo';
import { SectionHeader } from '../components/common';
import { getCupboardTeas } from '../actions';
import Login from '../components/Login';

class ProfileScene extends Component {
  componentWillMount() {
    const { loggedIn, user } = this.props.auth;
    if (loggedIn) {
      console.log('fetching cupboard?');
      this.props.getCupboardTeas(user._id);
    }
  }

  renderProfile() {
    const { loggedIn, user } = this.props.auth;
    if (loggedIn) {
      return <ProfileInfo user={user} />;
    }
  }

  renderCupboard() {
    const { loggedIn, user } = this.props.auth;
    const { loaded, teas } = this.props.cupboard;
    if (loggedIn) {
      if (loaded) {
        return (
          <View>
            <SectionHeader
              heading={`${user.name}s cupboard`}
            />
            <TeaCardList
              teaList={teas}
              colour={'#212121'}
            />
          </View>
        );
      }
      return <Text>LOADING!</Text>;
    }
    return <Login />;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderProfile()}
        {this.renderCupboard()}
      </View>
    );
  }
}

const mapStateToProps = ({ auth, cupboard }) => {
  return { auth, cupboard };
};

export default connect(mapStateToProps, { getCupboardTeas })(ProfileScene);
