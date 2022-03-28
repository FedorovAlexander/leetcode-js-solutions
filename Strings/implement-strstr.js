// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/

// Способ 1:

var strStr = function (haystack, needle) {
	if (needle.length < 1 || needle === haystack) return 0;

	for (let i = 0; i < haystack.length; i++) {
		if (needle.length !== 1) {
			if (haystack.slice(i, i + needle.length) == needle) {
				return i;
			}
		} else {
			if (haystack.slice(i, i + 1) === needle) {
				return i;
			}
		}
	}

	return -1;
};

// Способ 2:

var strStr = function (haystack, needle) {
	return haystack.indexOf(needle);
};
