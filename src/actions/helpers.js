import { AsyncStorage } from 'react-native';

export const updateUser = async (args) => {
  const storageUser = await AsyncStorage.getItem('USER');
  const jsonUser = JSON.parse(storageUser);
  const updatedUser = {
    ...jsonUser,
    ...args
  };
  await AsyncStorage.setItem('USER', JSON.stringify(updatedUser));
  console.log(updatedUser);
  return updatedUser;
};
