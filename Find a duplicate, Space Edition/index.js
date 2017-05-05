// Find a duplicate, Space Edition™.
// We have an array of integers, where:
//
// The integers are in the range 1..n
// The array has a length of n+1
// It follows that our array has at least one integer which appears at least twice.
// But it may have several duplicates, and each duplicate may appear more than twice.
//
// Write a function which finds an integer that appears more than once in our array.
// (If there are multiple duplicates, you only need to find one of them.)
//
// We're going to run this function on our new, super-hip Macbook Pro With Retina Display™.
// Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM.
// So we need to optimize for space!

function findDups(numbers) {
  let result = [];
  for (var i = 0; i < numbers.length; i++) {
    var seenIt = false;
    for (var j = 0; j < numbers.length; j++) {
      if (numbers[i] === numbers[j] && i !== j) {
        if (seenIt) {
          result.push(numbers[i])
        } else {
          seenIt = true;
        }
      }
    }

  }
  if (result.length === 0) {
    console.log('No dups')
  }
  console.log(result)
}


findDups([1,3,5,3,7,8,3])
findDups([1,3,5,3,7,8,3,7])
