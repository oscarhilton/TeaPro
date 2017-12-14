import React, { Component } from 'react';
import { View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { uploadUserImageForTea } from '../../actions/mediaActions';
import { Button } from '../common';

class UploadImage extends Component {
  handleImageSelect() {
    ImagePicker.showImagePicker(null, (response) => {
      console.log(response);
      const { origURL, fileName, fileSize, latitude, longitude, timestamp } = response;
      const info = {
        teaId: this.props.teaId,
        fileName,
        fileSize,
        latitude,
        longitude,
        timestamp,
      };
      this.handleSendToForm(origURL, info);
      // this.props.uploadUserImageForTea(origURL, this.props.user, info);
    });
  }

  handleSendToForm(origUrl, info) {
    this.props.sendToForm(origUrl, this.props.user, info);
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.handleImageSelect.bind(this)}
        >
          Upload a photo
        </Button>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user._id
  };
};

export default connect(mapStateToProps, { uploadUserImageForTea })(UploadImage);
