const getCommonItems = (array1, array2) => {
  // implement code here
  const common = []
  array1.forEach((itemToFind) => {
    array2.forEach((item) => {
      if(item === itemToFind) common.push(item)
    })
  })
  return common
};

export default getCommonItems;
