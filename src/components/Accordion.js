import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SectionHeader, TextSection } from './common';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  handleCollapse() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const collapsedText = `${this.props.text.substring(0, 100)}...`;
    const showText = this.state.collapsed ? collapsedText : this.props.text;
    return (
      <TouchableOpacity
        onPress={this.handleCollapse.bind(this)}
      >
        <SectionHeader heading={this.props.heading} />
        <TextSection textStyle={this.props.textStyle} text={showText} />
      </TouchableOpacity>
    );
  }
}

export default Accordion;
