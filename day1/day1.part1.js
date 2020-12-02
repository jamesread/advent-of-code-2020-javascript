#!/usr/bin/env node

import { readInputAsIntegerList } from "../common/input.js"

var input = readInputAsIntegerList()

outer: for (var i of input) {
	for (var j of input) {
		var product = i + j;

		console.log(i, "+", j, "=", product);

		if (product == 2020) {
			console.log("Answer found: ", i, "and", j, "Product is:", i * j);
			break outer;
		}
	}
}

