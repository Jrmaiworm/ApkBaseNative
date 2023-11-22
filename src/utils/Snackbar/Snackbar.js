import RNSnackbar from 'react-native-snackbar';
import { theme } from '../../theme';

const { colors } = theme;

const parseType = {
  success: colors.success,
  error: colors.danger,
  info: colors.primary,
};

const parseActionColor = {
  success: 'white',
  error: 'white',
  info: colors.secondary,
};

const parseTextColor = {
  success: colors.primary,
  error: 'white',
  info: 'white',
};

export const Snackbar = (
  text,
  type,
  onPress,
  buttonText,
  customTimeMilliseconds,
) => {
  RNSnackbar.show({
    text,
    textColor: parseTextColor[type] ?? 'white',
    fontFamily: theme.fonts.regular,
    backgroundColor: parseType[type],
    duration: customTimeMilliseconds || 5000,
    action: onPress && {
      text: buttonText?.toUpperCase() || 'DESFAZER',
      textColor: parseActionColor[type] ?? colors.secondary,
      onPress,
    },
  });
};
