// Problem on Leetcode: https://leetcode.com/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
	if (!head) return head;

	let dummy = new ListNode();
	dummy.next = head;
	let prev = dummy;
	let current = head;

	while (current !== null) {
		if (current.val === val) {
			prev.next = current.next;
		} else {
			prev = current;
		}
		current = current.next;
	}
	return dummy.next;
};
