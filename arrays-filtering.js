let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  

let filter = numbers.filter((item) => {
  return item % 2 === 0;
});

console.log(filter);