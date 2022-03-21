// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

var plusOne = function (digits) {
	for (var i = digits.length - 1; i >= 0; i--) {
		if (digits[i] === 9) {
			if (i === 0) {
				digits[i] = 0;
				digits.unshift(1);
			} else {
				digits[i] = 0;
			}
		} else {
			digits[i]++;
			break;
		}
	}
	return digits;
};

//Используя BigInt:

var plusOne = function (digits) {
	return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
};
