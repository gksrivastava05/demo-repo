// var arr = [1, 2,4];
// console.log(arr);

//reduce() example

let arr = [1, 2, 3];

let result = arr.reduce((acc, value) => {
    acc = acc + value;
    return acc
}, 0);

console.log(result);