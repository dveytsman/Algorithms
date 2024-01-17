// Solutions to the easy problems

// Problem 1.
const twoSum = (nums, target) => {
  let trackingObject = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let missingElement = target - num;
    if (missingElement in trackingObject) {
      return [i, trackingObject[missingElement]];
    } else {
      trackingObject[num] = i;
    }
  }
  return [];
};

//   Explanation: The prompt is; provided an array and a target, find 2 numbers in the array that sum
//  to the target and return the indices the numbers can be found.

// Solution:
// 1. The easiest solution is to have a nested iteration to check each number against every other number in the array. then check the sums against the target.  -
// 2. The best solution is to create an object to store the numbers and index values, then iterate one time through the list of nums. While iterating, look for the missing value. ex: if target is 10 and the first number in the array is 1; we look for the number 9 (10 - 1). if 9 is a key in the object return the current index and the value at key 9. If 9 isn't a key then add the new key and value of the current iteration. so the object would look like this after the iteration: {1: 0}. This means a key of 1 (the number) with the value of 0 (the index)

// Problem 2: isPalindrome. Take in a number and return if the number is a palindrome.
const isPalindrome = (num) => {
  // naive approach: convert to strings, reverse, and compare.
  // return String(num) === String(num).split('').reverse().join('');

  // arithmetical approach:
  if (num < 0 || (num > 0 && num % 10 === 0)) {
    return false;
  }
  let reversed = 0;
  let newNum = num;
  while (newNum > reversed) {
    let lastDigit = newNum % 10;
    reversed = reversed * 10 + lastDigit;
    newNum = Math.floor(newNum / 10);
  }
  return newNum === reversed || Math.floor(reversed / 10) === newNum;
};
// Solution 2 explained: num % 10 gives you the last digit and Math.floor(num / 10) gives you the number without the last digit. using a while loop, with the limiter being the remaining number. In each iteration we increment the reversed number by * 10 and adding last digit. and reducing the original number / 10 rounded down. After the iteration finishes. We have the reversed number to compare it to the original number.
//Bonus for more efficiency: change the while loop to run while original num > reversed number. After the loop ends there are 2 cases that could be true, either the number has an even number of digits and the reversed half matches the remaining half of the digits. Or the number has an odd number of digits. i.e. 151. after the iteration ends the original num is 1 and the reversed is at 15. so we check the reversed num / 10 against the original number.

//Problem 3. write a function that takes in a roman numeral as a string and return an integer.

const romanToInt = (roman) => {
  const vals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let ans = 0;
  for (let i = 0; i < roman.length; i++) {
    let el = roman[i];
    let currentVal = vals[el];
    let next = i < roman.length ? vals[roman[i + 1]] : null;
    if (next && next > currentVal) {
      ans -= currentVal;
    } else {
      ans += currentVal;
    }
  }
  return ans;
};

// Explanation: Given that the input roman numeral is Valid, create a dictionary to keep track of the values of each individual roman numeral. The way that roman numerals work is that if every subsequent roman numeral is less than or equal to the current roman numeral, the value of the current numeral is added to the output value. However if the next value is greater than the current roman numberal, we would subtract the value of the current roman numeral from the totalasdf
// console.log(romanToInt("III"));
// console.log(romanToInt("XIII"));
// console.log(romanToInt("CDXLVI"));
// console.log(romanToInt("MDCLIX"));

// Problem 4 (14) Longest Common Prefix: Write a function to find the longest common prefix string amongst an array of strings. If there's no common prefix, return "".
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return "";
  }
  let testString = strs[0];
  while (!strs.every((str) => str.indexOf(testString) === 0)) {
    testString = testString.substring(0, testString.length - 1);
  }
  return testString;
};

// solution;

// console.log(longestCommonPrefix(["flowers", "flight", "flow"]));
// console.log(longestCommonPrefix(["apple", "apple", "apple"]));
// console.log(longestCommonPrefix(["flowers", "tom", "sight"]));
// console.log(longestCommonPrefix(["c", "acc", "ccc"]));

// Problem 5 (20) Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. The string is valid ifOpen brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const isValid = (string) => {
  let parenPairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    let element = string[i];
    console.log(element);

    if (!parenPairs[element]) {
      stack.push(element);
      console.log(stack);
    } else if (stack.pop() != parenPairs[element]) {
      return false;
    }
  }
  return stack.length === 0;
};

//Solution explanation. as you iterate through the string you need to be able to check what you have itereated through already. if the element is an opening bracket add it to the stack. if the elemeent is a closing bracket. check that the matching opening bracket is the last element on the storing stack. To solve it this way we need to have a stack and an object with matching closing and opening brackets.

// console.log(isValid("(){}[][[]]"));
// console.log(isValid("(){}[][[}]]"));
// console.log(isValid("(){}[][[{]]"));
