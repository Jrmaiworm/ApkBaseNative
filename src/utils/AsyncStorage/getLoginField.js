import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLoginField = async () => {
  const loginString = await AsyncStorage.getItem('@MyLogin:dados');
  const loginObj = JSON.parse(loginString);
  return loginObj;
};
