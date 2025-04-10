// let user: number = 77;
// console.log(typeof user);
// let user: number = 77;
// console.log(typeof user); // Outputs: 'number'
// //Working with functions
// function addTwo(num: number): number{
//     return num + 2
// }
// console.log(addTwo(5));
// function getUpper(val: string){
//     return val.toUpperCase()
// }
// console.log(getUpper("4"));
// let loginUser = (name: string, email: string, isPaid: boolean = false) => {
// }
// const getHello = (s: string):string => {
//     return ""
// }
// const heros = ["mama", "hha", "cjkn",8]
// heros.map((hero): string | number => {
//     return hero
// })
// function consoleError(errmsg: string): void{
//     console.log(errmsg);
// }
// function handleError(errmsg: string): never{
//     throw new Error(errmsg);
// }
//  User = {
//     name: "Pranav",
//     email: "dvggdvd@gmail.com",
//     isActive: true
// }
// //function createUser({name: string, isPaid: boolean}){}
// function  createUser({name: "Pranav", isPaid: false})
// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399 }
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }
// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }
// createUser({name: "", email: "", isActive: true})
//readonly & optional
// type User =  {
//     readonly _id: string
//     name: string
//     email: string
//     isActive: boolean
//     creditcardDetails?: number
// }
// let myUser: User = {
//     _id: "1245",
//     name: "h",
//     email: "h@h.com",
//     isActive: false
// }
// type cardNumber = {
//     cardNumber: string
// }
// type cardDate = {
//     cardDate: string
// }
// type cardDetails = cardNumber & cardDate & {
//     cvv: number
// }
// myUser.email = "h@gmail.com"
// //myUser._id = "asa" 
// //arrays
// const superHeros: string[] = [] //syntax for making empty array
// superHeros.push("spiderman")
// const MLModels: number[][] = [
//     [255, 255, 255],
//     []
// ]
//Union types
// function getDbId(id: number | string){
//     if (typeof id === "string") {
//         id.toLowerCase()
//     }
// }
// const data: (string | number)[] = ["1", "2", 3]
// let  seatAllotment: "aisle" | "middle" | "window"
// seatAllotment = "aisle"
//Tuples
// let user: [string, number, boolean]
// user = ["hc", 44, true]
// type User = [number, string]
// const newUser: User =  [112, "dsggf@gmail.com"]
// newUser[1] = "hc.com"
// console.log(newUser)
// newUser.push("ff")
// console.log(newUser)
//Enums
// enum SeatChoice {
//     AISLE,
//     MIDDLE,
//     WINDOW,
//     FOURTH
// }
// const hcSeat = SeatChoice.AISLE
