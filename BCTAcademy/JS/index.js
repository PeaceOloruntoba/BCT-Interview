// console.log("I am a winner.")
// console.log("Hello World!");

// nameY = "Mariam" //String
// let age = 22 //number integer\
// console.log(age)
// const Nigerian = true//boolean
// age = 20
// console.log(age)
// console.log(nameY)
// y="20"

// console.log(y !== age)
// sentence = nameY + " is " + age + " years old."

// console.log(sentence)
// num1 = 12;
// num2 = 6;

// function addition() {
//   return 2 + 4;
// }
// function subtraction() {
//   return 2 - 4;
// }
// function multiplication() {
//   return 2 * 4;
// }
// function division() {
//   return 2 / 4;
// }
// a = addition();
// b = subtraction();
// c = multiplication();
// d = division();

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

//enter first number
//enter second number
//add
//minus
//answer

// const car = {
//   id: 1,
//   name: "G-Wagon",
//   color: "Black",
//   weight: 2500,
//   price: "$2M",
//   petrol: true,
//   electric: true,
// };
// console.log(car.electric);
//Arrays of Objects.
// const cars = [
//   {
//     id: 1,
//     name: "Brabus G-Wagon",
//     color: "Black",
//     weight: 2500,
//     price: "$5M",
//     petrol: false,
//     electric: true,
//   },
//   {
//     id: 2,
//     name: "G-Wagon",
//     color: "Black",
//     weight: 2500,
//     price: "$2M",
//     petrol: true,
//     electric: false,
//   },
//   {
//     id: 3,
//     name: "Bugatti",
//     color: "White",
//     weight: 2700,
//     price: "$4M",
//     petrol: true,
//     electric: false,
//   },
//   {
//     id: 4,
//     name: "BMW",
//     color: "Blue",
//     weight: 2200,
//     price: "$1.5M",
//     petrol: true,
//     electric: false,
//   },
//   {
//     id: 5,
//     name: "Supra",
//     color: "Yellow",
//     weight: 2500,
//     price: "$1.2M",
//     petrol: true,
//     electric: false,
//   },
// ];

// console.log(cars.length);

// const filter = cars.filter((car) => (car.id == 4))
// console.log(filter);

cars.map((car) => (
  console.log(car.id + " " + car.name + " " + car.price)
))