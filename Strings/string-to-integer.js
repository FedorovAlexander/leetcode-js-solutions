// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/

var myAtoi = function (s) {
	const parsed = parseInt(s);

	if (isNaN(parsed)) return 0;

	const sign = parsed < 0 ? -1 : 1;
	const maxValue = Math.pow(2, 31);

	if (parsed * sign >= maxValue) {
		if (sign === -1) {
			return maxValue * sign;
		}
		return maxValue - 1;
	}

	return parsed;
};
