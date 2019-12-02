const fs = require('fs');

let input = fs.readFileSync('./input.txt').toString();
let modules = input.split('\n').slice(0, -1);
let sum = 0;

modules.forEach((mass, i) => {
    mass = modules[i] = parseInt(mass);
    sum += Math.floor(mass / 3) - 2;
});

console.log(`Part 1, sum of fuel is: ${sum}`);