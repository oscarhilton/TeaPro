import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import TeaCardList from '../components/TeaCardList';
import { SectionHeader } from '../components/common';
import { getCupboardTeas } from '../actions';
import Login from '../components/Login';

class ProfileScene extends Component {
  componentWillMount() {
    this.props.getCupboardTeas(this.props.auth.user._id);
  }

  renderCupboard() {
    const { loggedIn, user } = this.props.auth;
    const { loaded, teas } = this.props.cupboard;
    if (loggedIn) {
      if (loaded) {
        return (
          <View>
            <SectionHeader
              heading={`${user.firstName}s cupboard`}
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
        {this.renderCupboard()}
      </View>
    );
  }
}

const mapStateToProps = ({ auth, cupboard }) => {
  return { auth, cupboard };
};

export default connect(mapStateToProps, { getCupboardTeas })(ProfileScene);
