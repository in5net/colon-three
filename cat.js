const one = "\n :3";
const runLengthEncoded = [
  [1, 9],
  [3, 15],
  [0, 1],
  [1, 8],
  [3, 1],
  [2, 15],
  [3, 2],
  [0, 1],
  [1, 8],
  [3, 1],
  [2, 6],
  [3, 5],
  [2, 6],
  [3, 1],
  [0, 1],
  [1, 8],
  [3, 7],
  [1, 5],
  [3, 1],
  [2, 5],
  [3, 1],
  [0, 1],
  [1, 20],
  [3, 1],
  [2, 5],
  [3, 1],
  [0, 1],
  [1, 1],
  [2, 6],
  [1, 13],
  [3, 1],
  [2, 5],
  [3, 1],
  [0, 1],
  [1, 1],
  [2, 6],
  [1, 5],
  [3, 8],
  [2, 5],
  [3, 1],
  [0, 1],
  [1, 1],
  [2, 6],
  [1, 5],
  [3, 1],
  [2, 11],
  [3, 1],
  [0, 1],
  [1, 12],
  [3, 8],
  [2, 5],
  [3, 1],
  [0, 1],
  [1, 20],
  [3, 1],
  [2, 5],
  [3, 1],
  [0, 1],
  [1, 20],
  [3, 1],
  [2, 5],
  [3, 1],
  [0, 1],
  [1, 1],
  [2, 6],
  [1, 13],
  [3, 1],
  [2, 5],
  [3, 1],
  [0, 1],
  [1, 1],
  [2, 6],
  [1, 1],
  [3, 7],
  [1, 5],
  [3, 1],
  [2, 5],
  [3, 1],
  [0, 1],
  [1, 1],
  [2, 6],
  [1, 1],
  [3, 1],
  [2, 6],
  [3, 5],
  [2, 6],
  [3, 1],
  [0, 1],
  [1, 8],
  [3, 1],
  [2, 15],
  [3, 2],
  [0, 1],
  [1, 9],
  [3, 15],
];

let line = "";
for (const [i, len] of runLengthEncoded) {
  if (!i) {
    console.log(line);
    line = "";
  } else {
    const char = one[i];
    line += char.repeat(len);
  }
}
console.log(line);
