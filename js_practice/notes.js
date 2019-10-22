// Log to console
console.log('Hello World');

const address = {
  city: 'Boston',
  state: 'MI'
};

const today = new Date();

// type conversion

let val;

// Numbers to Strings
val = String(5);
val = String(4 + 4);
val = String(true);
val = (5).toString();

// Strings to Numbers
val = Number('5');
val = Number('hello'); // NaN
val = Number([1, 2, 4]); // NaN

val = parseInt('100.30');
val = parseFloat('100.30');

console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed());

// Type coercion
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

// Math Object

const num1 = 100;
const num2 = 150;

let sal;
sal = num1 + num2;
sal = Math.PI;
sal = Math.E;
sal = Math.round(2.4); // 2
sal = Math.ceil(2.4); // 3
sal = Math.floor(2.8); // 2
sal = Math.abs(-3);
sal = Math.pow(8, 2); // 64
sal = Math.min(2, 33, 4, 1, 55, 6);
sal = Math.floor(Math.random() * 20 + 1); // 1 - 20 with no decimals

console.log(val);

// Dates and Times

val = new Date();

const birthday = new Date('9-10-1981');
let today = val;

// get and set operations
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();

val = today.getTime(); // Jan 1, 1970

birthday.setMonth(2);

birthday.setDate(12);

// switch case

const color = 'red';

switch (color) {
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    color1 = 'Blue';
    break;
}

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  default:
    day = 'Sunday';
    break;
}

const todo = {
  item: '',
  add(item) {
    console.log(`Add todo...${item}`);
  }
};
todo.add('color');

let i = 0;
while (i < 4) {
  console.log('i' + i);
  i++;
}

do {
  console.log('Number');
  i++;
} while (i < 10);

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let j = 0; j < cars.length; j++) {
  console.log(cars[j]);
}

cars.forEach(car => {
  console.log('car', car);
});

cars.map(car => {
  return { car: 'Name' };
});

let header = document.getElementById('task-title');

console.log(header.id);
console.log(header.className);
header.style.padding = '5px';
header.style.color = 'red';

header.textContent = 'Task List';
header.innerText = 'My Task';
header.innerHTML = '<span style="color:red">Task List</span>';

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';

document.querySelector('ul li').style.color = 'blue';

const items = document.getElementsByClassName('collection-item');

console.log(items[0]);
items[1].style.color = 'red';
items[3].textContent = 'Hello';

const list = document.querySelector('ul');

val = list.childNodes

// Get Children
val = list.children;

