// DD/MM/YYYY => YYYY-MM-DD
export const unformatDate = (date) => {
  try {
    return date.split('/').reverse().join('-');
  } catch (err) {
    return date;
  }
};
