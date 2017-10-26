import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import TeaCardList from '../components/TeaCardList';
import { getCupboardTeas } from '../actions';
import { loginWithGoogle } from '../actions/authActions';
import Login from '../components/Login';

class ProfileScene extends Component {
  componentWillMount() {
    this.props.getCupboardTeas(this.props.auth.user._id);
  }

  renderContent() {
    const { loggedIn, cupboard } = this.props.auth;
    if (loggedIn) {
      if (cupboard.loaded) {
        return (
          <View>
            <Text>HELLO</Text>
            <TeaCardList
              teaList={cupboard}
              colour={'#212121'}
            />
            <Text>HELLO</Text>
          </View>
        );
      }
      return <Text>LOADING!</Text>;
      // return (
      //   <TeaCardList
      //     teaList={cupboard}
      //     colour={'#212121'}
      //   />
      // );
    }
    return <Login />;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderContent()}
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { loginWithGoogle, getCupboardTeas })(ProfileScene);
