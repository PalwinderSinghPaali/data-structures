// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"

// Solved -
var mergeAlternately = function(word1, word2) {
    let res = ''
    let max = Math.max(word1.length, word2.length)
    let min = Math.min(word1.length, word2.length)
    for (let i = 0; i< max; i++){
            if(i<min){
                res+=word1[i] + word2[i];
                continue;
            }else if(i>= min ){
                if(i >= word2.length){
                 res+=word1[i];
                    continue;    
                }else{
                    res+=word2[i];
                    continue;
                }
            }
    }
    return res;
};


// optimized solution -
function mergeAlternately2(word1, word2) {
    let merged = '';
    let i = 0;

    while (i < word1.length || i < word2.length) {
        if (i < word1.length) merged += word1[i];
        if (i < word2.length) merged += word2[i];
        i++;
    }

    return merged;
}

// console.log(mergeAlternately("abc","pqr"))
// console.log(mergeAlternately("ab","pqrs"))
console.log(mergeAlternately("abcd","pq"))