import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileInfo = (props) => {
  return (
    <View style={styles.componentStyle} >
      <View style={styles.profileImageComponentStyle} >
        <Image
          style={styles.profileImageStyle}
          source={{ uri: props.user.avatar}}
        />
      </View>
      <View style={styles.profileDetailsStlye} >
        <View style={styles.topSectionStyle} >
          <View>
            <Text
              style={styles.usernameStlye}
            >
            {props.user.name}
            </Text>
          </View>
        </View>
        <View style={styles.bottomSectionStyle} >
        </View>
      </View>
      <Image
        style={styles.imageStyle}
        blurRadius={0}
        source={{ uri: 'https://picsum.photos/200/300/?random'}}
      />
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
    backgroundColor: '#000000',
    height: 400,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageComponentStyle: {
    margin: 10
  },
  profileDetailsStlye: {
    margin: 10
  },
  usernameStlye: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white'
  },
  imageStyle: {
    height: 400,
    zIndex: -1,
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  rankStyle: {
    fontSize: 12,
    fontWeight: '600',
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 20
  },
  profileImageStyle: {
    width: 125,
    height: 125,
    borderRadius: 60,
    borderColor: 'white',
    borderWidth: 1
  },
  topSectionStyle: {
    zIndex: 2
  }
});

export default ProfileInfo;
