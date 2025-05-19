// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Greatest Common Divisor of Strings

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

function gcdOfStrings(str1, str2) {
    // Helper function to calculate greatest common divisor
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    // Check if concatenated strings are equal in both orders
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    // Get GCD of lengths
    const gcdLength = gcd(str1.length, str2.length);

    // Return substring from 0 to gcdLength
    return str1.substring(0, gcdLength);
}


console.log(gcdOfStrings("ABCABC", "ABC"));   // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB"));  // Output: "AB"
console.log(gcdOfStrings("LEET", "CODE"));    // Output: ""