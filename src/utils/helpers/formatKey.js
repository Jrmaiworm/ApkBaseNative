export function formatKey(key) {
    try {
        const chave = key|| '**********';
        const cincoPrimeiros = chave?.substring(0, 5);
        const cincoUltimos = chave?.substring(chave?.length - 5);
        const newKey = `${cincoPrimeiros}****${cincoUltimos}`;
        return newKey; 
    } catch (error) {
        return key;
    }

  }