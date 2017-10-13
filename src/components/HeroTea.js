import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import TeaCard from './TeaCard';
import { CardSection } from './common';

class HeroTea extends Component {
  render() {
    return (
      <View style={styles.componentStyle} >
        <View style={styles.heroStyle}>
          <Image
            style={styles.imageStyle}
            source={{ uri: 'https://33.media.tumblr.com/9d175c9e58a238dfb719547c26505aae/tumblr_nase02Lvxq1tiyj7vo1_500.jpg' }}
          />
          <Text style={styles.textStyle} >{this.props.heroText}This season's tea</Text>
          <View style={styles.teaCardStyle} >
            <TeaCard
              tea={{
                id: 61,
                name: 'Iron Buddha',
                type: 'Oolong',
                score: 4.4
              }}
              color={'#8A483C'}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  componentStyle: {
    position: 'relative'
  },
  heroStyle: {
    borderBottomWidth: 1,
    padding: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: null
  },
  textStyle: {
    backgroundColor: '#403C40',
    color: 'white',
    width: 'auto',
    height: 'auto',
    padding: 5,
    position: 'absolute',
    margin: 10,
    fontSize: 10,
    borderRadius: 10
  },
  teaCardStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  }
});

// <Text style={styles.textStyle} >{this.props.heroText}HELLO!</Text>
// <View style={styles.teaListStyle} >
//   <TeaCard
//     tea={{
//       id: 61,
//       name: 'Iron Buddha (Tie Guan Yin)',
//       type: 'Oolong',
//       score: 4.4,
//     }}
//     color={'#8A483C'}
//   />
// </View>

export default HeroTea;
