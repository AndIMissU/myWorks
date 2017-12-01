var arr = [2,4,5,6,8,10];
// const newArr = arr.filter(item => {
//     return item>5;
// });

// function
// console.log(newArr);
function filterLessThanFive(item) {
    return item > 5;
}
function filterOld(item) {
    return (item%2) != 0;
}
function filter(arr, testFunction){
    var filteredArr = [];
    for (i in arr) {
        if(testFunction(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
console.log(filter(arr,filterOld));