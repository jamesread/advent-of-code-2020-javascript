#!/usr/bin/env node

import { readInput } from "../common/input.js"

var countValidPassports = 0;

const passportKeyFormat = /(\w{3}):([\w\d#]+)/g;

function isPassportValid(passportFields) {
	for (var requiredField of ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']) {
		if (!passportFields.includes(requiredField)) {
			console.log("invalid:", passportFields);
			console.log("Missing field:", requiredField);

			return false;
		}

	}

	return true;
}

for (var chunk of readInput().trim().split("\n\n")) {
	var passportFields = [];

	for (var line of chunk.split("\n")) {
		var matches = [...line.matchAll(passportKeyFormat)];

		if (matches.length == 0) {
			throw new Error("No match on line:" + line);
		} else {
			for (var match of matches) {
//				console.log("\t", match[1], match[2]);
				passportFields.push(match[1]);
			}
		}
	}

	if (isPassportValid(passportFields)) {
		countValidPassports++;
	}
}

console.log("Number of valid passports", countValidPassports);
