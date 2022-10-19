/**
 * Problem statement: Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements 
 * with the same value next to each other and preserving the original order of elements.
 * 
 * 
 * Example:
 * uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
 * uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
 * uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

var uniqueInOrder=function(iterable){
        
    const arr = []
    let i =0;
    
      
    while(i < iterable.length){
      el = iterable[i]
      next = iterable[i + 1]
      
      if(el !== next){
        arr.push(el)
      }
      
      i++
    }
      
      return arr
    }