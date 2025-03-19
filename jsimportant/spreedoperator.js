
// spreed operator

// Spread Operator (...) என்றால் என்ன?
// Spread operator (...) என்பது ES6 (ECMAScript 2015) introduced செய்த ஒரு JavaScript feature.
// இது array, object, function arguments ஆகியவற்றை விரிவாக்கி (expand) அல்லது copy செய்ய பயன்படுத்தப்படுகிறது.

// const employees = [
//     { id: 1, name: "Raj", salary: 45000 },
//     { id: 2, name: "Priya", salary: 55000 }
// ];

// const updatedEmployees = employees.map(emp => ({
//     ...emp, // Copy existing properties (id, name, salary)
//     salary: emp.salary + 5000 // Increase salary
// }));

// console.log(updatedEmployees);

// const result= employees.map((ele,i)=>({
//     ...ele,
//      salary:ele?.salary+5000

// }))
// console.log(result);





// 1)
const numbers = [10, 20, 30, 40];
const result =[...numbers,50]
console.log(result);


// ❓ 1. ஒரு புதிய array உருவாக்கி, numbers array-ஐ copy செய்யவும். 
// ❓ 2. புதிய array-ல் ஒரு extra value 50 சேர்க்கவும்.

// const newarr =[...numbers]
//  console.log(newarr);
//  const addarr = [...newarr,50]
//  console.log(addarr);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// ❓ 1. `arr1` & `arr2` merge செய்யவும்.
// ❓ 2. `arr2` merge ஆகும்போது அதன் முதல் element (4) மட்டும் நீக்கவேண்டும்.

// const result =[...arr1,...arr2]
// console.log(result);

// const result2 =[...arr1,arr2[1]]
// console.log(result2);



// const student = {
//     name: "Vikram",
//     marks: { math: 80, science: 85 }
// };
// destructor

// const{name,marks:{science}}=student
// console.log(student);
// const hiii= {...student,marks:{...student.marks,science:90}}
// console.log(hiii);


// Rest Operator (...) என்றால் என்ன?
// Rest Operator (...) என்பது ES6 (ECMAScript 2015) இல் அறிமுகப்படுத்தப்பட்ட ஒரு JavaScript feature ஆகும். இது spread operator (...) போலவே செயல்படுகிறது, ஆனால் மாறுபாடாக multiple values-ஐ single variable-ல் store செய்ய பயன்படுகிறது.

// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// const [first, ...remainingFruits] = fruits;

// console.log(first); // Output: Apple
// console.log(remainingFruits); // Output: ["Banana", "Mango", "Orange"]

// const user = {
//     name: "Santhana",
//     age: 25,
//     country: "India"
// };

// const { name, ...details } = user;

// console.log(name);    // Output: Santhana
// console.log(details); // Output: { age: 25, country: "India" }

 
 


