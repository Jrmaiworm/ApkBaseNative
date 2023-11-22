import { KeyboardTypeOptions, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

export type PasswordInputProps = {
  value: string;
  onChangeText: (value: string) => void;
  defaultValue?: string;
  keyboardType?: KeyboardTypeOptions;
  selectTextOnFocus?: boolean;
  fontSize?: number;
  placeholder?: string;
  maxLength: number;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};
