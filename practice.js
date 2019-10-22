
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  return kittens.concat(name);
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(-1);
}

function destructivelyDeleteFromObjectByKey(object, prop) {
  delete object[prop];
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, { [key]: value });
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  let res = Object.assign({}, object);
  delete res[key];
  return res;
}
function destructivelyDeleteFromObjectByKey(object, prop) {
  delete object[prop];
}

let count = 100;
while (count > 0){
  console.log('yes');
  --count;
}

do {

} while ();

function theBeatlesPlay(arrM, arrI){
  var empArr = [];
  for(i=0; i < arrM.length; i++){
    str = `"${arrM[i]} plays ${arrI[i]}"`;
    empArr.push(str)
  }
  return empArr
}

function johnLennonFacts(factsArr){
  let count = 0;

  while(count < factsArr.length){
    factsArr[count].push('!!!');
    ++count;
  }

}

function iLoveTheBeatles(num){
  empArr = [];
  do{
    empArr.push('I love the Beatles!')
    ++num;
  }while (num < 15);
  return empArr
}

function takeANumber(currentLine, name){
  currentLine.push(name);
  let place = currentLine.indexOf(name) + 1
  return `Welcome ${name}, you are number ${place} in line.`
}

function nowServing(currentLine){
  if(currentLine){
    return currentLine[0];
  }else{
    return 'The line is currently empty.'
  }
}

function currentLine(line){
  cur = []
  for(var i = 0; i < line.length; i++){
    cur.push(Number(i+1) + '. ' + line[i]);
  }
  for (var i = 0; i < cur.length; i++){
    return `The line currently is: ${cur[i]}`
  }
}

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  let value = Math.floor(Math.random() * 100)
  let obj = {'itemName': item, 'itemPrice': value}
  cart.push(obj)
  return `${obj['itemName']} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }else if(cart.length === 1){
    let names = []
    let prices = []
    let str = '';
    for(var i = 0; i < cart.length; i++){
      names.push(cart[i]["itemName"])
      prices.push(cart[i]["itemPrice"])
    }
    for(var j = 0; j<names.length; j++){
       str +=`${names[j]} at $${prices[j]}.`
    }
    return "In your cart, you have " + str

  }else if(cart.length >= 2){
    let names = []
    let prices = []
    let str = '';
    for(var l = 0; l < cart.length; l++){
      names.push(cart[l]["itemName"])
      prices.push(cart[l]["itemPrice"])
    }
    for(var k = 0; k<names.length - 1; k++){
       str +=`${names[k]} at $${prices[k]}, `
    }
    let lastStr = `and ${names[names.length -1]} at $${prices[prices.length -1]}.`
    return "In your cart, you have " + str + lastStr
  }
}

function total() {
  // write your code here
  var sum = 0;
  for (var i=0; i < cart.length; i++){
    sum += cart[i]["itemPrice"];
  }
  return sum
}

function removeFromCart(item){
  let found = cart.find(function(itemObject) {
    return itemObject["itemName"] === item;
  });
  if(found){
    cart.splice(cart.indexOf(found), 1)
  } else {
    return 'That item is not in your cart.'
  }

}

function placeOrder(cardNumber=1) {
  // write your code here
  const cartSum = total();
  if(cardNumber === 1){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    let count = 0;
    while(count < cart.length){
      cart.pop();
      count++;
    }
    return `Your total cost is $${cartSum}, which will be charged to the card ${cardNumber}.`
  }

}
/*

Notes about the DOM

Window
- Document (.all, .contentType, .URL, .getElementsByTagName(""), .querySelectorAll(""))
- - appendChild, removeChild, addEventListener, style
- - element (DOM node)
- - - element.attributes, removeAttribute,

*/

newArr = [];
for(let i = 0; i < obj[key]; i++){

}

const person = {
  name: "Awesome Name",
  occupation: {
    title: "Senior Manager of Awesome",
    yearsHeld: 2
  },
  pets: [{
    kind: "dog",
    name: "Fiona"
  }, {
    kind: "cat",
    name: "Ralph"
  }]
}

// person.pets[1].name
// person.occupation.yearsHeld

const collections = [1, [2, [4, [5, [6]], 3]]];

//breadth-first search! (main algorithms)
function find(array, criteriaFn){
  let current = array;
  let next = [];

  while (current) {
    if (criteriaFn(current)) {
      return current
    }

    if (Array.isArray(current)){
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }
  return null
}

n => n > 5;
n => (typeof n === 'number' && n > 5)

function seatsInTheater(nCols, nRows, col, row) {
  //coding and coding..
  let totalSeats;
  if(nCols === nRows && col === row){
    totalSeats = 0;
    return totalSeats;
  } else {
    totalSeats = nCols * nRows;
  let cols = 1;
  let columnsLeft = nCols
  while(cols < col){
    columnsLeft--
    totalSeats -= nRows
    cols++
  }
  totalSeats--
  let rowsBehindMe = (nRows - row);
  return rowsBehindMe * columnsLeft;
  }

}
function seatsInTheater(nCols, nRows, col, row) {
  return (nCols-col+1) * (nRows - row);
}
//seatsInTheater(16,11,5,3)
//seatsInTheater(13,6,8,3)
//seatsInTheater(1,1,1,1)
// (nCols, nRows, col, row)
//seatsInTheater(60,100,60,1)

var arr1 = [5, 10, 15, 20];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [1, 10, 15, 5, 20];

let result = [];
arr1.forEach(function(element){
  console.log(element)
  if(arr2.includes(element)){
    console.log(element)
    result.push(element)
  }
})

function chessBoard(width){
	let newWidth = String(width)
    while(newWidth.length < width){
    	newWidth = '|' + '£' + '|';
    }

  return newWidth;
}

chessBoard(8)

function countPositivesSumNegatives(input) {
  let empty = [];
  if(input == [] || input == null){
    return empty;
  }else{
    let sum = 0;
    let newArr = [];
    let count = 0;
    for(var i = 0; i < input.length; i++){
      if(input[i] > 0){
        count++
      }else if (input[i] < 0){
        sum += input[i]
      }else if (input[i] === 0){
        return empty
      }
    }
    newArr.push(count);
    newArr.push(sum);

    return newArr;
    }
}

function zeroPad( number, width ){
  let string = String(number);
  while( string.length < width ){
    string = '0' + string;
  }
  return string;
}

zeroPad(8, 8)

function chessBoard( number, width ){
	let string = String(number);
  let count = 1
    while( count < width ){
    	string = '|' + '£' + '|';
      console.log('\n' + string)
      count++
    }

  return string;
}

chessBoard(1, 8)

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0)
    return [];

  var positive = 0;
  var negative = 0;

  for (var i=0, l=input.length; i<l; ++i)
  {
    if (input[i] > 0)
      ++ positive;
    else
      negative += input[i];
  }

  return [positive, negative];
}

function findOdd(A) {
  var map = new Map();
  for (var i = 0; i < A.length; i++) {
    var num = map.get(A[i]);
    if (typeof num === 'undefined') {
      map.set(A[i], 1);
    } else {
      map.set(A[i], num + 1);
    }
  }
  for (let [key, val] of map) {
    if (val % 2 > 0) {
      return key;
    }
  }
  return null;
}

//////////////////////////////
if(numbers.length <= 2){// 1
  sum += numbers.reduce(add, 0)
  console.log(sum)
} else {//2
    for (var i = 0; i < numbers.length; i++){//3
      sum = 0;
      console.log('***********************')
      console.log(' i is : ' + numbers[i])
      console.log('***********************')
        for (var j = 0; j < numbers.length; j++){//4
          console.log(' j is : ' + numbers[j])
          if(numbers[i] < numbers[j] && numbers[i] !== numbers[j]){//5
            console.log('J is ' + numbers[j]+ ' and I am smaller at : ' + numbers[i])
            sum++
            let greater = sum;
            console.log('Sum is now: ' + sum)
            if(greater === numbers.length - 1 || greater === numbers.length - 2){//6
              if(!count.includes(numbers[i])){//7
                count.push(numbers[i])
                console.log('count looks like this now : ' + count)
              }//7
            }//6
          }//5

        }//4

    }//3
  }

  /*******************  Understanding Bubble Sorting ****************************/

  function bubbleSort(arr){
    var len = arr.length;
    for (var i=len -1; i >=0; i--){
      console.log('**************** New Loop ***************')
      console.log('arr is now: ' + arr)
      console.log('i now points to : ' + arr[i])
      for(var j = 1; j<=i; j++){
        console.log('j is NOW at index: ' + j + ' which is ' + arr[j])
        console.log('j checks to see if the one before it is bigger, if so, it swaps positions')
        if(arr[j-1]>arr[j]){
           console.log('at index ' + j + ', which is, ' + arr[j-1] + ' is greater than arr[j], which is, ' + arr[j])
            var biggest = arr[j-1];
            console.log('biggest becomes: ' + biggest)
            arr[j-1] = arr[j];
            console.log('arr[j-1] becomes: ' + arr[j-1] + ' arr now looks like: ' + arr )
            arr[j] = biggest;
            console.log('arr[j] becomes: ' + arr[j] + ' arr now looks like: ' + arr)
         }
      }
    }
    return arr;
 }
 let numbers = [52, 76, 14, 12, 4]
 bubbleSort(numbers)

//  function getMiddle(s){
//   //Code goes here!
//   newStr = '';
//   for( var i = 0; i < s.length; i++){//1
//     if(str.length % 2 == 0){//2
//       newStr += (s[s.length/2] + s[(s.length/2) - 1])
//     } else {
//       newStr += (s[Math.floor(s.length/2)]
//     }
//     return newStr;
//   }

function sortArray(array) {
  // Return a sorted array.
  if(typeof array === 'undefined'){
    return array;
  }else{
    for( var i = arr.length-1; i >=0; i--){
    for( var j = 1; j < arr.length; j++){
      if(arr[j-1] > arr[j] && arr[j] % 2 != 0 && arr[j] !== 0 || arr[j] == 1){
        let bigOdd = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = bigOdd;
        }
      }
    }
  }
}

function isAnagram(word1, word2){
  let anagram = False;
  let count = 0;
  if( word1 == word2 ){
    return False;
  }
  if (word1.length == word2.length ){
    for( var letter1 of word1 ){
      if( word1.match(/letter1/g)== word2.match(/letter1/g)){
        if( word2.includes(letter1) ){
          count++;
        }
      }
    }
    if (count == word1.length){
      anagram = true;
    } else {
      return anagram;
    }
  }
  return anagram;

}

function findAnagrams(lst){
  anagrams = [];

  for(var word1 of lst ){
    for( var word2 of lst ){
      if( is_anagram(word1, word2 )){
        if(!anagrams.includes(word1)){
          anagrams.push(word1)
        }
      }
    }
  }
  return anagrams;
}
