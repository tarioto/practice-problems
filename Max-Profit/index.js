// Find maximum single sell profit Given a list of stock prices for n days, find the maximum profit with a single buy/sell activity.
// Description Given a list of day stock prices (integers for simplicity), find the maximum single sell profit.
// We need to maximize the single buy/sell profit and in case we can't make any profit, we'll try to minimize the loss.
// For below examples, buy and sell prices for making maximum profit are highlighted.
//
// Linear time, Constant space
// Hint: Kadane’s algorithm.

var maxSingleProfit = function(arr) {
  var buy = arr[0];
  var sell = arr[1];
  var maxProfit = sell - buy;
  var currentProfit = 0;

  for (var i = 1; i < arr.length; i++) {
    currentProfit = arr[i] - buy;
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
      sell = arr[i];
    }
    if (buy > arr[i]) {
      buy = arr[i];
    }
  }
  return [sell - maxProfit, sell];
};

var tester = [8,5,12,9,19,1];
var tester2 = [21,12,11,9,6,3];

console.log(maxSingleProfit(tester));
console.log(maxSingleProfit(tester2));

maxProfit([-2,3,2,-1])
maxProfit([6,3,2,9])
