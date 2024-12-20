class FamilyMember {
    constructor (names, age, relation) {
      this.name = names,
      this.age = age,
      this.relation = relation
      this.createMember = () => {
        console.log(`${this.name} is a Family Memebr, his age is ${this.age} and is a ${this.relation}`);
      }
    }

}

class House {
  constructor (address, size, residents) {
    this.address = address,
    this.size = size,
    this.residents = residents
  }
  addResident = (...resident) => {
    this.residents.push(resident);
  }
}



let Mustafa = new FamilyMember ("Mustafa", 46, "Dad");
let Rasha = new FamilyMember ("Rasha", 42, "Mother");

// console.log(Mustafa.createMember());
// console.log(Rasha.createMember());

// console.log ([Mustafa, Rasha]); // I could put both family members in one array

// console.log(FamilyMember.names);


let resident = new FamilyMember ([Mustafa, Rasha]);
let House1 = new House ("Illinois", 1970, [Mustafa, Rasha]);
let House2 = new House ('New York', 2500, Mustafa);

// console.log(House1);

// console.log(House2);

House1.addResident(Mustafa,Rasha);

console.log(House1);
