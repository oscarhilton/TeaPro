import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchAllMoods, returnAllMoods } from '../actions/moodsActions';

class ChooseMoods extends Component {
  componentWillMount() {
    this.props.fetchAllMoods();
    this.props.returnAllMoods();
  }

  render() {
    console.log(this.props.moods);
    return (
      <Text>Hello there</Text>
    );
  }
}

const mapStateToProps = ({ moods }) => {
  return { moods };
};

export default connect(mapStateToProps, { fetchAllMoods, returnAllMoods })(ChooseMoods);
