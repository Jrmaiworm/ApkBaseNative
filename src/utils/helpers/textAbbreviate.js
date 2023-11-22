export const abbreviate = (text) => {
  try {
    const abbreviatedText = text
      .split(' ')
      .map((elem) => (elem.length > 8 ? `${elem.substring(0, 6)}.` : elem))
      .join(' ');
    return abbreviatedText;
  } catch (err) {
    return text;
  }
};
