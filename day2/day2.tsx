import { readFileSync } from "fs";

const levels = readFileSync("./input.txt").toString("utf-8").split("\n").filter(s => s.trim().length > 0).slice(366, 367)

//PART 1
const safeReports = levels.filter((v) => {
  const numbers = v.split(" ").map(s => Number(s))
  let isAsc = (numbers[0] - numbers[1]) < 0
  const results = numbers.reduce((acc, curr, i, array) => {
    if (i == array.length - 1 || acc == false) {
      return acc
    }
    const diff = (curr - array.at(i + 1))
    if (Math.abs(diff) > 3) {
      return false
    }
    if ((isAsc && diff < 0) || (!isAsc && diff > 0)) {
      return true
    }
    return false
  }, true)
  return results;
}).length

// PART 2


console.log(`Day 1, part 1: ${safeReports}, part 2: ${0}`)
