#!/usr/bin/env node

import { readInputAsIntegerList } from "../common/input.js"

var input = readInputAsIntegerList()

outer: for (var i of input) {
	for (var j of input) {
		for (var k of input) {
			var product = i + j + k;

			console.log(i, "+", j, "+", k, "=", product);

			if (product == 2020) {
				console.log("Answer found: ", i, ",", j, "and", k, "Product is:", i * j * k);
				break outer;
			}
		}
	}
}

