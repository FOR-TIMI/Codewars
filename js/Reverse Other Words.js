/**
 * Problem Statement: Reverse every other word in a given string, then return the string. 
 * Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
 * Punctuation marks should be treated as if they are a part of the word in this kata.
 * 
 */



function reverse(str){
  
    str = str
          //To remove all trailing white spaces
          .trim()
          //To seperate each word by spaces into an array
          .split(' ');
  
   let reversedString = ''
  
    for(let i=0; i < str.length; i++){
      //To leave even numbers in the string array and reverse odd numbers
        if(i % 2 === 0){
            reversedString += str[i] + ' '
        }
        else{
            reversedString += str[i].split('').reverse().join('') + ' '
        }
    }
  
     //To remove all trailing white spaces
      return reversedString.trim(); 
  
    }