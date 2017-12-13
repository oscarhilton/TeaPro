import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import ImageSlider from 'react-native-image-slider';
// import TeaCard from './TeaCard';
// import { CardSection } from './common';

class HeroTea extends Component {
  constructor(props) {
        super(props);

        this.state = {
            position: 0,
            interval: null
        };
    }

  componentWillMount() {
    this.setState({ interval: setInterval(() => {
        this.setState({ position: this.state.position === 1 ? 0 : this.state.position + 1 });
    }, 5000) });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <View style={styles.componentStyle} >
        <View style={styles.heroStyle}>
          <ImageSlider
            style={styles.imageStyle}
            height={270}
            images={[
              'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/23231451_10155940770709623_1263750874333768773_n.jpg?oh=922a59a773e0b5a3f38a97f7a8317b26&oe=5ACCFB4C',
              'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/23379845_10155940741994623_4970984937602014572_n.jpg?oh=5b05930bf7eacf0af90486d47b39a011&oe=5AC3FD8F'
            ]}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}
          />
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
    padding: 0,
  },
  imageStyle: {
    flex: 1,
    width: null
  },
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
