/**
 * Problem Statement: Implement the function which takes an array containing the names of people that like an item.
 * It must return the display text as shown in the examples:
 * 
 * Examples:
 * []                                -->  "no one likes this"
 * ["Peter"]                         -->  "Peter likes this"
 * ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
 * ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
 * ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 */


function likes(users){
    //Get the first second and the rest of the users
    [a,b,...c] = users;
    
    switch(users.length){
        case 0: return `no one likes this`
        case 1 : return `${a} likes this`
        case 2 : return `${a} and ${b} like this`
        case 3 : return `${a}, ${b} and ${c} like this`
        default : return `${a}, ${b} and ${c.length} others like this`
    }
}