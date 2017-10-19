import React, { Component } from 'react';
import {
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { showTea } from '../actions';
import TeaCard from './TeaCard';

class TeaCardButton extends Component {
  handlePress() {
    this.props.showTea(this.props.tea);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}
      >
        <TeaCard tea={this.props.tea} />
      </TouchableOpacity>
    );
  }
}

export default connect(null, { showTea })(TeaCardButton);
