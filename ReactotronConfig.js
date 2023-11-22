import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron, { networking } from 'reactotron-react-native';


const reactotron = __DEV__
  ? Reactotron.configure() // controls connection & communication settings
      .setAsyncStorageHandler(AsyncStorage)
      .useReactNative() // add all built-in react native plugins
      .use(
        networking({
          ignoreUrls: /https\:\/\/www\.google\.com\.br/,
        }),
      )
      .connect() // let's connect!
  : {
      createEnhancer: undefined,
      log: () => null,
      clear: () => null,
      display: () => null,
    };

reactotron.clear();

console.tron = reactotron;

// eslint-disable-next-line no-console
console.log = () => {};

export default reactotron;
