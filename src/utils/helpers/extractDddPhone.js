export const extractDddPhone = (formattedFullNumber) => {
  try {
    const [formattedDdd, formattedNumber] = formattedFullNumber.split(' ');
    const ddd = formattedDdd.replace('(', '').replace(')', '');
    const number = formattedNumber.replace('-', '');
    return [ddd, number];
  } catch (err) {
    return [null, formattedFullNumber];
  }
};
