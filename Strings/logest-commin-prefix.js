// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/

var longestCommonPrefix = function (strs) {
	let prefix = "";

	for (let i = 0; i < strs[0].length; i++) {
		for (let j = 1; j < strs.length; j++) {
			if (strs[0][i] !== strs[j][i]) {
				return prefix;
			}
		}
		prefix += strs[0][i];
	}

	return prefix;
};
