#!/usr/bin/env node

import { readInputLines } from "../common/input.js"

const instructionRegex = /(acc|nop|jmp) ([+-]{1}\d+)/g;

function decodeInstruction(rawInstruction) {
  var matches = Array.from(rawInstruction.matchAll(instructionRegex))[0]
 
  if (matches.length != 3) {
    throw new Exception("Cannot decode instruction:" + rawInstruction)
  }

  return { 
    "type": matches[1],
    "value": parseInt(matches[2]),
  }
}

function runProgram() {
  var accumulator = 0;
  var input = readInputLines()
  var instructionMemory = Array()

  for (var i = 0; i < input.length; i++) {
    if (instructionMemory.includes(i)) {
      console.log("Loop detected at instruction " + i);
      console.log(instructionMemory)
      break;
    } else {
      console.log("Executing instruction " + i + ", " + input[i])
    }

    var instruction = decodeInstruction(input[i])

    switch (instruction.type) {
      case "acc":
        accumulator += instruction.value;
        break; 
      case "nop":
        break;
      case "jmp":
        i += instruction.value - 1;
        break;
      default: 
        throw new Exception("Unhandled instruction:" + instruction)
    }

    instructionMemory.push(i);

    console.log("  Accumulator is " + accumulator)
  }
}

runProgram();
