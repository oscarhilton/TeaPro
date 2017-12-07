/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class Notifications extends Component {
  constructor(props) {
    super(props);
    const { user, navigation, socket } = this.props;
    socket.emit('subscribe', user._id); //59f4b1d01bc84b3b80ad34e0
    socket.on('conversation private post', this.displayNotification);
  }

  displayNotification( data ) {
    console.log(data, '<<<<<<<<<<<<!!!!');
    alert(data.message);
  }

  handlePress() {
    const { user, socket } = this.props;
    socket.emit('send message', {
      room: user._id,
      message: `Some message ${user.name}, ${user.oauth_id}`
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.handlePress.bind(this)}
        >
          <Text>I'm the Notifications component</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9eee9c',
    position: 'absolute',
    bottom: 0,
    padding: 10,
    width: '100%'
  },
});

// const mapStateToProps = ({ auth }) => {
//   return { auth };
// };

export default connect()(Notifications);
