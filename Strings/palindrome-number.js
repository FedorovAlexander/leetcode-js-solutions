//Problem on leetcode: https://leetcode.com/problems/palindrome-number/

var isPalindrome = function (x) {
	return Number(x.toString().split('').reverse().join('')) === x ? true : false;
};
