export const waitMs = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, value);
  });
};
