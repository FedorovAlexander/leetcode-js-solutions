// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/773/

var hasCycle = function (head) {
	let set = new Set();
	let current = head;

	while (current) {
		if (set.has(current)) {
			return true;
		} else {
			set.add(current);
		}

		current = current.next;
	}
	return false;
};
