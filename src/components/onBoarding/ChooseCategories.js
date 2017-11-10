import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  requestTeas,
  getAllCategories
} from '../../actions/moodsActions';
import ThumbnailButton from '../ThumbnailButton';

class ChooseMoods extends Component {
  componentWillMount() {
    this.props.requestTeas();
    this.props.getAllCategories();
  }

  handleChoice(id) {
    const { chosenMoods } = this.props.moods;
    if (chosenMoods.indexOf(id) > -1) {
      this.props.removeMoodFromUser(id);
    } else if (chosenMoods.length > -1) {
      this.props.addMoodToUser(id);
    }
  }

  stlyeChoice(id) {
    const { chosenMoods } = this.props.moods;
    if (chosenMoods.indexOf(id) > -1) {
      return true;
    }
    return false;
  }

  render() {
    const renderMoods = this.props.moods.moods.map((mood) => {
      const clicked = this.stlyeChoice(mood._id);
      return (
        <ThumbnailButton
          key={mood._id}
          data={mood}
          clicked={clicked}
          handleClick={this.handleChoice.bind(this, mood._id)}
        />
      );
    });
    return (
      <View style={styles.componentStyle}>
        {renderMoods}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  componentStyle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

const mapStateToProps = ({ teaList }) => {
  return { teaList };
};

export default connect(mapStateToProps, {
  requestTeas,
  getAllCategories
 })(ChooseMoods);
