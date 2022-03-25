// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

var firstUniqChar = function (s) {
	let frequencyCounter = {};

	for (let el of s) {
		frequencyCounter[el] = (frequencyCounter[el] || 0) + 1;
	}

	for (let key in frequencyCounter) {
		if (frequencyCounter[key] === 1) {
			return s.indexOf(key);
		}
	}

	return -1;
};
