// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/770/

var rotate = function (matrix) {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = matrix.length - 1; j >= 0; j--) {
			matrix[i].push(matrix[j].shift());
		}
	}
	return matrix;
};
