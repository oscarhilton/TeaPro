/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import UploadImage from '../components/upload/UploadImage';
import GalleryImage from '../components/GalleryImage';

class PhotosScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryOpen: false,
      chosenImage: null
    }
  }

  handleOpenGallery(index) {
    const { photos } = this.props;
    const chosenImage = photos[index];
    this.setState({ chosenImage });
  }

  renderPhotoList() {
    const { loading, photos } = this.props;
    if (!loading) {
      const displayImages = photos.map((photo, index) => (
        <TouchableOpacity
          onPress={this.handleOpenGallery.bind(this, index)}
          style={{ width: '100%', height: 300 }}
          key={index}
        >
          <GalleryImage photo={photo} />
        </TouchableOpacity>
      ));
      return displayImages;
    }
    return <Text>Loading</Text>;
  }

  render() {
    console.log(this.props, 'photo props');
    const { tea } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.gallery}>
          {this.renderPhotoList()}
        </View>
        <UploadImage teaId={tea} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gallery: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

const mapStateToProps = ({ teas }) => {
  const loading = teas.loading;
  const tea = teas.currentTea._id;
  const photos = teas.currentTea.userImages;
  return { loading, tea, photos };
};

export default connect(mapStateToProps)(PhotosScreen);
