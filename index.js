function isPalindrome(word) {
  
  const newWord = word.split('');

  const reverseWord = newWord.reverse();

  const finalWord = reverseWord.join('');

  if(word == finalWord) {
     return true;
  }
  else {
     return false;
  }
}

/* 
  Add your pseudocode here
  Input: "madam"
  Output: true

Input: "robot"
Output: false
*/

/*
  Add written explanation of your solution here
 convert string to an array
 reverse the array values
 convert array to string
 return true if palindrome false if not

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
