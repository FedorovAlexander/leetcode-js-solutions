// Problem on leetcode: https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 * 		this.val = val;
 * 		this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	let currentA = headA;
	while (currentA !== null) {
		let currentB = headB;
		while (currentB !== null) {
			if (currentA === currentB) {
				return currentA;
			}
			currentB = currentB.next;
		}
		currentA = currentA.next;
	}
	return null;
};
