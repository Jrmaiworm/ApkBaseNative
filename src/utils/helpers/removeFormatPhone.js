const removeFormatPhone = (str) => {
  const unformattedString = str
    .replace('(', '')
    .replace(')', '')
    .replace(' ', '')
    .replace('-', '');
  return unformattedString;
};

export default removeFormatPhone;
