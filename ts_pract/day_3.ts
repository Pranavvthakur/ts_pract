// "use strict"
// class User {
//     email: string
//     name: string
    
// constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
// }
// }
// const Pranav = new User("dfedfsf", "dfvef");
// console.log(Pranav)


// class Person {
//     private _name: string;
  
//     constructor(name: string) {
//       this._name = name;
//     }
  
    // Getter
//     public get name(): string {
//       return this._name;
//     }
  
//     // Setter
//     public set name(newName: string) {
//       if (newName.length < 3) {
//         throw new Error("Name is too short!");
//       }
//       this._name = newName;
//     }
//   }
  
//   const person = new Person("Pranav");
//   console.log(person.name);     
  
//   person.name = "Aryan";        
//   console.log(person.name);     
  
 

//Genrics

// function identity<T>(value: T): T {
//     return value;
//   }
  
//   const number = identity<number>(42); 
//   const text = identity<string>("hello");

//   class Box<T> {
//     value: T;
  
//     constructor(value: T) {
//       this.value = value;
//     }
  
//     getValue(): T {
//       return this.value;
//     }
//   }
  
//   const stringBox = new Box<string>("hello");
//   console.log(stringBox.getValue());
  
//   const numberBox = new Box<number>(123);
//   console.log(numberBox.getValue());
  