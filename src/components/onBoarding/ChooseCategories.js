import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  requestCategories,
  returnAllCategories,
  addCategoryToUser,
  removeCategoryFromUser

} from '../../actions/categoryActions';
import ThumbnailButton from '../ThumbnailButton';

class ChooseCategories extends Component {
  componentWillMount() {
    this.props.requestCategories();
    this.props.returnAllCategories();
  }

  handleChoice(id) {
    const { chosenCategories } = this.props.categories;
    if (chosenCategories.indexOf(id) > -1) {
      this.props.removeCategoryFromUser(id);
    } else if (chosenCategories.length > -1) {
      this.props.addCategoryToUser(id);
    }
  }

  stlyeChoice(id) {
    const { chosenCategories } = this.props.categories;
    if (chosenCategories.indexOf(id) > -1) {
      return true;
    }
    return false;
  }

  render() {
    const renderCategories = this.props.categories.categories.map((cat) => {
      const clicked = this.stlyeChoice(cat._id);
      return (
        <ThumbnailButton
          key={cat._id}
          data={cat}
          clicked={clicked}
          handleClick={this.handleChoice.bind(this, cat._id)}
        />
      );
    });
    return (
      <View style={styles.componentStyle}>
        {renderCategories}
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

const mapStateToProps = ({ categories }) => {
  return { categories };
};

export default connect(mapStateToProps, {
  requestCategories,
  returnAllCategories,
  addCategoryToUser,
  removeCategoryFromUser
})(ChooseCategories);
