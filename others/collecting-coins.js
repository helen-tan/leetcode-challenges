// In this board game, collect the most number of coins possible following the fules given:
// 1. In an array of n integers, each item is the no. of coins you can collect at each position and the no. of steps you must move forward after collecting the coins.
// 2. You can choose any starting point in the array
// 3. The game ends when your position becomes > n

// Return the number the max number of coins that you can collect at each game
// If the max is more than 100, return 1000
// E.g.
// n = 5
// arr = [1, 2, 3, 4, 5]
// output: 7

const getMaxCoins = (n, arr) => {
  let i = 0; // starting position
  let j = 0;
  let coinCounts = [];

  while (i < n) {
    // starting element is of index i
   let maxCoinCount = 0;

   j = i;
   // iterate through arr each time the starting element is different
   while (j < n) {
    // update max coin count
    maxCoinCount += arr[j];
    // increment j - take arr[j] steps forward
    j += arr[j];
   }

   coinCounts.push(maxCoinCount);
   i++;
  }
  // return the highest no of coins

  let max = Math.max(...coinCounts);
  return (max > 100) ? 1000 : max;
}

console.log(getMaxCoins(5, [1, 2, 3, 4, 5]));
console.log(getMaxCoins(6, [4, 2, 1, 99, 3, 69]));

console.log(getMaxCoins(2, [1, 1]));
console.log(getMaxCoins(6, [45, 3, 2, 50, 1, 2]));
console.log(getMaxCoins(5, [7, 3, 1, 2, 3]));
