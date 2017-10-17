import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class TeaCard extends Component {
  render() {
    return (
      <View style={teaCardStyle(this.props.color)}>
        <Text style={styles.titleStyle}>
          {this.props.tea.title}
        </Text>
        <Text style={styles.scoreStlye}>
          {this.props.tea.score}
        </Text>
      </View>
    );
  }
}

const teaCardStyle = function(color) {
   return {
     width: 100,
     height: 100,
     backgroundColor: color,
     padding: 8,
     margin: 1,
     borderRadius: 5,
     flex: 1,
     position: 'relative'
   };
 };

const styles = StyleSheet.create({
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
