import { AsyncStorage } from 'react-native';

export const updateAsync = async (item, args) => {
  const storageObj = await AsyncStorage.getItem(item);
  const jsonObj = JSON.parse(storageObj);
  const updatedObj = {
    ...jsonObj,
    ...args
  };
  await AsyncStorage.setItem(item, JSON.stringify(updatedObj));
  return updatedObj;
};
