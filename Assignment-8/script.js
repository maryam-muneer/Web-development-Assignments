//Q1. Print numberrs from 1 to 10 using for loop?
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//Q2. Print numberrs from 10 to 1 by using a while loop?
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}
//Q3. Print even numbers from 1 to 20 using for loop?
for (let k = 1; k <= 20; k++) {
    if (k % 2 === 0) {
        console.log(k);
    }
}
//Q4. Print odd numbers from 1 to 15 using while loop?
let m = 1;
while (m <= 15) {
    if (m % 2 !== 0) {
        console.log(m);
    }
    m++;
}
//Q5. Print multiplication table of 5 (i.e., 5 x 1 = 5, 5 x 2 = 10, .. 5 x 10 = 50)?
for (let n = 1; n <= 10; n++) {
    console.log("5 x "+ n + " = " + (5 * n));
}
//Q6. Find the sum of numbers from 1 to 100 using a loop?
let sum = 0;
for (let p = 1; p <= 100; p++) {
  sum += p;
}
console.log("Sum of all numbers is = " + sum);
//Q7. Print all numbers between 1 and 50 that are divisible by 3?
for (let q = 1; q <= 50; q++) {
    if (q % 3 === 0) {
        console.log(q);
    }
}
//Q8. Ask the user for a number and print weather each number from 1 to that number is even or odd?
// (e.g , " 1 is odd", "2 is even", ...)
let userInput = Number(prompt("Enter a number: "));
for (let r = 1; r <= userInput; r++) {
    if (r % 2 === 0) {
        console.log(r + " is even");
    } else {
        console.log(r + " is odd");
    }
}
