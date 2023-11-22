import AsyncStorage from '@react-native-async-storage/async-storage';
import { apipost } from '~/services/api';
import { reset } from '~/services/RootNavigator';
import { Snackbar } from '../Snackbar';

export const logout = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();

    for (let i = 0; i < keys.length; i++) AsyncStorage.removeItem(keys[i]);

    const responseJson = await apipost('usuario/sair');
    if (responseJson.retorno === 'sucesso') {
      reset({
        index: 0,
        routes: [
          {
            name: 'Controlador',
          },
        ],
      });
    }
  } catch {
  } finally {
    reset({
      index: 0,
      routes: [
        {
          name: 'Controlador',
        },
      ],
    });
  }
};

export const logoutWhenJwtExpires = async () => {
  try {
    reset({
      index: 0,
      routes: [
        {
          name: 'Controlador',
        },
      ],
    });

    setTimeout(() => {
      Snackbar('Sessão expirada.', 'error');
    }, 1000);
  } catch {}
};
