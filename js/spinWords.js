/**
 * Problem statement:
 * Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed
 * 
 * Examples:
 * spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
 * spinWords( "This is a test") => returns "This is a test" 
 * spinWords( "This is another test" )=> returns "This is rehtona test"
 */

function spinWords(string){
    //Using Regex to match strings with 5 characters or more
      let strReg = /[A-Z]{5,}/gi;
      let strMatches = string.match(strReg);
    if(strMatches){
          for(let i=0; i < strMatches.length; i++){
               string = string.replace( strMatches[i],[...strMatches[i]].reverse().join(''));
             }
      return string;
      }
    return string;
  }