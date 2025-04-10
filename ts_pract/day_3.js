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
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var stringBox = new Box("hello");
console.log(stringBox.getValue()); // "hello"
var numberBox = new Box(123);
console.log(numberBox.getValue()); // 123
