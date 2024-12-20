/////////////
// Classes //
/////////////

class Student {
  constructor(name, gpa, location) {
    this.name = name;
    this.gpa = gpa;
    this.location = location;
  }
}

// let john = new Student('John', 4.0, 'Pittsburgh');
// let max = new Student('Max', 3.5, 'Idaho');
// console.log(john, max);

class Animal {
  constructor(eyes, legs, isAwake, isMoving) {
    this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
  }
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
  // Overriding the .toString() method that the Animal class has inherited from the Object class by default
  toString(animal = 'Animal') {

    console.log(`This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving. It speaks ${this.speak()}`);
  }
}

//const cat1 = new Animal(2, 4, true, false);
// const cat2 = new Animal(2, 4, false, false);
// const dog1 = new Animal(2, 4, true, true);
// const cow1 = new Animal(2, 4, true, false);
// console.log(cat1);

// console.log(cat1);
/////////////////
// Inheritance //
/////////////////

class Cat extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Meow...");
  }
  toString() {
    super.toString("Cat");
  }
}

const cat1 = new Cat ("Orange", true, false);
console.log(cat1.toString());






class Dog extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Woof!");
  }
  toString() {
    super.toString("Dog");
  }
}

class Cow extends Animal {
  constructor(hair, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.hair = hair;
  }
  speak() {
    super.speak("Moo.");
  }
  toString() {
    super.toString("Cow");
  }
}

// const cat1 = new Cat("Orange", true, false);
// const cat2 = new Cat("Black and White", false, false);
// const dog1 = new Dog("Gold", true, true);
// const cow1 = new Cow("Brown", true, false);
// cat1.speak(); cat1.toString();
// dog1.speak(); dog1.toString();
// cow1.speak(); cow1.toString();

// Exercise
class Human extends Animal {
  constructor(isAwake, isMoving, fullName, age, occupation) {
    super(2, 2, isAwake, isMoving);
    this.fullName = fullName;
    this.age = age;
    this.occupation = occupation;
  }
  introduce() {
    console.log(`Hello, my name is ${this.fullName}, and I'm a ${this.age}-year-old ${this.occupation}!`);
  }
}

// const human1 = new Human(true, true, 'James Bond', 30, 'Developer')
// human1.introduce()