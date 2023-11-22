export function validarEmail(email: string): boolean {
  return new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
  ).test(email);
}

export function formatarEmail(email: string): string {
  return email?.replace(/ /g, "").toLowerCase();
}
