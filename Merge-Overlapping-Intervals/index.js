// Merge Overlapping Intervals
// Description
// Given an array (list) of intervals as input where each interval has a start and end timestamps.
// Input array is sorted by starting timestamps.
// You are required to merge overlapping intervals and return output array (list).

// Consider below input array.
// Intervals (1, 5), (3, 7), (4, 6), (6, 8) are overlapping so should be merged to one big interval (1, 8).
// Similarly intervals (10, 12) and (11, 15) are also overlapping intervals and should be merged to (10, 15).

const mergeOverlappingIntervals = (listArray) => {
  // have start and end holders
  let start = listArray[0][0];
  let end = listArray[0][1];
  let resultList = [];
  // iterate over listArray
  for (var i = 1; i < listArray.length; i++) {
    // compaire start and end times
    if (end >= listArray[i][0]) {
      end = listArray[i][1];
    } else {
      resultList.push([start, end])
      start = listArray[i][0];
      end = listArray[i][1];
    }
  }
  resultList.push([start, end])
  console.log(resultList);
}

mergeOverlappingIntervals([[1, 5], [3, 7], [4, 6], [6, 8]]);
// [1, 8]
mergeOverlappingIntervals([[10, 12],[11, 15]]);
// [10, 15]
mergeOverlappingIntervals([[1, 4], [3, 4], [5, 6], [6, 8]]);
// [[1,4], [5,8]]
