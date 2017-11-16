import { NativeModules } from 'react-native';
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
    fileKey: 'file',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  };
  NativeModules.FileTransfer.upload(req, (err, res) => {
    // handle response
    // it is an object with 'status' and 'data' properties
    // if the file path protocol is not supported the status will be 0
    // and the request won't be made at all
    if (res.status === 200) {
      console.log('passed status');
      if (err) {
        console.log(err);
        return dispatch({ type: UPLOAD_USER_IMAGE, payload: err });
      }
      console.log(res.data);
      console.log(JSON.parse(res.data));
      return dispatch({ type: UPLOAD_USER_IMAGE, payload: JSON.parse(res.data) });
    }
  });

  // const res = await axios.post('http://httpbin.org/post', data);
  // dispatch({ type: RETURN_ALL_CATEGORIES, payload: res.data });
};
