import { DEBUG_API, routes } from '../../env';

import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Clipboard from '@react-native-clipboard/clipboard';
import { Snackbar } from '~/utils/Snackbar';
import axios from 'axios';
import { navigate } from './RootNavigator';
import { logoutWhenJwtExpires } from '~/utils/helpers/logout';
import DeviceInfo from 'react-native-device-info';
import getGeoLocation from '~/utils/helpers/getGeolocation';

const { URL } = routes;

let defaultHeader = {};

const debugApiClipboard = DEBUG_API
  ? (response) => {
      try {
        const url = response?.request?.responseURL;

        const statusCode = response?.status;

        const _headers = response?.request?._headers;

        const _headersString = JSON.stringify(_headers);

        const _request = response?.config?.data;

        const _response = response?.data;

        const _responseString = JSON.stringify(_response);

        const debugString = `URL: ${url} \n\nSTATUS: ${statusCode} \n\nHEADERS: ${_headersString} \n\nREQUEST: ${_request} \n\nRESPONSE: ${_responseString}\n`;

        Alert.alert(
          'Ocorreu um erro na rota do backend.',
          `Esta mensagem só é exibida em dev e homologação, caso necessite de um aplicativo nesses ambientes sem esta ferramenta, faça contato com a pessoa responsável pelo CD do aplicativo.
        \nAperte o botão copiar para copiar os logs da requisição e envie para alguém do backend analisar.`,
          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            {
              text: 'Copiar',
              onPress: () => Clipboard.setString(debugString),
            },
          ],
        );
      } catch (err) {
        Alert.alert('Ocorreu um erro na ferramenta de debug', 'Copie a mensagem e envie para alguém do frontend', [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Copiar',
            onPress: () => Clipboard.setString(err.message),
          },
        ]);
      }
    }
  : () => {};

const api = axios.create({
  baseURL: URL,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Application: 1,
  },
});

const upperCase = (payload) => {
  if (!payload) return {};
  return Object.keys(payload).reduce(
    (prev, cur) => ({
      ...prev,
      [cur.toUpperCase()]: payload[cur],
    }),
    {},
  );
};

export const resetVariables = async () => {
  await AsyncStorage.removeItem('@MyLogin:dados');
};

export const setDefaultHeaders = (json) => {
  defaultHeader = json;
};

api.interceptors.request.use(async (config) => {
  const userData = await AsyncStorage.getItem('@MyLogin:dados');
  const obj = JSON.parse(userData);
  const jwt = await AsyncStorage.getItem('@MyLogin:jwt');
  config.headers.Authorization = `Bearer ${jwt}`;

  const info = {
    manufacturer: await DeviceInfo.getManufacturer(),
    model: DeviceInfo.getModel(),
    id: await DeviceInfo.getUniqueId(),
    'Geo-Latitude': (await getGeoLocation()).latitude,
    'Geo-Longitude': (await getGeoLocation()).longitude,
  };

  config.headers = { ...config.headers, ...defaultHeader, ...info };
  return config;
});

api.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (
      response?.data?.retorno === 'erro' ||
      response?.data?.retorno === 'error' ||
      response?.data?.retorno === 'ERRO' ||
      response?.data?.retorno === 'ERROR'
    ) {
      debugApiClipboard(response);
      return Promise.reject({
        ...response?.data,
        message:
          response?.data?.mensagem ||
          'Algo inesperado aconteceu. Por favor, verifique sua conexão ou tente novamente mais tarde.',
      });
    }
    return response?.data;
  },
  async (error) => {
    if (error?.response?.status === 401) {
      await logoutWhenJwtExpires();
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    debugApiClipboard(error.response);
    const data = {
      message:
        error.response?.data?.mensagem ||
        'Algo inesperado aconteceu. Por favor, verifique sua conexão ou tente novamente mais tarde.',
    };
    return Promise.reject({ ...error.response?.data, ...data });
  },
);

export const apiget = (url, payload, config) => {
  const params = upperCase(payload);
  return api.get(url, { params, ...config });
};
export const apidelete = (url, payload) => {
  const params = upperCase(payload);
  return api.delete(url, { data: { ...params } });
};

export const apipost = (url, payload, config) => api.post(url, upperCase(payload), config);
export const apiput = (url, payload, config) => api.put(url, upperCase(payload), config);
export const apipatch = api.patch;
