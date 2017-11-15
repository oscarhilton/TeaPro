import React, { Component } from 'react';
import { View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { uploadUserImage } from '../../actions/mediaActions';
import { Button } from '../common';

class UploadImage extends Component {
  handleImageSelect() {
    ImagePicker.showImagePicker(null, (response) => {
      // const data = new FormData();
      // data.append('title', response.fileName);
      // data.append('fileSize', response.fileSize);
      // data.append('timestamp', response.timestamp);
      // data.append('file', response.uri);
      // data.append('latitude', response.latitude);
      // data.append('longitude', response.longitude);
      // data.append('file', response);
      this.props.uploadUserImage(response);
    });
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.handleImageSelect.bind(this)}
        >
          UPLOAD A PHOTO
        </Button>
      </View>
    );
  }
}

export default connect(null, { uploadUserImage })(UploadImage);
