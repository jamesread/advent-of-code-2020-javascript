#!/usr/bin/env node

import { readInputLines } from "../common/input.js"

function processLine(line) {
	//console.log("line", line);

	var rowLower = 0, rowUpper = 127, row = null;
	var colLower = 0, colUpper = 7, col = null; 

	for (var chr of line) {
		//console.log(chr, rowLower, rowUpper, " | ", colLower, colUpper);

		var rowGap = Math.floor((rowUpper - (rowLower - 1)) / 2);
		var colGap = Math.floor((colUpper - (colLower - 1)) / 2);

		switch (chr) {
			case 'F': rowUpper -= rowGap; break;
			case 'B': rowLower += rowGap; break;
			case 'L': colUpper -= colGap; break;
			case 'R': colLower += colGap; break;
			default:
				throw new Error("Char: " + chr)
		}

		//console.log(" " , rowLower, rowUpper, " | ", colLower, colUpper);

		if (row == null && rowUpper == rowLower) {
			row = rowLower;
		//	console.log("found row!", row)
		}

		if (col == null && colUpper == colLower) {
			col = colLower
		//	console.log("found col!", col);
		}

		//console.log(" ")
	}

	if (row == null || col == null) {
		throw new Error("row/col not found");
	}

	var seatId = (row * 8) + col

	return seatId;
}

console.assert(processLine("FBFBBFFRLR") == 357);
console.assert(processLine("BFFFBBFRRR") == 567);
console.assert(processLine("FFFBBBFRRR") == 119);
console.assert(processLine("BBFFBBFRLL") == 820);

var highest = 0;

for (var line of readInputLines()) {
	var seatId = processLine(line);

	if (seatId > highest)
		highest = seatId;
}

console.log("Highest: ", highest);
