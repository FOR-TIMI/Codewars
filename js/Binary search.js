const chalk = require('chalk')

/**
 * Assuming the array will always be sorted
 */

function binarySearch(arr,num){

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

binarySearch([12, 23, 38, 40, 54, 62, 71, 87, 99],87)