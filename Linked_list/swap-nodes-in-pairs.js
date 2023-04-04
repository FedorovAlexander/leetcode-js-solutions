// Problem on leetcode: https://leetcode.com/problems/swap-nodes-in-pairs/

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
var swapPairs = function (head) {
	if (!head) return null;
	if (!head.next == null) return head;

	let dummy = new ListNode(0, head);
	let current = dummy;

	while (current.next && current.next.next) {
		let first = current.next;
		let second = current.next.next;

		first.next = second.next;
		second.next = first;
		current.next = second;

		current = current.next.next;
	}

	return dummy.next;
};
