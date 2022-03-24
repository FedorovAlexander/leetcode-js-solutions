// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/

var reverse = function (x) {
	const reversed = parseInt(Math.abs(x).toString().split("").reverse().join("")) * Math.sign(x);
	return reversed <= 2 ** 31 && reversed >= 2 ** 31 * -1 ? reversed : 0;
};
