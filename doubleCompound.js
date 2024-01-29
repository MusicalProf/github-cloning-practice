function doubleCompound(amount, days) {
 let sum = 0;
 for (i = 0; i < days; i++) {
  Math.floor((sum += amount + sum));
 }
 return sum;
}

console.log(doubleCompound(0.01, 30));
