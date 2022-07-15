const objectToArray = (obj, key) => {
  return Object.keys(obj).map((item) => {
    return {
      ...(obj[item]),
      [key]: item,
    };
  })
}

export default objectToArray;
