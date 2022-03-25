// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;

	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for (let char of s) {
		frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
	}

	for (let char of t) {
		frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
	}

	for (let key in frequencyCounter1) {
		if (!(key in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter2[key] !== frequencyCounter1[key]) {
			return false;
		}
	}

	for (let key in frequencyCounter2) {
		if (!(key in frequencyCounter1)) {
			return false;
		}
	}
	return true;
};
