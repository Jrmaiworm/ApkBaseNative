import { Container, EyeIcon, TextInput } from './PasswordInput.styles';
import { TextInput as RNTextInput, TouchableOpacity } from 'react-native';
import React, { forwardRef, useState } from 'react';
import { PasswordInputProps } from './PasswordInput.types';

export const PasswordInput = forwardRef<RNTextInput, PasswordInputProps>(
  (
    {
      value,
      onChangeText,
      defaultValue,
      selectTextOnFocus,
      fontSize,
      maxLength,
      placeholder,
      onFocus,
      onBlur,
      keyboardType,
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <Container>
        <TextInput
          maxLength={maxLength}
          keyboardType={keyboardType}
          fontSize={fontSize}
          defaultValue={defaultValue}
          secureTextEntry={!showPassword}
          value={value}
          onChangeText={(text:any) => onChangeText(text)}
          ref={ref}
          selectTextOnFocus={selectTextOnFocus}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
          <EyeIcon showPassword={showPassword} />
        </TouchableOpacity>
      </Container>
    );
  },
);

PasswordInput.defaultProps = {
  maxLength: 8,
};
