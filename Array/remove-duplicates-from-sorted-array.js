// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

// Для решения задачи используем шаблон 2 указателя (итератора)
// Подробнее о шаблонах: https://tproger.ru/translations/14-templates-to-answer-interview-questions/

var removeDuplicates = function (nums) {
	if (nums.length === 0) return 0;

	let pointer1 = 0;

	for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
		if (nums[pointer1] !== nums[pointer2]) {
			pointer1++;
			nums[pointer1] = nums[pointer2];
		}
	}

	return pointer1 + 1;
};
