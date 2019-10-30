function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date( dob );
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date( diff );
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const lerena = new Person('Lerena', '1-1-1986');
const sarah = new Person( 'Sarah', '4-4-1941');


// String
const name1 = 'Jeff';

sarah.isSingle = 'yes';


// Prototypes
class Employee {
  constructor( first, last ) {
    this.first = first;
    this.last = last;
  }
  greeting() {
    return `Hello there ${this.first} ${this.last}`
  }
}

const mary = new Employee('Mary', 'Williams')
