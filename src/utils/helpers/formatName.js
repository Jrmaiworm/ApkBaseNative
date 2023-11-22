export const formatName = (name) => {
  try {
    const nameArray = name.split(' ');
    const capitalizedNameArray = nameArray?.map((elem) =>
      elem.length > 2
        ? `${elem[0]?.toUpperCase()}${elem.slice(1)?.toLowerCase()}`
        : ''
    );
    const filterCapitalizedNameArray = capitalizedNameArray.filter(
      (elem) => !!elem
    );
    const abbreviatedNameArray = filterCapitalizedNameArray.map((elem, idx) =>
      idx === 0 || idx === filterCapitalizedNameArray.length - 1
        ? elem
        : `${elem[0]}.`
    );
    const abbreviatedName = abbreviatedNameArray.join(' ');
    return abbreviatedName;
  } catch (err) {
    return name;
  }
};
