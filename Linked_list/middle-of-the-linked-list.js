// Problem on LeetCode: https://leetcode.com/problems/middle-of-the-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
	let fast = head;
	let slow = head;
	let count = 0;
	let middle;

	while (fast !== null) {
		fast = fast.next;
		count++;
	}

	middle = count % 2 ? count / 2 - 1 : Math.ceil(count / 2);

	while (middle > 0) {
		slow = slow.next;
		middle--;
	}
	return slow;
};

// Second solution

var middleNode = function (head) {
	let slow = head;
	let fast = head;

	while (fast != null && fast.next != null) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
};
