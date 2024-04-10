const people = [
  {
    id: 1,
    name: "John Doe",
    age: 23,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 29,
  },
  {
    id: 3,
    name: "Jim Doe",
    age: 34,
  },
  {
    id: 4,
    name: "Jill Doe",
    age: 45,
  },
  {
    id: 5,
    name: "Jack Doe",
    age: 56,
  },
  {
    id: 6,
    name: "Jenny Doe",
    age: 67,
  },
];

function renameOdds(p) {
  const modifiedArray = [...p]; // Create a new array to store the modified values

  for (let i = 0; i < modifiedArray.length; i += 1) {
    if (modifiedArray[i].id % 2 !== 0) {
      modifiedArray[i].name = "Odd Name"; // Modify the new array instead of the function parameter
    }
  }

  return modifiedArray; // Return the modified array
}

console.log(renameOdds(people));
