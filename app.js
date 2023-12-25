// function combine(input1: number, input2: number) {
//   const result = input1 + input2;
//   return result;
// }
// const combineAges = combine(30, 26);
// console.log(combineAges);
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 26);
console.log(combineAges);
var combineNames = combine("Max", "Anna");
console.log(combineNames);
