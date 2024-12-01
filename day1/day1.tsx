import { readFileSync } from 'fs'

const input = readFileSync("./input.txt").toString("utf8").split("\n").filter(s => s.length > 0)

const left = input.map(s => s.split("   ")[0]).map(s => Number(s)).sort((a, b) => a - b)
const right = input.map(s => s.split("   ")[1]).map(s => Number(s)).sort((a, b) => a - b)

const result = left.reduce((acc, curr, index) => acc + Math.abs(curr - right[index]), 0)
console.log(result)


