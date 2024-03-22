const name = "Jason";
const age = 18;

function verifyAdulthood(name, age) {
  if (age >= 18) {
    return `Welcome, ${name}!`;
  }
  return `You are not old enough to enter, ${name}.`;
}

const message = verifyAdulthood(name, age);

console.log(message);
