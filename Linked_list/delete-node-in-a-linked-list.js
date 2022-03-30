// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/

var deleteNode = function (node) {
	node.val = node.next.val;
	node.next = node.next.next;
};
