const getTheExactNumber = (numbers) => {
  // implement code here
  const multiples = []
  numbers.forEach((num) => {
    if (num % 3 === 0) multiples.push(num)
  })
  return Math.max(...multiples)
}

export default getTheExactNumber;