// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

//Способ 1:

var isPalindrome = function (s) {
	const string = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
	const reverseString = s
		.replace(/[^0-9a-z]/gi, "")
		.toLowerCase()
		.split("")
		.reverse()
		.join("");

	if (string === reverseString) {
		return true;
	}

	return false;
};

//Способ 2:

var isPalindrome2 = function (s) {
	const string = s.replace(/[^0-9a-z]/gi, "").toLowerCase();

	let left = 0;
	let right = string.length - 1;

	while (left < right) {
		if (string[left] !== string[right]) {
			return false;
		} else {
			left++;
			right--;
		}
	}
	return true;
};
