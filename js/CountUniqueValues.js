/**
 * write a method that counts the number of unique elements in an array
 */

const unSortedArr = [1, -2, 3, 4, 5, 6, 666, 0, 4, 7, 8];
const sortedArr = unSortedArr.sort((a, b) => a - b);

//count unique values unsorted
/**
 * Time complexity o(n) and space complexity o(n)
 * @param {*} arr
 * @returns the number of unique values in an array
 */
const countUniqueValuesUnsorted = (arr) => {
  const lookup = {};

  for (let i = 0; i < arr.length; i++) {
    if (!lookup[arr[i]]) {
      lookup[arr[i]] = arr[i];
    }
  }

  return Object.keys(lookup).length;
};

/**
 * it creates a new set so timeComplexity would be o(n) and space will be o(n)
 * @param {*} arr
 * @returns  the number of unique values in an array
 */
const countUniqueValuesUnsortedSet = (arr) => new Set(arr).size;

/**
 * For sorted arrays
 * * Time complexity = 0(n)
 * * Space complexity = 0(1);
 */
const countUniqueValues = (arr) => {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return arr.length ? i + 1 : i;
};

console.log(countUniqueValues(sortedArr));
console.log(countUniqueValuesUnsorted(unSortedArr));
console.log(countUniqueValuesUnsortedSet(unSortedArr));
