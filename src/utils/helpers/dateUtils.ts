import moment from 'moment';

export function formatToIntl(date: string) {
  const dateToArr = date.split('/');
  return `${dateToArr[1]}/${dateToArr[0]}/${dateToArr[2]}`;
}

export function isPast(date: string) {
  const now = moment(new Date()).toLocaleString();
  const parsedDate = moment(formatToIntl(date), 'MMDDYYYY').toLocaleString();
  const isToday =
    `${new Date(parsedDate).getMonth()}/${new Date(
      parsedDate,
    ).getDay()}/${new Date(parsedDate).getFullYear()}` ===
    `${new Date(now).getMonth()}/${new Date(now).getDay()}/${new Date(
      now,
    ).getFullYear()}`;

  if (isToday) return false;

  return new Date(parsedDate).getTime() + 5000 < new Date(now).getTime();
}
