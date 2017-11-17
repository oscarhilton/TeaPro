import React, { Component } from 'react';
import {
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { fetchTeaDetails, makeCurrentTea } from '../actions/teaActions';
import { clearSearch } from '../actions/searchActions';
import { goToScene } from '../actions/navActions';
import TeaCard from './TeaCard';

class TeaCardButton extends Component {
  handlePress() {
    const { tea, teas } = this.props;
    this.props.clearSearch();
    this.props.fetchTeaDetails();
    this.props.makeCurrentTea(tea._id);
    this.props.goToScene('ViewTea');
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

const mapStateToProps = ({ teas }) => {
  return { teas };
};

export default connect(mapStateToProps, {
  goToScene,
  clearSearch,
  fetchTeaDetails,
  makeCurrentTea
})(TeaCardButton);
