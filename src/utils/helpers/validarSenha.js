export const regexUppercase = new RegExp(/^(?=.*[A-Z]).+$/);
export const regexLowercase = new RegExp(/^(?=.*[a-z]).+$/);
export const regexNumber = new RegExp(/^(?=.*[0-9]).+$/);

export const ValidatedPassword = (password) => {
  if (
    password.length === 8 &&
    regexUppercase.test(password) &&
    regexLowercase.test(password) &&
    regexNumber.test(password)
  ) {
    return true;
  }
  return;
};
