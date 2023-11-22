import { REGEX_UPPERCASE, REGEX_LOWCASE, NUMBER_REGEX } from '~/constants/regex.ts';
export const StrongPassword = (text) => {
  const isValid = {
    inputCase: REGEX_UPPERCASE.test(text) && REGEX_LOWCASE.test(text),
    inputNumber: NUMBER_REGEX.test(text),
    inputLength: text.length >= 8,
  };

  return isValid;
};
