/*
Given an integer x, return true if x is a 
palindrome, and false otherwise.

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

function isPalindrome(x) {
  const strX = x.toString(); // convert the integer to a string
  return strX === strX.split("").reverse().join("");
}
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(123)); // Output: false
