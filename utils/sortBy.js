const groupBy = (array, key, type) => {
  const result = [...array];

  return result.sort((a, b) => {
    if (a[key] < b[key])
      return type === 'asc' ? -1 : 1;

    if (a[key] > b[key])
      return type === 'asc' ? 1 : -1;

    return 0;
  });
};

export default groupBy;
