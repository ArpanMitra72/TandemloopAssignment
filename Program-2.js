function makeOddSeries(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(2 * i + 1);
  }
  console.log(result.join(", "));
}

makeOddSeries(4);
