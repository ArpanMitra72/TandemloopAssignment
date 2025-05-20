function countMultiples(numbers) {
  const res = {};
  for (let i = 1; i <= 9; i++) {
    res[i] = 0; //initialize the value for key i as 0 in the res object
  }

  for (let i = 1; i <= 9; i++) {
    for (let num of numbers) {
      if (num % i === 0) {
        res[i]++;
      }
    }
  }
  console.log(res);
}

const numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
countMultiples(numbers);
