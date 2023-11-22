export const formatMoney = (number) => {
  try {
    const [reais, centavos] = Number(number).toFixed(2).toString().split('.');
    const reaisFormatado = reais.replace(
      /^|(\d{3}(?=(\d{3})*(\.|$)))/g,
      (match) => `.${match}`
    );
    const reaisFormatadoFix = reaisFormatado.slice(1);
    const formattedNumber = `R$ ${reaisFormatadoFix},${centavos}`;
    return formattedNumber;
  } catch (err) {
    return number;
  }
};
