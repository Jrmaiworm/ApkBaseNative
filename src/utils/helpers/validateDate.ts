function verificaAnoBissexto(year: number) {
  if (year % 4 === 0) {
    if (year % 100) {
      if (year % 400) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

export function isValidDate(date: string, isfoundationDate?: boolean) {
  const dateToArr = date.split('/');

  const day = dateToArr[0];
  const month = dateToArr[1];
  const year = dateToArr[2];

  const MONTHS_31 = ['01', '03', '05', '07', '08', '10', '12'];
  const MONTHS_30 = ['04', '06', '09', '11'];

  let validDay = false;

  if (Number(month) > 12) return false;

  if (Number(day) > 31) return false;

  if (Number(year) > new Date().getFullYear()) return false;

  if (isfoundationDate) {
    if (Number(year) < 1600) return false;
  } else {
    if (Number(year) < 1900) return false;
  }

  if (MONTHS_31.includes(month) && Number(day) <= 31) {
    validDay = true;
  }

  if (MONTHS_30.includes(month) && Number(day) <= 30) {
    validDay = true;
  }

  if (month === '02') {
    const isLeapYear = verificaAnoBissexto(Number(year));

    if (isLeapYear && Number(day) <= 29) {
      validDay = true;
    } else if (!isLeapYear && Number(day) <= 28) {
      validDay = true;
    }
  }

  return validDay;
}
