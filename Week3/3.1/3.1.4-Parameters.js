// Named Parameters
// write a function that takes two named parameters:

function myFunction(param1, param2) {
  console.log(param1, param2);

  return param1 + param2;
}
// print each named parameter,





// then return the parameters added together
// invoke the function and pass in two numbers
myFunction(1,2);
// invoke the function and pass in more than two numbers
myFunction(1,2,3);
// invoke the function and pass in only one number
myFunction(1);
// change the function to set default values for the parameters
function myNewFunction(param1, param2 = "a") {
  console.log(param1, param2);

  return param1 + param2;
}
myNewFunction(1);
// again, invoke the function and pass in only one number
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
// again, invoke the function and pass in more than two numbers
