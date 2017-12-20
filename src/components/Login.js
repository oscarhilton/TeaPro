import React, { Component, PropTypes } from 'react';
import {
  Linking,
  StyleSheet,
  Platform,
  View,
  Image
} from 'react-native';
import SafariView from 'react-native-safari-view';
import { connect } from 'react-redux';
import { onLoggedIn } from '../actions/authActions';
import { fetchCupboardTeas, returnCupboardTeas } from '../actions/cupboardActions';
import { Button } from '../components/common';
import ImageBackground from './ImageBackground';
import { api } from '../api';

class Login extends Component {

  // Set up Linking
  componentDidMount() {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this.handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  }

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = ({ url }) => {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/);
    // Decode the user string and parse it into JSON
    const user = JSON.parse(decodeURI(user_string));
    // Call onLoggedIn function of parent component and pass user object
    this.props.onLoggedIn(user);
    this.props.fetchCupboardTeas();
    this.props.returnCupboardTeas(user._id);
    //Close SafariView
    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    }
  }

  // Handle Login with Facebook button tap
  loginWithFacebook = () => this.openURL(`${api}/auth/facebook`);

  // Handle Login with Google button tap
  loginWithGoogle = () => this.openURL(`${api}/auth/google`);

  // Open URL in a browser
  openURL = (url) => {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      SafariView.show({
        url,
        fromBottom: true,
      });
    }
    // Or Linking.openURL on Android
    else {
      Linking.openURL(url);
    }
  };



  render() {
    return (
      <ImageBackground
        image={"https://i.imgur.com/knz227O.jpg"}
      >
        <View style={styles.bottomButtons}>
          <Button
            onPress={this.loginWithGoogle}
          >
            Login with google
          </Button>
          <Button
            onPress={this.loginWithFacebook}
          >
            Login with facebook
          </Button>
        </View>
      </ImageBackground>
    );
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    width: 400
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 40,
    left: '15%',
    width: '70%',
    zIndex: 3
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default connect(null, { onLoggedIn, fetchCupboardTeas, returnCupboardTeas })(Login);
