import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLoginField = async (payload) => {
  const loginString = await AsyncStorage.getItem('@MyLogin:dados');
  const loginObj = JSON.parse(loginString);
  const newLoginObj = { ...loginObj, ...payload };
  await AsyncStorage.setItem('@MyLogin:dados', JSON.stringify(newLoginObj));
};
