import { readFileSync } from 'fs'

const input = readFileSync("./input.txt").toString("utf8").split("\n").filter(s => s.length > 0)

const left = input.map(s => s.split("   ")[0]).map(s => Number(s)).sort((a, b) => a - b)
const right = input.map(s => s.split("   ")[1]).map(s => Number(s)).sort((a, b) => a - b)

// PART 1
const result = left.reduce((acc, curr, index) => acc + Math.abs(curr - right[index]), 0)

//PART 2
const result2 = left.reduce((acc, curr) => {
  const matches = right.filter(s => s == curr).length
  if (matches == 0) {
    return acc
  }
  return acc + (curr * matches)
}, 0)


console.log(`Day 1, part 1: ${result}, part 2: ${result2}`)


