function createIncrementer(increment) {
  return function (score) {
    return score + increment;
  };
}

const incrementByThree = createIncrementer(3);
console.log(incrementByThree(10));
