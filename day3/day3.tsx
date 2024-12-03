import { readFileSync } from "fs";

const levels = readFileSync("./input.txt").toString("utf-8")
function aggregateDoInstructions(value: string) {
  const regex = /mul\(\d{1,3},\d{1,3}\)/g
  const matches = value.matchAll(regex)
  return Array.from(matches).reduce((acc, curr) => {
    const [left, right] = curr[0].split(",")
    const leftNumber = left.replace("mul(", "").trim()
    const rightNumber = right.replace(")", "").trim()
    return acc += Number(leftNumber) * Number(rightNumber)
  }, 0)
}


//PART 1
const sum = aggregateDoInstructions(levels)

const sum2 = levels.split("do()").reduce((acc, curr) => {
  if (curr.includes("don't()")) {
    const [valid] = curr.split("don't()")
    return acc += aggregateDoInstructions(valid)
  } else {
    return acc += aggregateDoInstructions(curr)
  }
}, 0)

console.log(`Day 3, part 1: ${sum}, part 2: ${sum2}`)
