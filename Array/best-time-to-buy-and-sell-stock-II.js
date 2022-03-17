// Задача на leetcode https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

var maxProfit = function (prices) {
	let profit = 0;
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] > prices[i - 1]) {
			profit += prices[i] - prices[i - 1];
		}
	}
	return profit;
};
