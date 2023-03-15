//Problem on leetcode: https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
	const stack = [];
	const brackets = {
		')': '(',
		']': '[',
		'}': '{',
	};

	for (let bracket of s) {
		if (bracket === '(' || bracket === '[' || bracket === '{') {
			stack.push(bracket);
		} else {
			const actual = stack.pop();
			const expected = brackets[bracket];

			if (actual !== expected) {
				return false;
			}
		}
	}
	return stack.length ? false : true;
};
