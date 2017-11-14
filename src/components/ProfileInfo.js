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
    backgroundColor: '#657D66',
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
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 2
  },
  topSectionStyle: {
  }
});

export default ProfileInfo;
