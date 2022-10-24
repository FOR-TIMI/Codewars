const chalk = require('chalk')

/**
 * Assuming the array will always be sorted
 */

/**
 * Iterative Method
 */

function binarySearch(arr,num){

  if(!arr || !num){
    console.log(chalk.red(`\n Please pass in an array and a number to search \n`)) 
    return;
  }

  let start = 0;
  let end = arr.length - 1;
  let middle

  while(start <= end){
    middle = Math.floor((start + end)/2)

    if(num === arr[middle]){
      console.log(chalk.green(`\n We found ${num} in index ${middle} of the array \n`))
      return;
    }

    else if(num < arr[middle]){
       end = middle - 1
    }

    else if(num > arr[middle]){
      start = middle + 1
    }


  }




   console.log(chalk.red(`\n ${num} was not found in the array \n`))
   return ;

}


const data = [12, 23, 38, 40, 54, 62, 71, 87, 99]
console.log(`\n -------Iterative-------`)
binarySearch(data, 54)


/**
 * Recursive Method
 */

function recursiveSearch(arr,num, middle,start = 0,end = arr.length - 1){
   middle = Math.floor((start + end)/2)

    if(start > end){
      console.log(chalk.red(`\n The number ${num} does not exist in this array \n`))
      return;
    }

    else if(num === arr[middle]){
      console.log(chalk.green(`\n We found the number ${num} in the index ${middle} of the array \n`))
      return;
    }

    else if(num < arr[middle]){
       recursiveSearch(arr,num,middle,start,middle - 1)
       return;
    }

    else if(num > arr[middle]){
      recursiveSearch(arr,num,middle,middle + 1, end)
      return;
    }
}

console.log(`--------Recursive--------`)
recursiveSearch(data, 54)
