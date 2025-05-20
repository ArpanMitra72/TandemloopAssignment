function generateOddSeries(n) {
  let count = n % 2 === 0 ? n - 1 : n;

  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }
  console.log(result.join(", "));
}

generateOddSeries(2);
generateOddSeries(5);
