const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
const popped1 = nums.pop();
const popped2 = nums.pop();

console.log(popped2);
console.log(nums);
// remove each of the first two items with shift(), saving each item to a variable
const shift1 = nums.shift();
const shift2 = nums.shift();
console.log(shift2);
console.log(nums)
// use push and unshift to add the variables back to the array in numerical order, 0-6
let pushReturn = nums.push(2)
console.log(pushReturn);
console.log(nums);

let unshiftReturn = nums.unshift(-2);
console.log(unshiftReturn);
console.log(nums);