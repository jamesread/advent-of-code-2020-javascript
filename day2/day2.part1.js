#!/usr/bin/env node

import { readInputLines } from "../common/input.js"

var inputLineFormat = /^(\d*)\-(\d*) (\w): (.+)$/g;
var goodPasswordCount = 0;

for (var line of readInputLines()) {
	var matches = [...line.matchAll(inputLineFormat)][0];
	var min = parseInt(matches[1])
	var max = parseInt(matches[2])
	var searchChr = matches[3]
	var password = matches[4]

	var chrCountInPassword = 0;

	// indexOf could be used here, but why be overly complex? It iterates over 
	// very char anyway.
	for (var c of password) {
		if (c == searchChr) {
			chrCountInPassword++;
		}
	}

	if (chrCountInPassword >= min && chrCountInPassword <= max) {
		goodPasswordCount++;
	}

//	console.log(line, "---", min, max, chr, password);
}

console.log("Good passwords:", goodPasswordCount);


