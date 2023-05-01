/**
 * Write a funcation that takes an array as parameters
 *  if there are a pair of two elements whose sum is 0
 *  return the 2 elements in an array
 * if not return an empty array
 */

/**
 * Solution for both sorted and unsorted array
 */

const unSortedArray = [3, 4, 5, 1, -8, 49, -1];
const sortedArray = unSortedArray.sort((a, b) => a - b);

// Time complexity is O(n^2)
const sumToZeroUnsorted = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum === 0) {
        return [arr[i], arr[j]];
      }
    }
  }

  return "Pair does not exist";
};

//Test for sorted arrays
//Time complexity is O(n)
const sumToZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return "Pair does not exist";
};

// Test for unSortedArray
console.log("*******Unsorted Array********");
console.log("*****>" + unSortedArray);
console.log(sumToZeroUnsorted(unSortedArray));

//Test for sortedArray
console.log("\n*******Sorted Array********\n");
console.log("*****>" + sortedArray);
console.log(sumToZero(sortedArray));
