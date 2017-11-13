import React, { Component } from 'react';
import {
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { clearSearch } from '../actions/searchActions';
import { goToScene } from '../actions/navActions';
import TeaCard from './TeaCard';

class TeaCardButton extends Component {
  handlePress() {
    this.props.clearSearch();
    this.props.goToScene('ViewTea', this.props.tea);
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

export default connect(null, { goToScene, clearSearch })(TeaCardButton);
