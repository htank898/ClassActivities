// bracket and dot notation
const key = "1";
const obj = {
  key: "the key is 'key'",
  1: "the key is 1",
};

// what will the following lines print?
console.log(obj[key]); // "the key is 1"
console.log(obj.key); // "the key is 'key'"
console.log(obj["key"]); // "the key is key"

// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.
const JoshHawley = {
  Committe: "Lord Knows",
  NetWorth: "Don't Know",
  District: "GetThatLater",
  Collection: [1, 2, 3],
  RecentTrade: "PokemonCards",
};
// Access a value in the "collection" property

const Collection_JoshHawley = JoshHawley.Collection[1];
console.log(Collection_JoshHawley);

// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

const result = obj.method();
console.log(result);
// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "John Wick",
  number: 10,
  color: "Blue"
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

//It will print 5 lines

// Key is: 0 and value is: undefined
// Key is: 1 and value is: the key is 1
// Key is: 2 and value is: undefined
// Key is: 3 and value is: undefined
// Key is: 4 and value is: undefined


// Use a template literal to print a sentence about your favorite things
console.log(`My favorite movie is "${obj["favorites"].movie}", my favorite number is ${obj["favorites"].number}, and my favorite color is "${obj["favorites"].color}".`);

// Access the values "b", 4, and 6 from obj.list


console.log(obj.list[1]); // "b"
console.log(obj.list[4][1]); // 4
console.log(obj.list[5].f); // 6
