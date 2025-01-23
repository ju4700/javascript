//ES6 syntax for modern JavaScript

const greet = (name) => {
    return `Hello, ${name}!`; //Like the f string in python!
}

console.log(greet("World"));

const forceEquation = (mass, acceleration) => {
    return mass * acceleration;
}

const forceEquation2 = (mass, acceleration) => mass * acceleration;

console.log(forceEquation(10, 5));
console.log(forceEquation2(10, 5));

for (let i = 99; i > 0; i--) {
    console.log(`${i} bottles of pop on the wall`);
    console.log(`${i} bottles of pop`);
    console.log("take one down, pass it around");
    console.log(`${i-1} bottles of pop on the wall`)
    console.log();
  }
  