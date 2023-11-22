export const formatCpfCnpj = (cpfCnpjString) => {
  try {
    if (cpfCnpjString.length !== 11 && cpfCnpjString.length !== 14)
      throw new Error();
    return cpfCnpjString.length === 11
      ? cpfCnpjString.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
      : cpfCnpjString.replace(
          /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
          '$1.$2.$3/$4-$5'
        );
  } catch {
    return cpfCnpjString;
  }
};
