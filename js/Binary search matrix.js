const chalk = require('chalk');

function searchMatrix(matrix,target){

    /**
     * Expect matrix to look like `[
                                        [ 1, 3, 5, 7],
                                        [10,11,16,20],
                                        [23,30,34,60]
                                    ]`
     *  use Binary search since the array is sorted. 
     * I can treat this like a Single dimensional array and then get the current element based on the current index.
     * [1,3,5,7,10,11,16,20,23,30,34,60] => index 60 = 11
     * get the current element like a graph with x and y or row and column
     * where the row would be i/length of the column and the column would need a wrap around so it doesn't extend past 
     * the length of the column so col = i%length
     * 
     * Time Complexity = O(logn)
     */

const rowLength = matrix[0].length;
const colLength = matrix.length;

let start = 0
let end = rowLength * colLength;
let middle

let row
let col

while(start <= end){
    middle = Math.floor((start + end)/2);
    row = Math.floor(middle/colLength);
    col = Math.floor(middle%colLength);
 
    if(matrix[row][col] === target){
        console.log(chalk.green(` \n Found the number ${matrix[row][col]} in row ${row} and col ${col} of the matrix \n`))
        return;
    }

    else if(matrix[row][col] > target){
        end = middle - 1
    }

    else if(matrix[row][col] < target){
        start = middle + 1
    }

}


console.log(chalk.red(`\n Couldn't find the number ${target} in the matrix \n`))
return;


}

searchMatrix([
    [ 1, 3, 5, 7],
    [10,11,16,20],
    [23,30,34,60]
], 16)

