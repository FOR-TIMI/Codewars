/**
 * Problem Statement: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 * 
 * Example: 
 * moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */


function moveZeros(arr) {
   
  
    //To remove all zeros from the array
     const noZeros = arr.filter(el => el !== 0 )
     
     //To get total amount of zeros in the array
     const zeros = arr.length - noZeros.length;
  
    //To push the total amout of zeros in the array to the end
      for(let i = 0; i < zeros; i++){
          noZeros.push(0)
      }
  
     
  
      return noZeros
  }