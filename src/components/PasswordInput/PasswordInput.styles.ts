import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';
import { TextInput as RNTextInput } from 'react-native';

import { defaultFont } from '~/theme';
import { isIPhone } from '~/utils/helpers/isIPhone';
import { IconProps } from 'react-native-vector-icons/Icon';
import { PasswordInputProps } from './PasswordInput.types';

interface IconProp extends IconProps {
  showPassword?: boolean;
}

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.inputBackground};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${isIPhone && 'padding: 10px;'};
  border-radius:4px;
`;

export const TextInput = styled(RNTextInput).attrs<PasswordInputProps>(
  (props) => ({
    placeholderTextColor: props.theme.colors.textBody,
  }),
)<PasswordInputProps>`
  text-align: center;
  font-size: 15px;
  ${defaultFont(400)}
  flex: 1;
  text-align: left;
  color: ${(props) => props.theme.colors.textBody};
  padding-left: 15px;

  ${(props) => props.fontSize && `font-size: ${props.fontSize}px;`};
`;

export const EyeIcon = styled(Icon).attrs((props: IconProp) => ({
  name: 'eye',
  ...(props.showPassword && { name: 'eye-with-line' }),
}))<IconProp>`
  color: ${(props) => props.theme.colors.textBody};
  font-size: 25px;
  padding-right: 10px;
`;
