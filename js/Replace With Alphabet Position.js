/**
 * Problem statement : 
 * In this kata you are required to, given a string, replace every letter with its position in the alphabet.
 * 
 * Example :
 * alphabetPosition("The sunset sets at twelve o' clock.")
 * Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
 */

function alphabetPosition(text) {
    text = text.toLowerCase().match(/[a-z]/g) || '';
    return text.length ? text.reduce((acc,curr,i) => {
           i !== text.length - 1 ? 
           acc += curr.charCodeAt() - 96 + ' ' : 
           acc += curr.charCodeAt() - 96 
           return acc;
       },'') : ''
   }