export const formatToOnlyNumbers = (unformattedString: string): string => {
  return unformattedString.replace(/\D/g, '');
};
