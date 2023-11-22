let timer;

export default debounce = (func, wait) => {
  clearTimeout(timer);

  timer = setTimeout(func, wait);
}

