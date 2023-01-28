// var arr = [1, 2,4];
// console.log(arr);

//reduce() example

let arr = [1, 2, 3];

let result = arr.reduce((acc, value) => {
    acc = acc + value;
    return acc
}, 0);

console.log(result);

//using filter() method
let ar = [3, 4, 15, 19, 18, 9, 6];
let filterResult = ar.filter((item) => {
    return item % 3 == 0;
});

console.log(filterResult);

//reduce()
let result_reduce = ar.reduce((acc, value) => {
        acc = acc + value;
        return acc;
}, 0);

console.log(result_reduce);
