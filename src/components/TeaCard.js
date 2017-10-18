import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class TeaCard extends Component {
  handlePress() {
    // this.props.navigation.navigate('ViewTea');
  }

  render() {
    console.log(this.props);
    const { title, score, category } = this.props.tea;
    return (
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}
      >
        <View style={[styles.teaCardStyle, { backgroundColor: category.background }]}>
          <Text style={styles.titleStyle}>
            { title }
          </Text>
          <Text style={styles.scoreStlye}>
            { score }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

// const teaCardStyle = function(color) {
//    return;
//  };

const styles = StyleSheet.create({
  teaCardStyle: {
    width: 90,
    height: 100,
    padding: 8,
    margin: 1,
    borderRadius: 8,
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
