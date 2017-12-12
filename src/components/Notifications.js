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
    socket.emit('subscribe', user._id); //59f4b1d01bc84b3b80ad34e0
    socket.on('conversation private post', this.displayNotification.bind(this));
    socket.on('incoming new follower', this.handleIncomingFollower.bind(this));
  }

  handleIncomingFollower(data) {
    const message = `${data.message} is now following you`;
    // alert(message);
    this.props.newNotification(message);
  }

  displayNotification( data ) {
    console.log(data, '<<<<<<<<<<<<!!!!');
  }

  handlePress() {
    const { user, socket } = this.props;
    socket.emit('send message', {
      room: user._id,
      message: `Some message ${user.name}, ${user.oauth_id}`
    });
    this.props.newNotification("New notifcation bla");
  }

  render() {
    console.log(this.props.notifications);
    const { notifications } = this.props;
    const notificationsList = notifications.list.map((note) => {
      return (
        <View>
          <Text>{note.message}</Text>
          <Text>{moment(note.timeStamp).fromNow()}</Text>
        </View>
      );
    });
    return (
      <View style={styles.container}>
        {/* {notificationsList} */}
        {/* <TouchableOpacity
          onPress={this.handlePress.bind(this)}
        >
          <Text style={styles.textStyle}>Give me one of them notifications</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    margin: 5,
    borderRadius: 20
  },
  textStyle: {
    color: '#212121',
    fontSize: 12
  }
});

const mapStateToProps = ({ notifications }) => {
  return { notifications };
};

export default connect(mapStateToProps, { newNotification })(Notifications);
