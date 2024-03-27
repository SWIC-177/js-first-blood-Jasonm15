const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = 0;

while (index < numbers.length) {
  const number = numbers[index];
  if (number % 2 === 0) {
    console.log(number);
  }
  index += 1;
}
