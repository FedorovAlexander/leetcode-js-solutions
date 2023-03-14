//Problem on leetcode: https://leetcode.com/problems/roman-to-integer/

var romanToInt = function (s) {
	const symbols = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let result = 0;

	s.split('').forEach((item, index) => {
		if (symbols[item] < symbols[s[index + 1]]) {
			result -= symbols[item];
		} else {
			result += symbols[item];
		}
	});
	return result;
};
