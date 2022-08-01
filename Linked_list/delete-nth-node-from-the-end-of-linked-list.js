// Algorithm :
// Step 1> Create two pointers slow and fast,
// Step 2> first move the fast pointer to the nth node.
// Step 3> now move the fast (at nth) and slow (at head) pointers one node at a time.
// Step 4> when the fast pointer reaches the end, slow pointer is at the nth node.

var removeNthFromEnd = function (head, n) {
	let fast = head;
	let slow = head;
	while (n-- > 0) {
		fast = fast.next;
	}
	let prev = null;
	while (fast != null) {
		fast = fast.next;
		prev = slow;
		slow = slow.next;
	}
	if (prev == null) {
		return head.next;
	}
	prev.next = slow.next;
	slow.next = null;
	return head;
};
