/**
 * Problem Statement: Given an integral number, determine if it's a square number:


 * Examples : 
 * -1  =>  false
 * 0  =>  true
 * 3  =>  false
 * 4  =>  true
 * 25  =>  true
 * 26  =>  false
 */

const isSquare = function(num){
      //Check if the number is negative
    if(Math.sign(num) !== -1){
        num = Math.sqrt(num)
        //Check if the number is a perfect square
        if(num % 1 !== 0){
            return false
        }
        return true;
    }
    return false
}