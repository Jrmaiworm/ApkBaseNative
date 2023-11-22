export function removeBase64Extension(base64: string) {
  const splitted = base64.split(',');
  return splitted[1];
}
