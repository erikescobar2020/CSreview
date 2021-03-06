/**
 * time-complexity:
 *  -O(log(n)) -> keep dividing array / 2 until we either find or exhaust our search domain
 *
 * space-complexity:
 *  -O(log(n)) -> max depth of recursion tree
 *
 * @param {array} array -> SORTED ARRAY!
 * @param {int} k -> term we are searching for
 *
 * @returns {int} index - index of k in original array
 */
function binarySearch(array, k) {
  return helper(array, k, 0, array.length - 1);
}

function helper(array, target, left, right) {
  // base case, is left pointer > right pointer
  if (left > right) return -1;

  let midpoint = Math.floor((left + right) / 2);
  let potentialMatch = array[midpoint];

  if (potentialMatch === target) {
    return midpoint;
  } else if (target < potentialMatch) {
    return helper(array, target, left, midpoint - 1);
  } else {
    return helper(array, target, left + 1, right);
  }
}

let sortedArray = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
let k = 72;

let result = binarySearch(sortedArray, k);
console.log(`${k} can be found at index ${result}`);
