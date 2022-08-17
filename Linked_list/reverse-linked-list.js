// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/

var reverseList = function (head) {
	let prev = null;
	let next = null;

	while (head !== null) {
		next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}

	return prev;
};
