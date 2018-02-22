/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import moment from 'moment';

import { newNotification } from '../actions/notificationActions';

class Notifications extends Component {
  constructor(props) {
    super(props);
    const { user, socket } = this.props;
    if (user) {
      socket.emit('subscribe', user._id); //59f4b1d01bc84b3b80ad34e0
      socket.on('conversation private post', this.displayNotification.bind(this));
      socket.on('incoming new follower', this.handleIncomingFollower.bind(this));
    }
  }

  handleIncomingFollower(data) {
    const message = `${data.message} is now following you`;
    // alert(message);
    this.props.newNotification(message);
  }

  displayNotification(data) {
    console.log(data, ' incoming notification data');
  }

  renderPopup() {
    const { notifications } = this.props;
    if (notifications.popup) {
      const { message, timestamp } = notifications.popup;
      return (
        <View style={styles.container}>
          <Text style={styles.textStyle}>{message}</Text>
          <Text style={styles.timeStyle}>{moment(timestamp).fromNow()}</Text>
        </View>
      );
    }
    return;
  }

  render() {
    return (
      <View>
        {this.renderPopup()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.3,
    width: '95%',
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 10,
    margin: '2.5%',
    marginBottom: 0
  },
  textStyle: {
    color: '#212121',
    fontSize: 14,
    marginBottom: 15
  },
  timeStyle: {
    color: 'rgb(144,144,144)',
    fontSize: 11,
    alignSelf: 'flex-end'
  }
});

const mapStateToProps = ({ notifications }) => {
  return { notifications };
};

export default connect(mapStateToProps, { newNotification })(Notifications);
