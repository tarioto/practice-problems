// Implement Quick Sort

const quickSort = (numbers) => {
  if (numbers.length === 0) {
    return [];
  }
  let left = [];
  let right = [];
  let pivot = numbers[0];

  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < pivot) {
      left.push(numbers[i]);
    } else {
      right.push(numbers[i]);
    }
  }

 return quickSort(left).concat(pivot, quickSort(right));

}


quickSort([3, 2, 6, 8, 5, 1, 4, 7])
// [1, 2, 3, 4, 5, 6, 7, 8]
quickSort([0,2,1,10])
// [0, 1, 2, 10]
