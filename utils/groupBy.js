const groupBy = (array, key) => {
  return array.reduce((accumulator, item) => {
    const index = accumulator.findIndex(
      (accumulatorItem) => accumulatorItem.name === item[key]
    );

    if (index > -1) {
      accumulator[index].qty += 1;
      return accumulator;
    }

    return [
      ...accumulator,
      { name: item[key], qty: 1, },
    ];
  }, []);
};
export default groupBy;
