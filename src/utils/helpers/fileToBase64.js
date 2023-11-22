async function fileToBase64(filePath) {
  const requestBlob = await fetch(`file://${filePath}`);
  const blob = await requestBlob.blob();
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise((resolve) => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
  }).then((res) => res);
}

export { fileToBase64 };
