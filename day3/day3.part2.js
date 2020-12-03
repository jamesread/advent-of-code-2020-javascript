#!/usr/bin/env node

import { readInputLines } from "../common/input.js"

const input = readInputLines();
const height = input.length - 1
const width = 31; 
const travelVectors = [
	[1, 1],
	[3, 1],
	[5, 1],
	[7, 1],
	[1, 2]
]

var treesEncounteredLog = [];

for (const currentTravelVector of travelVectors) {
	var horizontalPosition = 1, verticalPosition = 1, treesEncountered = 0;

	while (verticalPosition <= height) {
		horizontalPosition += currentTravelVector[0]; 
		verticalPosition += currentTravelVector[1];

		if (horizontalPosition > width) {
			horizontalPosition -= width;
		}

		var elementAtPosition = input[verticalPosition - 1][horizontalPosition - 1];

//		console.log("Element at position:", verticalPosition, ":", horizontalPosition, elementAtPosition);

		if (elementAtPosition == undefined) {
			throw new Error("Uhoh");
		}

		if (elementAtPosition == "#") {
			treesEncountered++;
		}
	}

	console.log("Finished with travel vector:", currentTravelVector, "and encountered", treesEncountered, "trees");

	treesEncounteredLog.push(treesEncountered);
}

var product = treesEncounteredLog.reduce((accumulator, logEntry) => accumulator * logEntry);

console.log("Product of trees encountered across all vectors:", product);
