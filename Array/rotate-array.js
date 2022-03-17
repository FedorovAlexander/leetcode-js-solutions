// Задача на leetcode https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
// Пример: [1,2,3,4,5,6,7]

var rotate = function (nums, k) {
	const n = nums.length;
	k %= n; // если k больше длины массива, то берем остаток от деления

	reverse(nums, 0, n - 1); // [7, 6, 5, 4, 3, 2, 1]
	reverse(nums, 0, k - 1); // [5, 6, 5, 4, 3, 2, 1]
	reverse(nums, k, n - 1); // [7, 6, 5, 1, 2, 3, 4]
};

function reverse(arr, start, end) {
	while (start < end) {
		[arr[start], arr[end]] = [arr[end], arr[start]];
		start++;
		end--;
	}
}
