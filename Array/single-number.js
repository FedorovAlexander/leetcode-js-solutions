// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

var singleNumber = function (nums) {
	let frequencyCounter = {};

	for (let number of nums) {
		frequencyCounter[number] = (frequencyCounter[number] || 0) + 1;
	}

	for (let val in frequencyCounter) {
		if (frequencyCounter[val] === 1) {
			return val;
		}
	}
};
