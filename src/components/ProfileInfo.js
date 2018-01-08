import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import UserFollowScoreButton from './UserFollowScoreButton';

const ProfileInfo = ({ user }) => {

  const numFollowing = user.following ? user.following.length : 0;
  const numFollowers = user.followers ? user.followers.length : 0;

  return (
    <View style={styles.componentStyle} >
      <View style={styles.profileImageComponentStyle} >
        <Image
          style={styles.profileImageStyle}
          source={{ uri: user.avatar}}
        />
      </View>
      <View style={styles.profileDetailsStlye} >
        <View style={styles.topSectionStyle} >
          <View style={styles.usernameContainer}>
            <Text
              style={styles.usernameStlye}
            >
            {user.name}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomSectionStyle} >
        <UserFollowScoreButton
          followScore={numFollowing}
          followText={'Following'}
          users={user.following}
        />
        <UserFollowScoreButton
          followScore={numFollowers}
          followText={'Followers'}
          users={user.followers}
        />
      </View>
      {/* <Image
        style={styles.imageStyle}
        blurRadius={0}
        source={{ uri: 'https://media.istockphoto.com/vectors/cube-light-pattern-background-vector-background-blue-green-vector-id479115294?s=2048x2048'}}
      /> */}
    </View>
  );
};

// <View>
//   <Text
//     style={styles.rankStyle}
//   >
//     Tea Master
//   </Text>
// </View>


const styles = StyleSheet.create({
  componentStyle: {
    backgroundColor: '#F64041',
    height: 270,
    flexDirection: 'column',
    shadowOffset: {
      height: 3,
      width: 1
    },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    zIndex: 2,
    justifyContent: 'center'
  },
  profileImageComponentStyle: {
    margin: 10
  },
  profileDetailsStlye: {
    margin: 10
  },
  usernameContainer: {
  },
  usernameStlye: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    color: '#fff'
  },
  imageStyle: {
    height: 400,
    zIndex: -1,
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  rankStyle: {
    fontSize: 12,
    fontWeight: '600',
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 20
  },
  profileImageStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center'
  },
  topSectionStyle: {
    zIndex: 2
  },
  bottomSectionStyle: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    flexDirection: 'row'
  }
});

export default ProfileInfo;
