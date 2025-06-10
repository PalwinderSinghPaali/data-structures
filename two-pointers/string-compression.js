// String Compression

// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

 

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:

// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

// My Solution
var compress = function(chars) {
    let arr = new Array();
    let count = {}
    
    for(let i=0; i<chars.length; i++){
        count[chars[i]] = (count[chars[i]] || 0) + 1;
    }
    
    Object.entries(count).forEach(([key, value]) => {
        if(value === 1){
            arr.push(key)
        }else{
            arr.push(key);
            if(value/10 > 1){
                arr.push(Math.round(value/10));
                arr.push(Math.round(value%10))
            }else{
                arr.push(value)
            }
        }
    })
   return arr 
};

// let chars = ["a","a","b","b","c","c","c"]
// let chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
let chars = ["a"]

console.log(compress(chars));

// leet code solution
var compress1 = function(chars) {
    let write = 0;
    let read = 0;

    while (read < chars.length) {
        let char = chars[read];
        let count = 0;

        // Count the number of occurrences of the current character
        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }

        // Write the character
        chars[write] = char;
        write++;

        // Write the count if more than 1
        if (count > 1) {
            let countStr = count.toString();
            for (let digit of countStr) {
                chars[write] = digit;
                write++;
            }
        }
    }

    return write;
};