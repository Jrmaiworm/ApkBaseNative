export function formatTipoConta(tipo) {
  try {
    switch (tipo) {
      case 'CONTA_CORRENTE':
        return 'CONTA CORRENTE';
      case 'CONTA_SALARIO':
        return 'CONTA SALÁRIO';
      case 'POUPANCA':
        return 'CONTA POUPANÇA';
      default:
        return 'Tipo da conta';
    }
  } catch (error) {
    return tipo;
  }
}
