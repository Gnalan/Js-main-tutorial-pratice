// ES6 (ECMAScript 2015) Features - தமிழ் விளக்கம் 🚀
// ES6 (ECMAScript 2015) என்பது JavaScript-ல வந்த ஒரு முக்கியமான update. இதில நிறைய புதிய features introduce செய்யப்பட்டது, இது coding-ஐ எளிதாக்குகிறது, performance improve செய்கிறது.

// 1. let & const (Block Scope Variables)
// ES6-க்கு முன்பு var மட்டும் இருந்தது, இது global / function scoped.
// ஆனால் let & const block scope-ல் இருக்கும்.

// js
// Copy
// Edit
// // `var` Example (Not Block Scoped)
// var a = 10;
// if (true) {
//     var a = 20;  // Same variable modified
// }
// console.log(a); // 20 (Unexpected Behavior)

// // `let` Example (Block Scoped)
// let b = 10;
// if (true) {
//     let b = 20;  // Different scope
// }
// console.log(b); // 10 (No change)

// // `const` Example (Immutable)
// const c = 30;
// c = 40;  // ❌ Error: Assignment to constant variable.
// ✅ let - value change செய்யலாம், const - constant (immutable).
// ✅ let & const block scope-ல் work செய்யும்.

// 2. Template Literals (``)
// ES6-க்கு முன்பு string concatenation செய்ய + operator பயன்படுத்தினோம்.
// ES6-ல் backtick (``) மூலம் எளிதாக combine செய்யலாம்.

// js
// Copy
// Edit
// const name = "Santhosh";
// const age = 25;

// // Before ES6
// console.log("My name is " + name + " and I am " + age + " years old.");

// // ES6 Template Literals
// console.log(`My name is ${name} and I am ${age} years old.`);
// ✅ ${variable} format-ல் values inject செய்யலாம்.
// ✅ Multi-line strings create செய்யலாம்.

// 3. Arrow Functions (=>)
// ES6-க்கு முன்பு function எழுத length-ஐ அதிகமாக்கும்.

// js
// Copy
// Edit
// // Before ES6
// function add(a, b) {
//     return a + b;
// }

// // ES6 Arrow Function
// const add = (a, b) => a + b;

// console.log(add(5, 10)); // 15
// ✅ function keyword தேவையில்லை.
// ✅ return statement-ஐ single line-ல் எழுதலாம்.
// ✅ this keyword problem குறைக்க உதவும்.

// 4. Destructuring (Array & Object)
// ES6-ல் array & object-யை destructure செய்து variables-கள் assign செய்யலாம்.

// Array Destructuring
// js
// Copy
// Edit
// const numbers = [10, 20, 30];

// // Before ES6
// const first = numbers[0];
// const second = numbers[1];

// // ES6 Destructuring
// const [firstNum, secondNum] = numbers;
// console.log(firstNum, secondNum); // 10 20
// Object Destructuring
// js
// Copy
// Edit
// const person = { name: "Kumar", age: 28, city: "Chennai" };

// // Before ES6
// const personName = person.name;
// const personAge = person.age;

// // ES6 Destructuring
// const { name, age } = person;
// console.log(name, age); // Kumar 28
// ✅ Array/Object values-ஐ easy-ஆ access செய்யலாம்.

// 5. Spread (...) & Rest (...) Operators
// ES6-ல் ... operator spread (expand) & rest (combine) செய்ய உதவும்.

// Spread Operator (Expanding)
// js
// Copy
// Edit
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5, 6];

// console.log(arr2); // [1, 2, 3, 4, 5, 6]
// ✅ Old array-ஐ copy/new array-கள் merge செய்ய பயன்படுத்தலாம்.

// Rest Operator (Combining)
// js
// Copy
// Edit
// function sum(...numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
// }

// console.log(sum(10, 20, 30, 40)); // 100
// ✅ Multiple arguments-ஐ single array-ஆக convert செய்யும்.

// 6. Default Parameters
// js
// Copy
// Edit
// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
// }

// greet();        // Hello, Guest!
// greet("Arun");  // Hello, Arun!
// ✅ Parameter value pass செய்யாவிட்டாலும் default value இருக்கும்.

// 7. Object Property Shorthand
// ES6-க்கு முன்பு object-ல் values assign செய்ய variable names repeat ஆகும்.

// js
// Copy
// Edit
// const name = "Ravi";
// const age = 30;

// // Before ES6
// const person1 = { name: name, age: age };

// // ES6 (Shorthand)
// const person2 = { name, age };

// console.log(person2); // { name: 'Ravi', age: 30 }
// ✅ Object properties-ஐ shorthand-ஆக assign செய்யலாம்.

// 8. Promises (Async Handling)
// ES6-க்கு முன்பு asynchronous operations handle செய்ய callback hell பிரச்சனை இருந்தது.
// Promises asynchronous tasks-ஐ easy-ஆ handle செய்ய உதவும்.

// js
// Copy
// Edit
// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data fetched successfully!");
//         }, 2000);
//     });
// };

// fetchData().then((data) => console.log(data)).catch((err) => console.log(err));
// ✅ Promise asynchronous functions-ஐ handle செய்ய உதவும்.

// 9. import & export (Modules)
// ES6-க்கு முன்பு JavaScript-ல் require() பயன்படுத்தினோம்.
// ES6-ல் import & export மூலம் modules easy-ஆ handle செய்யலாம்.

// Exporting a function
// js
// Copy
// Edit
// // math.js
// export const add = (a, b) => a + b;
// export const sub = (a, b) => a - b;
// Importing a function
// js
// Copy
// Edit
// // app.js
// import { add, sub } from './math.js';

// console.log(add(10, 5)); // 15
// console.log(sub(10, 5)); // 5
// ✅ Multiple files-ல் functions & variables-ஐ organize செய்ய உதவும்.

// 10. Class & Inheritance
// ES6-க்கு முன்பு object-oriented programming (OOP) செய்ய function constructor & prototype methods பயன்படுத்தினோம்.
// ES6-ல் class & inheritance feature-கள் introduce ஆனது.

// js
// Copy
// Edit
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// class Student extends Person {
//     constructor(name, age, course) {
//         super(name, age);
//         this.course = course;
//     }

//     study() {
//         console.log(`${this.name} is studying ${this.course}.`);
//     }
// }

// const student1 = new Student("Siva", 22, "Math");
// student1.greet(); // Hello, my name is Siva and I am 22 years old.
// student1.study(); // Siva is studying Math.
// ✅ OOP concepts-ஐ easy-ஆ implement செய்யலாம்.

// 🔹 முடிவுரை
// ES6-ல் JavaScript-ஐ easy, fast & efficient ஆக use செய்ய நிறைய powerful features வந்திருக்கிறது.
// 🎯 Main features:
// ✅ let, const
// ✅ Template literals
// ✅ Arrow functions
// ✅ Destructuring
// ✅ Spread & Rest operators
// ✅ Promises
// ✅ Modules (import/export)
// ✅ Classes & Inheritance

// 🔥 Modern JavaScript development-க்கு ES6 முக்கியமானது! 🚀