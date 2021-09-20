#!/usr/bin/env node

import { readInput } from "../common/input.js"

var countValidPassports = 0;

const passportKeyFormat = /(\w{3}):([\w\d#]+)/g;

function isPassportValid(passport) {
	for (var requiredField of ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']) {
		if (!passportFields.includes(requiredField)) {
			console.log("invalid:", passportFields);
			console.log("Missing field:", requiredField);

			return false;
		}

	}

	for (var 

	return true;
}

for (var chunk of readInput().trim().split("\n\n")) {
	var passport = [];

	for (var line of chunk.split("\n")) {
		var matches = [...line.matchAll(passportKeyFormat)];

		if (matches.length == 0) {
			throw new Error("No match on line:" + line);
		} else {
			for (var match of matches) {
				passport[match[1]] = match[2];
			}
		}
	}

	if (isPassportValid(passport)) {
		countValidPassports++;
	}
}

console.log("Number of valid passports", countValidPassports);
