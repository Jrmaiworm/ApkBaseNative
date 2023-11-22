export function renderStatus(status, theme) {
    const transactions = {
      2: theme.colors.cancel,
      1: theme.colors.await,
      4: theme.colors.pay,
    };

    return transactions[status];
  }