#!/usr/bin/env node

import { readInputLines } from "../common/input.js"

var inputLineFormat = /^(\d*)\-(\d*) (\w): (.+)$/g;
var goodPasswordCount = 0;

for (var line of readInputLines()) {
	var matches = [...line.matchAll(inputLineFormat)][0];
	var pos1 = parseInt(matches[1]) - 1
	var pos2 = parseInt(matches[2]) - 1
	var searchChr = matches[3]
	var password = matches[4]

	var chrCountInPassword = 0;

	var pos1Matches = password[pos1] == searchChr 
	var pos2Matches = password[pos2] == searchChr

	if (
		(pos1Matches && !pos2Matches) || 
		(!pos1Matches && pos2Matches)
	){
		goodPasswordCount++;
	}

//	console.log(line, "---", pos1, pos1Matches, pos2, pos2Matches, searchChr, password);
}

console.log("Good passwords:", goodPasswordCount);


