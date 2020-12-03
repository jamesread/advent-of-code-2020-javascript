#!/usr/bin/env node

import { readInputLines } from "../common/input.js"

var input = readInputLines();
var height = input.length - 1
var width = 31; 

var horizontalPosition = 1, verticalPosition = 1;

var treesEncountered = 0;

while (verticalPosition <= height) {
	horizontalPosition += 3; 
	verticalPosition += 1;

	if (horizontalPosition > width) {
		horizontalPosition -= width;
	}

	var elementAtPosition = input[verticalPosition - 1][horizontalPosition - 1];

	console.log("Element at position:", verticalPosition, ":", horizontalPosition, elementAtPosition);

	if (elementAtPosition == "#") {
		treesEncountered++;
	}
}

console.log(treesEncountered);
