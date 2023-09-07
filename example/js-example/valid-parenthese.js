function isValid(s) {
  const stack = [];
  //define the matching pairs of brackets
  const bracketPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let char of s) {
    if (char in bracketPairs) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (char !== bracketPairs[top]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
