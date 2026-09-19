// Problem - 11

const sumArray = (arr) => {
  return arr.reduce((accumulator, current) => accumulator + current, 0);
};
console.log('Problem - 11 :',sumArray([1,2,3,4,5,6,7,8,9]))