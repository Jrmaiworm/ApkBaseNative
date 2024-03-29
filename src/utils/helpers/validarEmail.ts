function validarEmail(email: string) {
  return !!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
}

export { validarEmail };
