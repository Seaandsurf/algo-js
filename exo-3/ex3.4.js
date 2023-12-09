let taba = [1,2,3,4,5];
let tabb = [100,101,102];

let min1 = taba[0];
let max1 = taba[0];

let min2 = tabb[0];
let max2 = tabb[0];

console.log(taba);
console.log(tabb);

for (let i = 1; i < taba.length; i++) {
  if (taba[i] < min1) {
    min1 = taba[i];
  }
  if (taba[i] > max1) {
    max1 = taba[i];
  }
}
console.log(`Pour le premier tableau, le minimum est ${min1} et le maximum est ${max1}`);


for (let i = 1; i < tabb.length; i++) {
  if (tabb[i] < min2) {
    min2 = tabb[i];
  }
  if (tabb[i] > max2) {
    max2 = tabb[i];
  }
}
console.log(`Pour le deuxieme tableau, le minimum est ${min2} et le maximum est ${max2}`);