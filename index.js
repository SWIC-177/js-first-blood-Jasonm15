function greet(name) {
  console.log(`Hello, ${name}!`);
}

function sayHello(greetingFunction, name) {
  greetingFunction(name);
}

sayHello(greet, "John");
