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
          <View>
            <Text
              style={styles.rankStyle}
            >
              Tea Master
            </Text>
          </View>
        </View>
        <View style={styles.bottomSectionStyle} >
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentStyle: {
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginTop: 20,
    shadowColor: '#000000',
    shadowOffset: { height: 2 },
    shadowOpacity: 0.15
  },
  profileImageComponentStyle: {
    margin: 10
  },
  profileDetailsStlye: {
    margin: 10
  },
  usernameStlye: {
    fontSize: 18,
    fontWeight: '600'
  },
  rankStyle: {
    fontSize: 12,
    fontWeight: '600',
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 20
  },
  profileImageStyle: {
    width: 75,
    height: 75,
    borderRadius: 40
  },
  topSectionStyle: {
    flexDirection: 'row'
  }
});

export default ProfileInfo;
