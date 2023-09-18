// print the function below
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num);
}

console.log(myNumberFunction);
// now, invoke the myNumberFunction function
myNumberFunction();
// print just the function of console.log (no invocation)

 let i = myNumberFunction();

 console.log(i);


 function myFunction() {
  return "This is my function";

 }
 myFunction();
"This is myFunction's return"
 let returnedVariable = myFunction();
 console.log(returnedVariable);
