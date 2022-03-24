// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/

var reverseString = function (s) {
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		let temp = s[left];
		s[left] = s[right];
		s[right] = temp;
		left++;
		right--;
	}
};

//Вообще можно просто использовать reverse():
var reverseString = function (s) {
	s.reverse();
};
