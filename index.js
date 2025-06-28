function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (let num of array) {
    const complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }

  return false;
}

/* 
  Big O time complexity: O(n)
  - We loop through the array once.
  - Set operations (add, has) are O(1).
*/

/* 
  Pseudocode:
  - Create a Set to store numbers we've seen
  - For each number in the array:
    - Calculate the complement (target - current number)
    - If the complement is in the Set, return true
    - Otherwise, add the current number to the Set
  - If no matches found, return false
*/

/*
  Explanation:
  We're trying to find two numbers in the array that add up to the target.
  Instead of checking every pair (which would be slow), we use a Set to remember
  the numbers we've seen and check if the number we need (target - current)
  is already in the Set.
*/

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
