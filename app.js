function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
// function printResult(num: number): undefined {
//   console.log("Result: " + num);
//   return;
// }
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));
addAndHandle(15, 30, function (result) {
    console.log(result);
    return result;
});
