//Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

var intersect = function (nums1, nums2) {
	let result = [];
	for (let i = 0; i < nums2.length; i++) {
		if (nums1.includes(nums2[i])) {
			result.push(nums2[i]);
			nums1.splice(nums1.indexOf(nums2[i]), 1);
		}
	}

	return result;
};
