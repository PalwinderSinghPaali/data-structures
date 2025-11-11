// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// My Solution:
// var isSubsequence = function(s, t) {
//     let i =0;
//     let lastMatchIdx=0;
//     let matchString='';
//     for(let i=0; i<s.length; i++){
//         for (let j = lastMatchIdx; j < t.length; j++) {
//             if(s[i]===t[j]){
//                 matchString += s[i];
//                 lastMatchIdx=j;
//             }
//           }
//     }
    
//     return s===matchString;
// };


// Actual Solution
var isSubsequence = function(s, t) {
    let i =0;
    let lastMatchIdx=0;
    let matchString='';
    for(let i=0; i<s.length; i++){
        let found = false;
        for (let j = lastMatchIdx; j < t.length; j++) {
            if(s[i]===t[j]){
                matchString += s[i];
                lastMatchIdx=j+1;
                found = true;
                break;
            }
          }

        if (!found) break;
    }
    
    return s===matchString;
};