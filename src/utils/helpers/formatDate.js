// Formata data de Object(Date) para dd/mm/yyyy h

export const formatDate = (date) => {
  try {
    const dateObject = typeof date === 'string' ? new Date(date) : date;
    const formatedDate = `${Number(dateObject.getDate()) < 10 ? `0${dateObject.getDate()}` : dateObject.getDate()}/${
      dateObject.getMonth() + 1 < 10 ? `0${dateObject.getMonth() + 1}` : dateObject.getMonth() + 1
    }/${dateObject.getFullYear()}`;
    return formatedDate;
  } catch {
    return date;
  }
};
export const formatSimpleDate = (date) => {
  const dateSplit = date.split('-');
  const day = dateSplit[2];
  const month = dateSplit[1];
  const year = dateSplit[0];
  return `${day}/${month}/${year}`;
};

export const formatApiDate = (date) => {
  const [dia, mes, ano] = date.split('/');
  const dataFormatada = `${dia}-${mes}-${ano}`;
  return dataFormatada;
};
