import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from '../components/common';
import Accordion from '../components/Accordion';
import ViewTeaHeader from '../components/ViewTeaHeader';
import RatingsBar from '../components/RatingsBar';
import { addTeaToCupboard } from '../actions';

class ViewTea extends Component {
  renderUserControls = (tea) => {
    if (this.props.auth.loggedIn) {
      return (
        <View>
          <Accordion
            heading={'Logged in user:'}
            text={`${this.props.auth.user.firstName} ${this.props.auth.user.lastName}`}
          />
          <Button
            onPress={this.props.addTeaToCupboard(tea, this.props.auth.user._id)}
          >
            Add tea to cupboard
          </Button>
        </View>
      );
    }
    return (
      <Accordion
        heading={'NOT LOGGED IN'}
      />
    );
  }

  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    return (
      <ScrollView
        style={styles.backgroundStyle}
      >
        <ViewTeaHeader tea={params} />
        <RatingsBar />
        {this.renderUserControls(params)}
        <Accordion
          heading={'Steep Time'}
          text={params.steeptime}
        />
        <Accordion
          heading={'Description'}
          text={params.description}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1
  }
});

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { addTeaToCupboard })(ViewTea);
