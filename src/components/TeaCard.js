import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class TeaCard extends Component {
  render() {
    const { title, score, category } = this.props.tea;
    console.log(this.state);
    return (
      <View style={[styles.teaCardStyle, { backgroundColor: category.background }]}>
        <Text style={styles.titleStyle}>
          { title }
        </Text>
        <Text style={styles.scoreStlye}>
          { score }
        </Text>
      </View>
    );
  }
}

// const teaCardStyle = function(color) {
//    return;
//  };

const styles = StyleSheet.create({
  teaCardStyle: {
    width: 100,
    height: 100,
    padding: 8,
    margin: 1,
    borderRadius: 5,
    flex: 1,
    position: 'relative'
  },
  titleStyle: {
    fontSize: 12,
    fontWeight: '300',
    color: 'white',
  },
  scoreStlye: {
    fontSize: 10,
    color: 'white',
    textAlign: 'right',
    position: 'absolute',
    bottom: 8,
    right: 8,
  }
});

export default TeaCard;
