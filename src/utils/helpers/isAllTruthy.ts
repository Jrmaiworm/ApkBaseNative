function isAllTruthy(dataArr: any[]) {
  let truthy = true;
  dataArr.forEach((data) => {
    if (!!!data) {
      truthy = false;
      return;
    }
  });
  return truthy;
}

export { isAllTruthy };
