// ? what does the function below return?

// it returns undefined
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num)
  return num;
}



// change the function above to return a value
let timessix = 15 * myNumberFunction();
console.log(timessix);


// Short Circuiting
// ! the console.log will not print
function shortCircuitFunction() {
  return "Zap! - Short Circuited!";
  console.log(
    "This will never print because it is after the return statement."
  );
}

// ? will the following function short circuit?
let height = 100;
function checkCircusRides() {
  if (height < 48) {
    return console.log("Take a ride on the carousel!");
  }
  if (height <= 60 && height >= 48) {
    return console.log("Try the bumper cars!");
  }
  console.log("Enjoy the roller coaster!");
}

checkCircusRides();
// change the function above to use short circuiting
