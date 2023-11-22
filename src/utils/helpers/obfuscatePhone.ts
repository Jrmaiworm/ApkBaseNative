function obfuscatePhone(phone: string) {
  if (!phone) return undefined;
  const REVEALED_INDEXES = [0, 1, 7, 8, 9, 10];

  const onlyNumbers = phone.split('').filter((character, index) => RegExp(/[0-9]/).test(character));

  const obfuscatedNumber = onlyNumbers.map((number, index) => {
    if (REVEALED_INDEXES.includes(index)) return number;
    return '*';
  });

  const formattedPhone = obfuscatedNumber
    .map((number, index) => {
      if (index === 0) return `(${number}`;
      if (index === 1) return `${number}) `;
      if (index === 7) return `-${number}`;
      return number;
    })
    .join('');

  return formattedPhone;
}

export { obfuscatePhone };
