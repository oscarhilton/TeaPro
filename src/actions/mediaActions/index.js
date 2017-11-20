import { NativeModules, Platform } from 'react-native';
var AndroidFileTransfer = require('react-native-file-transfer-android');

import axios from 'axios';
import { api } from '../../api';

import {
  UPLOAD_USER_IMAGE
} from './types';

export const uploadUserImageForTea = (uri, data) => async dispatch => {
  const req = {
    uri, // either an 'assets-library' url (for files from photo library) or an image dataURL
    uploadUrl: `${api}/api/userupload/tea`,
    fileName: data.fileName,
    mimeType: 'image/jpeg',
    fileKey: 'file',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  };

  if (Platform.OS === 'ios') {
    NativeModules.FileTransfer.upload(req, (err, res) => {
      if (res.status === 200) {
        let payload = null;
        if (err) {
          payload = err;
        } else {
          payload = JSON.parse(res.data);
        }
        console.log(payload, 'RESULT');
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

  // const res = await axios.post('http://httpbin.org/post', data);
  // dispatch({ type: RETURN_ALL_CATEGORIES, payload: res.data });
};
