// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

var plusOne = function (digits) {
	let carry = 0;
	for (var i = digits.length - 1; i >= 0; i--) {
		if (digits[i] === 9) {
			if (i === 0) {
				digits[i] = 0;
				digits.unshift(1);
			} else {
				carry = 1;
				digits[i] = 0;
			}
		} else {
			if (carry === 1) {
				digits[i] = digits[i] + carry;
			} else {
				digits[digits.length - 1]++;
			}
			break;
		}
	}
	return digits;
};

//Используя BigInt:

var plusOne = function (digits) {
	return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
};
