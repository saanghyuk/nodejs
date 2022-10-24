// Prototype
// @ts-check


function Person(name){
  this.name = name;
}
Person.prototype.greet = function greet(){
  return `Hi, ${this.name}`
}

function Student(name){
  this.__proto__.constructor(name)
}

Student.prototype.study = function study(){
  return `${this.name} is studying!`
}

Object.setPrototypeOf(Student.prototype, Person.prototype)

const me = new Student('Noel')
console.log(me.greet())
console.log(me.study())
console.log(me instanceof Student) //True
console.log(me instanceof Person) //True

const anotherPerson = new Person('Foo')
console.log(anotherPerson instanceof Student) // False
console.log(me instanceof Person) // True

console.log([] instanceof Array, [] instanceof Object)



// Class

class Person2 {
  constructor(name){
    this.name = name;
  }
  greet(){
    return `Hi, ${this.name}`
  }
}

class Student2 extends Person{
  constructor(name){
    super(name)
  }
  study(){
    return `${this.name} is studying`
  }
}

const me2 = new Student2('Noel')
console.log(me.study())
console.log(me.greet())