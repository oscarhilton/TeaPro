import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { uploadUserImageForTea } from '../../actions/mediaActions';
import { Button } from '../common';

class UploadImage extends Component {
  constructor() {
    super();
    this.state = {
      uploading: 'Ready'
    }
  }

  handleImageSelect = () => {
    this.setState({ uploading: true });
    ImagePicker.showImagePicker(null, (response) => {
      this.props.sendToForm(response, this.props.user);
      this.setState({ uploading: response.fileName });
    });
  }

  renderMessage() {
    if (this.state.uploading === true) {
      return <Text>Uploading</Text>;
    }
    return <Text>{this.state.uploading}</Text>
  }

  render() {
    return (
      <View>
        <View style={styles.button}>
          <Button
            onPress={this.handleImageSelect}
          >
            Upload a photo
          </Button>
        </View>
        <View style={styles.message}>
          {this.renderMessage()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50
  },
  message: {
    padding: 10,
    backgroundColor: 'rgb(168,200,244)'
  }
});

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user._id
  };
};

export default connect(mapStateToProps, { uploadUserImageForTea })(UploadImage);
