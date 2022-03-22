// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

// Для решения задачи используем шаблон 2 указателя (итератора)
// Подробнее о шаблонах: https://tproger.ru/translations/14-templates-to-answer-interview-questions/

var moveZeroes = function (nums) {
	let pointer1 = 0;

	for (let pointer2 = 0; pointer2 < nums.length; pointer2++) {
		if (nums[pointer2] != 0) {
			let hold = nums[pointer1]; // фиксируем значение элемента по первому указателю
			nums[pointer1] = nums[pointer2];
			nums[pointer2] = hold;
			pointer1++;
		}
	}
};
