#!/usr/bin/env node

import { readInputLines } from "../common/input.js"

var questionsAnswered = new Set()
var countTotalQuestionsAnswered = 0;

var input = readInputLines();
input.push("");

for (var line of input) {
	if (line == "") {
		console.log("---", questionsAnswered.size)

		countTotalQuestionsAnswered += questionsAnswered.size

		questionsAnswered = new Set()
		continue;
	}

	console.log("-", line);

	for (var c of line) {
		questionsAnswered.add(c)
	}

	console.log(questionsAnswered);

}

console.log("Total questions answered:" + countTotalQuestionsAnswered);
