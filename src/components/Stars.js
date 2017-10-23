import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const fullStar = require('../assets/images/star-full.png');
const halfStar = require('../assets/images/star-half-empty.png');
const emptyStar = require('../assets/images/star-empty.png');

class Stars extends Component {
  state = {
    one: fullStar,
    two: fullStar,
    three: fullStar,
    four: fullStar,
    five: fullStar
  }

  componentDidMount() {
    const { score } = this.props;
    switch (score) {
      case score > 0.5:
        this.setState({
          one: halfStar,
          two: emptyStar,
          three: emptyStar,
          four: emptyStar,
          five: emptyStar
        });
        break;
      case score > 1:
        this.setState({
          one: fullStar,
          two: emptyStar,
          three: emptyStar,
          four: emptyStar,
          five: emptyStar
        });
        break;
      default:
        this.setState({
          one: emptyStar,
          two: emptyStar,
          three: emptyStar,
          four: emptyStar,
          five: emptyStar
        });
    }
  }

  render() {
    console.log(this.props, this.state);
    const { one, two, three, four, five } = this.state;
    return (
      <View style={styles.ratingsStyle} >
        <Image
          source={one}
          style={styles.starStyle}
        />
        <Image
          source={two}
          style={styles.starStyle}
        />
        <Image
          source={three}
          style={styles.starStyle}
        />
        <Image
          source={four}
          style={styles.starStyle}
        />
        <Image
          source={five}
          style={styles.starStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  starStyle: {
    width: 12,
    height: 12
  },
  ratingsStyle: {
    flexDirection: 'row'
  }
});

export default Stars;
