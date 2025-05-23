// Input-3[a]2[bc]
//output aaabcbc

// Input-3[a2[c]]
//output accaccacc

function resolveString(s, num = 1) {
  let res = '';
  let i = 0;

  while (i < s.length) {
    if (!isNaN(s[i])) {
      // Build the full number in case it's multi-digit
      let count = 0;
      while (!isNaN(s[i])) {
        count = count * 10 + parseInt(s[i]);
        i++;
      }

      if (s[i] === '[') {
        i++; // Skip '['
        let start = i;
        let bracketCount = 1;

        // Find the matching closing bracket
        while (bracketCount !== 0) {
          if (s[i] === '[') bracketCount++;
          if (s[i] === ']') bracketCount--;
          i++;
        }

        // Recurse on the substring inside the brackets
        const decoded = resolveString(s.substring(start, i - 1));
        res += decoded.repeat(count);
      }
    } else {
      res += s[i];
      i++;
    }
  }

  return res;
}

// 🔍 Test Cases
console.log(resolveString("3[a]2[bc]"));      // Output: "aaabcbc"
console.log(resolveString("3[a2[c]]"));       // Output: "accaccacc"
console.log(resolveString("2[abc]3[cd]ef"));  // Output: "abcabccdcdcdef"


function decodeString(s) {
  const stack = [];
  let currentNum = 0;
  let currentStr = '';

  for (let char of s) {
    if (!isNaN(char)) {
      // If it's a number, build the full number (handles multi-digit)
      currentNum = currentNum * 10 + parseInt(char);
    } else if (char === '[') {
      // Push current context to stack
      stack.push([currentStr, currentNum]);
      currentStr = '';
      currentNum = 0;
    } else if (char === ']') {
      // Pop from stack and build repeated string
      const [prevStr, num] = stack.pop();
      currentStr = prevStr + currentStr.repeat(num);
    } else {
      // Regular characters
      currentStr += char;
    }
  }

  return currentStr;
}

// Example usage:
console.log(decodeString("3[a]2[bc]"));     // Output: "aaabcbc"
console.log(decodeString("3[a2[c]]"));      // Output: "accaccacc"

