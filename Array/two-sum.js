// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

// O(N):
var twoSum = function (nums, target) {
	let map = new Map();

	for (let i = 0; i < nums.length; i++) {
		let num1 = nums[i];
		let num2 = target - num1;
		if (map.has(num2)) {
			return [i, map.get(num2)];
		}

		map.set(num1, i);
	}
};

// O(N^2):
var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 1; j < nums.length; j++) {
			if (target === nums[i] + nums[j] && i !== j) {
				console.log(target, nums[i], nums[j]);
				return [i, j];
			}
		}
	}
};
