import { readFileSync } from 'fs'

const input = readFileSync("./ex.txt").toString("utf8").split("\n")

const result = input.map((a) => a.split("   ")).filter(s => s.length > 1).map(([left, right]) => {
  const leftNumbers = Array.of(...left).map(s => Number(s)).sort((a, b) => a - b);
  const rightNumbers = Array.of(...right).filter(s => s.trim().length).map(s => Number(s)).sort((a, b) => a - b);
  if (leftNumbers.length !== 6 && rightNumbers.length !== 6) {
    throw new Error("Not identical lists")
  }
  const merged = leftNumbers.map((s, i) => [s, rightNumbers[i]])
  const sum = merged.reduce((acc, [left, right]) => acc + Math.abs(left - right), 0)
  return sum
}).reduce((acc, curr) => acc + curr)



