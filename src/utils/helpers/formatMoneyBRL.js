export default formatMoney = (amount, decimalCount = 2, decimal = ',', thousands = '.') => {
  var verifyLenght = 3;
  try {
    amount = String(amount || '').replace(' ', '');
    amount.replace('R$', '');

    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = parseInt(amount) < 0 ? '-' : '';

    if (parseInt(amount).lenght == 1) verifyLenght = 2; // verificação para quando o valor é menor q 10

    let i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString();
    let j = i.length > verifyLenght ? i.length % verifyLenght : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch {
    return '0,00';
  }
};
