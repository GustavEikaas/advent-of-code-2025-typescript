import { readFileSync } from "fs";

const levels = readFileSync("./input.txt").toString("utf-8")
const regex = /mul\(\d{1,3},\d{1,3}\)/g

//PART 1
const matches = levels.matchAll(regex)
let sum = 0
for (const x of matches) {
  const [left, right] = x[0].split(",")
  const leftNumber = left.replace("mul(", "").trim()
  const rightNumber = right.replace(")", "").trim()
  sum += Number(leftNumber) * Number(rightNumber)
}
console.log(sum)


