// Задача на leetcode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

var isValidSudoku = function (board) {
	for (let i = 0; i < 9; i++) {
		let row = new Set();
		let col = new Set();
		let box = new Set();

		for (let j = 0; j < 9; j++) {
			let _row = board[i][j];
			let _col = board[j][i];
			let _box = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

			if (_row != ".") {
				if (row.has(_row)) return false;
				row.add(_row);
			}

			if (_col != ".") {
				if (col.has(_col)) return false;
				col.add(_col);
			}

			if (_box != ".") {
				if (box.has(_box)) return false;
				box.add(_box);
			}
		}
	}
	return true;
};
