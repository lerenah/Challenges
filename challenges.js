/** Decided to keep tabs on some of the challenges I've been working on solving.  This is a complete list of the CSX course I took including the challenge descriptions and my approach to solving them. */

// CALLBACKS AND HIGHER ORDER FUNCTION CHALLENGES IN JAVASCRIPT

/**Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array.  */

function union(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (!newArr.includes(arr[i][j])) {
        newArr.push(arr[i][j]);
      }
    }
  }
  return newArr;
}

/* Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs.*/

function intersection(array) {
  let result = [];

  var currentArr = array[0];
  array = array.slice(1);
  var garbage = [];
  var unique = [];

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (currentArr.includes(array[i][j])) {
        result.push(array[i][j]);
      } else {
        garbage.push(array[i][j]);
      }
    }
    currentArr = array[i];
  }
  for (var i = 0; i < result.length; i++) {
    var count = 0;
    for (var j = result.length - 1; j >= 0; j--) {
      if (result[i] === result[j]) {
        count++;
        if (count === array.length && !unique.includes(result[i])) {
          unique.push(result[i]);
        }
      }
    }
  }
  return unique;
}

/** Construct your own reduce function that accepts an array, a callback, and an initial value and returns a single value. */

function reduce(array, callback, n = array[0]) {
  var acc = n;
  var curr = acc;
  for (var i = 0; i < array.length; i++) {
    curr = callback(array[i], acc);
    acc = curr;
  }
  return curr;
}

/** Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method. &&  Now let's rebuild map from challenge 1. This time instead of using a for loop, you're going to use the forEach we just created.*/

function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
  }
}

function map(array, callback) {
  forEach(array, callback);
  return array;
}

/**Create a function subtractTwo that accepts a number and returns that number minus 2.

Then create a function map that takes two inputs -

an array of numbers (a list of numbers)
a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Please do not use the native map or forEach method. */

function map(array, callback) {
  const newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(subtractTwo(array[i]));
  }
  return newArr;
}

function subtractTwo(num) {
  return num - 2;
}

/**Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.

The body of the pluralize function should employ a single for loop that pluralizes each string in the input array. */

function pluralize(array) {
  let newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(array[i] + "s");
  }
  return newArr;
}

/** Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key. */

function multiMap(arrVals, arrCalls) {
  var newObj = {};
  for (var i = 0; i < arrVals.length; i++) {
    newObj[arrVals[i]] = [];
    for (var j = 0; j < arrCalls.length; j++) {
      let value = arrCalls[j](arrVals[i]);
      newObj[arrVals[i]].push(value);
    }
  }
  return newObj;
}

/** Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value. */

function objOfMatches(arr1, arr2, callback) {
  var newObj = {};
  for (var i = 0; i < arr1.length; i++) {
    if (callback(arr1[i]) === arr2[i]) {
      newObj[arr1[i]] = arr2[i];
    }
  }
  return newObj;
}

/** Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false. */

function majority(array, callback) {
  let yes = 0;
  let no = 0;
  array.forEach(function(el) {
    var bool = callback(el);
    if (bool === true) {
      yes++;
    } else {
      no++;
    }
  });
  if (yes === no) {
    return false;
  } else if (yes > no) {
    return true;
  }
}

/** Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second. */

function prioritize(array, callback) {
  let newArr = [];
  let falsey = [];
  for (var i = 0; i < array.length; i++) {
    var result = callback(array[i]);
    if (result === true) {
      newArr.push(array[i]);
    } else {
      falsey.push(array[i]);
    }
  }
  return newArr.concat(falsey);
}

/** Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned. */

function countBy(arr, callback) {
  var newObj = {};
  var count = 1;
  for (var i = 0; i < arr.length; i++) {
    if (newObj[callback(arr[i])]) {
      newObj[callback(arr[i])] = count;
      count++;
    } else {
      newObj[callback(arr[i])] = count;
    }
  }
  return newObj;
}

/** Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback. */

function goodKeys(obj, callback) {
  let newArr = [];
  for (var prop in obj) {
    let result = callback(obj[prop]);
    if (result === true) {
      newArr.push(prop);
    }
  }
  return newArr;
}

/** PRACTICING C L O S U R E S ************************/

/** Create a function createFunction that creates and returns a function. When that newly created function is called, it should return the string 'hello world'. */

function createFunction() {
  let greet = "hello world";

  return function() {
    return greet;
  };
}

/** Create a function createFunctionWithInput that accepts one input and returns a function. When that created function is called, it should return the input that was passed to createFunctionWithInput when it was created. */

//create a function createFunctionWithInput
function createFunctionWithInput(arg) {
  // pass in a parameter
  // new function should return the arg
  function newFunction() {
    return arg;
  }
  // returns a function
  return newFunction;
}

/** Now we are going to create a function addByX that returns a function that will add an input by x. */

function addByX(n) {
  // returns a function that adds n
  return function(x) {
    return n + x;
  };
}

/** Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter. */

function after(n, callback) {
  // callback needs to be invoked n times before returning a value
  // set a flag to keep track of callback invocations
  let count = 0;
  return args => {
    count++;
    if (count >= n) {
      return callback(args);
    }
  };
}

/** Write a function delay that accepts two arguments, a callback and the wait time in milliseconds. Delay should return a function that, when invoked waits for the specified amount of time before executing. HINT - research setTimeout();
 */

function delay(callback, ms) {
  //let time = Date.now();
  return () => {
    // executes after ms is true;
    return setTimeout(callback, ms);
  };
}

/** Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values */

function saveOutput(callback, pw) {
  let newObj = {};
  return function(str) {
    let result;
    if (typeof str == "string") {
      return newObj;
    }
    if (!newObj[str]) {
      result = callback(str);
      newObj[str] = result;
      return result;
    }
  };
}

/**  Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth. */

function cycleIterator(arry) {
  let cycleArry = [];
  let currentItem = arry.length;
  let cycle = function cycle() {
    return function() {
      if (!arry.length) {
        arry = cycleArry.slice();
        let callAgain = cycleIterator(arry);
        return callAgain();
      } else {
        currentItem--;
        let current = arry.shift();
        cycleArry.push(current);
        return current;
      }
    };
  };
  return cycle();
}

/** Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function. */

function defineFirstArg(cb, outer) {
  return function(...inner) {
    return cb(outer, ...inner);
  };
}

/** Create a function dateStamp that accepts a function and returns a function. The returned function will accept whatever arguments the passed-in function accepts and return an object with a date key whose value is today's date (not including the time) represented as a human-readable string (see the Date object for conversion methods), and an output key that contains the result from invoking the passed-in function. */

function dateStamp(cb) {
  return (...args) => {
    return { date: new Date().toDateString(), output: cb(...args) };
  };
}

/** Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair). */

function censor() {
  var newObj = {};
  return (str1, str2 = "") => {
    if (str1 && str2) {
      newObj[str1] = str2;
    } else {
      for (var el in newObj) {
        str1 = str1.replace(el, newObj[el]);
      }
      return str1;
    }
  };
}

// Moving on to R E C U R S I O N  *************

/** Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'. */

var count = 0;
function repeater(char) {
  if (count === 4) {
    count = 0;
    return char;
  } else {
    count++;
    return (char += repeater(char));
  }
}

/** Write a function that returns the factorial of a number.

EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24. */

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

/** Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.
 */

function pow(base, exponent) {
  if (exponent === 1) {
    return base;
  } else {
    return base * pow(base, exponent - 1);
  }
}

/** Get the length of an array using recursion without accessing its length property. */

function getLength(array, num = 0) {
  if (array.pop() === undefined) return num;
  return getLength(array, num + 1);
}

/** Write a function that takes an array of functions and a number that will be piped through all those functions. The input number passes through the first function, whose output is passed as input to the second function, whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array. */

function flow(input, funcArray, num = 0) {
  let result = funcArray[num](input);
  if (num === funcArray.length - 1) return result;
  return flow(
    result,
    funcArray,
    num + 1
  );
}

// Moving on to A S Y N C H R O N O U S JAVASCRIPT ******************

/** In this challenge we are going to simulate an AJAX call to get information from a server. This is not a real AJAX call, but the asynchonicity is similar.

The function ajaxSimulate takes an id and a callback function as input. Modify the function so that after the database array, it will set a timer that will pass the element of database whose index matches id to the callback function after 0 ms.

Create a second function storeData (outside of ajaxSimulate) that takes data as input and assigns it to the dataReceived variable already defined.

Invoke the ajaxSimulate function with an id of 1 and the storeData function as the callback. Immediately after, log to the console the value of dataReceived. What do you expect it to be?

Without changing anything else, copy-paste the console.log statement somewhere where it will log with the info we need. */

var dataReceived;
function ajaxSimulate(id, callback) {
  const database = ["Aaron", "Barbara", "Chris"];
  // Add code here
  setTimeout(() => callback(database[id]), 0);
}
// Also add code here
function storeData(data) {
  dataReceived = data;
  console.log(dataReceived);
}

ajaxSimulate(1, storeData);

/** Write a function called limitedInterval that accepts as arguments in this order -

callback function
wait time in milliseconds
limit time in milliseconds.
limitedInterval should run the callback once every wait milliseconds, up to limit milliseconds, and then stop. */

function limitedInterval(callback, wait, limit) {
  while (wait < limit) {
    setTimeout(() => {
      callback();
    }, wait);
    wait += 100;
  }
}

/** Write a function called runInOrder that accepts as arguments in this order -

an array of functions
an array of numbers representing times in milliseconds
runInOrder should execute the functions in order, with the corresponding numbers in milliseconds being the time to wait from the previous invocation.  */

function runInOrder(arrFuncs, arrTimes) {
  let promise = new Promise((resolve, reject) => {
    arrFuncs.forEach((func, index) => {
      setTimeout(() => {
        resolve, arrTimes[index], func();
      });
    });
  });
}

// Moving on to O B J E C T - O R I E N T E D - P R O G R A M M I N G JAVASCRIPT ******************

/** Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
Create an empty object
Add a name property to the newly created object with its value being the name argument passed into the function
Add an age property to the newly created object with its value being the "age" argument passed into the function
Return the object */

function makePerson(name, age) {
  // add code here
  let newObj = {};
  newObj["name"] = name;
  newObj["age"] = age;
  return newObj;
}

/** Inside personStore object, create a property greet where the value is a function that logs "hello". */

const personStore = {
  // add code here
  greet: () => {
    console.log("hello");
  }
};

/** Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object. */

const personStore = {
  greet: function() {
    console.log("hello");
  }
};

function personFromPersonStore(name, age) {
  // add code here
  var person = Object.create(personStore);
  person.name = name;
  person.age = age;
  return person;
}

/** Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]". */

const personStore = {
  greet: function() {
    console.log("hello");
  }
};

function personFromPersonStore(name, age) {
  const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  return person;
}

const sandra = personFromPersonStore("Sandra", 26);

// add code here
personStore.introduce = function() {
  return console.log("Hi, my name is " + this.name);
};

/** Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string "hello". */

function PersonConstructor() {
  // add code here
  this.greet = () => {
    console.log("hello");
  };
}

/** Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method. */

function PersonConstructor() {
  this.greet = function() {
    console.log("hello");
  };
}

function personFromConstructor(name, age) {
  // add code here
  var person = new PersonConstructor();
  person.name = name;
  person.age = age;
  return person;
}

/** Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]". */

function PersonConstructor() {
  this.greet = function() {
    console.log("hello");
  };
}

function personFromConstructor(name, age) {
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;
  return person;
}

const mike = personFromConstructor("Mike", 30);

// add code here
PersonConstructor.prototype.introduce = function() {
  return console.log("Hi, my name is " + this.name);
};

/** Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string "hello". */

class PersonClass {
  constructor(name) {
    // add code here
    this.name = name;
  }

  // add code here
  greet() {
    return console.log("hello");
  }
}

/** Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string "Hello World, my name is [name]". */

class PersonClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("hello");
  }
}

// add code here
class DeveloperClass extends PersonClass {
  introduce() {
    console.log("Hello World, my name is " + this.name);
  }
}
const thai = new DeveloperClass("Thai", 32);
