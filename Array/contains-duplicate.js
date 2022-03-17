// Задача на leetcode https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

// Решение задачи с помощью Set
var containsDuplicate = function (nums) {
	const newSet = new Set(nums);
	return newSet.size === nums.length ? false : true;
};

// Решение задачи через цикл
var containsDuplicate = function (nums) {
	let frequencyCounter = {};

	for (let number of nums) {
		if (frequencyCounter[number]) {
			return true;
		} else {
			frequencyCounter[number] = 1;
		}
	}
	return false;
};
