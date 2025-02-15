function add(a,b) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add(2, 8)); // 3
console.log(add(2, 8, 3, 4, 5)); // 15