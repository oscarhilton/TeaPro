import React, { Component } from 'react';
import { View } from 'react-native';
import { SectionHeader, TextSection } from './common';

class Accordion extends Component {
  render() {
    return (
      <View>
        <SectionHeader heading={this.props.heading} />
        <TextSection text={this.props.text} />
      </View>
    );
  }
}

export default Accordion;
