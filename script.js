let number = 10; // You can take input number from user using prompt method
let sum = 0;
// It calculates the sum of odd numbers between 1 to number
for (let i = 0; i <= number; i++) {
  if (i % 2 !== 0) {
    sum = sum + i;
  }
}

console.log(sum);
