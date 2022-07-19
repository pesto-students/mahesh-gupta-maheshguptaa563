let n = 3;
let trust = [
  [1, 3],
  [2, 3],
];
function findJudge(n, trust) {
  const Trusted = new Array(n + 1).fill(0);
  for (let [i, j] of trust) {
    Trusted[i] -= 1;
    Trusted[j] += 1;
  }
  for (let i = 1; i < Trusted.length; i++) {
    if (n - 1 === Trusted[i]) {
      return i;
    }
  }
  return -1;
}
console.log(findJudge(n, trust));
