function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let maxLength = 0; 
  let left = 0; 
  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    while (charSet.has(currentChar)) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(currentChar);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
const s = "pwwkew";
const result = lengthOfLongestSubstring(s);
console.log(result); // Output: 3
