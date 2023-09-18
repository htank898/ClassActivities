// Array Activity 1
// Create an Array called students that contains the names of 5 students
let students = ["name1", "name2", "name3", "name4", "name5"];
// Use bracket notation to access and print the name of the 4th student in the list, then print the name of the student in the 2nd index
console.log(students[3]);
console.log(students[1]);
// Loop over the students Array to print out each name
for (let i of students) {
  console.log(i);
}

// Array Activity 2
// Create a variable called roster and assign it the value of the string below
let roster = "These are the students in the list ";
// "These are the students in the list: "
// Loop over the students Array again, but this time each iteration of the loop should add the value to the end of the roster string AND a blank space
for (let n of students) {
  roster += n + " ";
}
// After the loop, print roster
console.log(roster);
// The expected output should look like this:
// "These are the students in the list: name1 name2 name3 name4 name5"




// Declare a function called testAverage

//  These are the requirements of the function:
//    Accepts a single parameter that can accept an infinite amount of arguments
//    Inside the function, add the parameters together
//    Divide the sum by the number of parameters that were passed in
//    The function will output the result

function testAverage(...param) {
  let sum = 0;
  for (let nums of param){
    sum += nums;
  }
  return sum/param.length;
}

testAverage();
// Hints: Remember how a rest parameter represents arguments and what methods that can allow us to use
// Invoke testAverage with the following parameters: 92, 71, 85, 83
console.log(testAverage(92, 71, 85, 83));


// Function Activity 2
// NOTE: This function really just contains conditionals. The real purpose of Activity 2 is to practice using the returned value of a function as the argument to another function
// Declare a function called gradeCheck
//  These are the requirements of the function:
//    Accepts a single parameter (we will be passing the returned value of our testAverage function)
//    Inside the function, build the following conditionals:
//    if argument is greater than or equal to 90, print "Your grade is an A, great job!" then output false
//    if argument is greater than or equal to 80 but less than 90, print "Your grade is B, nice job!" then output false
//    if argument is greater than or equal to 70, print "Your grade is a C, extra studying required" then output true
//    if argument is less than 70, print "Uh oh." then output true
// Invoke gradeCheck and pass in testAverage as an argument; testAverage should have the same parameters as before
// NOTE: There are a couple of ways to do this. You could invoke testAverage() inside the argument of gradeCheck:
// Or you could create a variable and assign it to the returned value of testAverage()
// Now invoke gradeCheck, but pass in testAverage as an argument that has different parameters


function gradeCheck(param1); {
  if (param1 >= 90); {
    console.log("Your grade is an A, Gread Job!");
    return false;
  } else
}
