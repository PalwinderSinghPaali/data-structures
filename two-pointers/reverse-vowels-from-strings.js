// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Reverse Vowels of a String


var reverseVowels = function(s) {
    let res = '';
    let vowels = ['a','e','i','u','o']
    const chars = s.split('');
    let i = 0;
    let j = s.length-1;
    while(i<j){
        while(i<j && !vowels.includes(s[i].toLowerCase())) i++;
        while(i<j && !vowels.includes(s[j].toLowerCase())) j--;
        
        [chars[i],chars[j]] = [chars[j],chars[i]];
        i++;
        j--;
    }
    
    return chars.join('')
};

console.log(reverseVowels("IceCreAm"))