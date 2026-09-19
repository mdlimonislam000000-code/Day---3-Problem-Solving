// Problem - 11

const sumArray = (arr) => {
  return arr.reduce((accumulator, current) => accumulator + current, 0);
};
console.log('Problem - 11 :',sumArray([1,2,3,4,5,6,7,8,9]))

// Problem 12 

const findMax = (arr) =>{
    if (arr.length=== 0 ){
        return null ;
    }

    let max = arr[0];
    for ( let i = 1 ; i < arr.length ; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max 
}
console.log('Problem - 12 :',findMax([3, 1, 7, 2, 9]));

// Problem 13 

const removeDuplicates = (arr) =>{
    return [...new Set(arr)];
}
console.log('Problem - 13 :',removeDuplicates([1, 2, 2, 3, 3, 4]));