function generateUniqueId(array: { [key: string]: any }[], key: string = 'id'): number {
  const onlyIds = array.map((item) => Number(item[key]));
  const orderedIds = onlyIds.sort((a, b) => a - b);

  const result = orderedIds[orderedIds?.length - 1] + 1 || 1;

  return result;
}

export { generateUniqueId };
