// Problem on leetcode: https://leetcode.com/problems/rotate-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
	if (!k || !head || !head.next) return head;

	let len = 1;
	let tail = head;

	while (tail.next) {
		tail = tail.next;
		len++;
	}
	tail.next = head;
	k %= len;

	for (let i = 0; i < len - k; i++) {
		tail = tail.next;
	}

	head = tail.next;
	tail.next = null;
	return head;
};
