/**What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
 * 'abba' & 'baab' == true
 * 'abba' & 'bbaa' == true
 * 'abba' & 'abbba' == false
 * 'abba' & 'abca' == false
 * 
 * 
 * Problem statement:
 * Write a function that will find all the anagrams of a word from a list. 
 * You will be given two inputs a word and an array with words
 * You should return an array of all the anagrams or an empty array if there are none
 * 
 * Example:
 * anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
 * anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
 * anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
 */

 function anagrams(str,arr){

    let lookup = [...str].reduce((acc,curr) => {
        return acc[curr] ? acc[curr] += 1  : acc[curr] = 1 , acc
    },{})
    
    
    let ans = []
    let i = 0;
    let j = 0;
    let currentStr
    let count = {};
    let lookupClone= {...lookup}
    let char
    
    
    while(i < arr.length){
    
     currentStr = arr[i]
     char = arr[i][j]
    
        
    if(currentStr.length !== str.length){
        i++;
    }
    
    else if(j < currentStr.length){
       
       
            if(!(lookupClone[char])){
                j=0;
                i++
                lookupClone = {...lookup}
            }
            else{
                lookupClone[char] -= 1
                j++
            } 
    }
    else{
        ans.push(currentStr)
        lookupClone = {...lookup}
        j=0;
        i++
    }
    }
        return ans;
    }
    