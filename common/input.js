import { readFileSync } from 'fs'

export function readInput() {
	return readFileSync('input', 'utf8');
}

export function readInputLines() {
	return readInput().trim().split("\n");
}

function inputToIntegerList(input) {
	var ret = [];

	for (var line of readInputLines()) {
		ret.push(parseInt(line));
	}

	return ret;
}

export function readInputAsIntegerList() {
	return inputToIntegerList(readInput())
}

