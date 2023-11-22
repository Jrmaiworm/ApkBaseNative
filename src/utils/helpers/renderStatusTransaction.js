export function renderStatusTransaction(status, theme) {
    //identifica o status da transacao e retorna uma cor: 1-debito, 2 credito;
    const transactions = {
      1: theme.colors.danger,
      2: theme.colors.highlight,
    };
    return transactions[status];
  }