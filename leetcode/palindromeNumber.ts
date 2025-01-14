// palindromeNumber.ts

/**
 * Checks if a given number is a palindrome.
 * @param num - The number to check.
 * @returns True if the number is a palindrome, false otherwise.
 */
function isPalindrome(num: number): boolean {
    // Implementation goes here
    let reversedNum = 0;
    let n = num;

    while(n > 0){
        reversedNum = reversedNum * 10 + (n % 10) ;
        n = Math.floor(n/10);
    }

    return reversedNum === num; // Placeholder return
}

// Example tests
console.log(isPalindrome(121)); // Expected output: true
console.log(isPalindrome(789)); // Expected output: true
console.log(isPalindrome(-121)); // Expected output: false
console.log(isPalindrome(10)); // Expected output: false
console.log(isPalindrome(12321)); // Expected output: true
console.log(isPalindrome(0)); // Expected output: true