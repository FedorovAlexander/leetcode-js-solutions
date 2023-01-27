//Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/772/

var isPalindrome = function (head) {
	let values = [];

	while (head !== null) {
		values.push(head.val);
		head = head.next;
	}

	let left = 0;
	let right = values.length - 1;

	while (left < right) {
		if (values[left] !== values[right]) {
			return false;
		}

		left++;
		right--;
	}

	return true;
};
