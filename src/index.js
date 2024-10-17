
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

  if (!matrix) {
    return result;
  }

  for (let i = 0; i < matrix.length; i++) {
    const shouldReverse = i % 2 === 1;
    const arr = shouldReverse ? matrix[i].reverse() : matrix[i];

    for (let j = 0; j < arr.length; j++) {
      result.push(arr[j]);
    }
  }
  
  return result;
}
