const people = [
  {
    name: "John",
    age: 17,
  },
  {
    name: "Jane",
    age: 20,
  },
  {
    name: "Mary",
    age: 25,
  },
  {
    name: "Peter",
    age: 30,
  },
  {
    name: "Paul",
    age: 35,
  },
];

function verifyAdulthood(personName, personAge) {
  if (personAge >= 18) return `Welcome, ${personName}!`;

  return `You are not old enough to enter, ${personName}.`;
}

let i = 0; // Starting index
while (i < people.length) {
  const person = people[i]; // Get the current person
  const message = verifyAdulthood(person.name, person.age); // Call verifyAdulthood for the current person
  console.log(message); // Log the message to the console
  i += 1; // Move to the next person in the array
}
