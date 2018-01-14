import { NativeModules, Platform } from 'react-native';
const AndroidFileTransfer = require('react-native-file-transfer-android');

import axios from 'axios';
import { api } from '../../api';

import {
  UPLOAD_USER_IMAGE,
  FETCH_USER_IMAGES,
  RETURN_USER_IMAGES
} from './types';

export const uploadAnImage = (image, userId, cb) => {
  const { uri, fileName } = image; // Pull uri and fileName off image obj
  const req = {
    uri, // either an 'assets-library' url (for files from photo library) or an image dataURL
    uploadUrl: `${api}/api/upload/userupload`,
    fileName: fileName,
    mimeType: 'image/jpeg',
    fileKey: 'file',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: {
      image,
      userId
    }
  }

  if (Platform.OS === 'ios') {
    NativeModules.FileTransfer.upload(req, (err, res) => {
      if (res.status === 200) { // If success
        if (!err) { // and no error
          return cb(JSON.parse(res.data)); // send image callback
        }
        return console.log(err);
      }
    });
  } else {
    alert('NOT IOS');
  }

};

export const uploadUserImageForTea = (uri, userId, data) => async dispatch => {
  const req = {
    uri, // either an 'assets-library' url (for files from photo library) or an image dataURL
    uploadUrl: `${api}/api/userupload/${userId}/tea`,
    fileName: data.fileName,
    mimeType: 'image/jpeg',
    fileKey: 'file',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  }

  if (Platform.OS === 'ios') {
    NativeModules.FileTransfer.upload(req, (err, res) => {
      if (res.status === 200) {
        let payload = null;
        if (err) {
          payload = err;
        } else {
          payload = JSON.parse(res.data);
        }
        return dispatch({ type: UPLOAD_USER_IMAGE, payload });
      }
    });
  } else if (Platform.OS === 'android') {
      AndroidFileTransfer.upload(req, (err, res) => {
        if (err) {
          console.error(err);
        } else {
          console.log(res);
        }
      });
  }
};

export const fetchUserImages = () => dispatch => {
  dispatch({ type: FETCH_USER_IMAGES });
};

export const returnUserImages = () => dispatch => {
  dispatch({ type: RETURN_USER_IMAGES });
};

// export const fetchTeaImages = () => dispatch => {
//   dispatch({ type: FETCH_TEA_IMAGES });
// };
//
// export const returnTeaImages = () => async dispatch => {
//   const res = async axios.get();
//   dispatch({ type: RETURN_TEA_IMAGES, payload: res.data });
// };
