<<<<<<< Updated upstream
//MAP i)iteam means array la ulla value 5,7,8 ii)index means array position 0,1,2

// MAP syntax

// var new_array = arr.map(function callback(element, index, array) {
//     // Return value for new_array
// }[, thisArg])

// ex:1

// const arr=[5,7,8,9]
// const newarray=arr.map((item,index)=>item*2)
// console.log(newarray);

// FILTER 

// SYNTAX:
// var new_array = arr.filter(function callback(element, index, array) {
//     // Return true or false
// }[, thisArg])

// EX:1
//   const arr=[1,2,5,8]
//   const arr1=arr.filter((iteam,index)=>iteam%2===0)
// console.log(arr1);
    

// EX:2(filter grade using filter)

//  const student=[
//     {name:"g",grade:57},
//     {name:"h",grade:89},
//     {name:"i",grade:56},
//     {name:"p",grade:90},
//     {name:"w",grade:45}
//  ];
// const stu=student.filter((iteam,index)=>iteam.grade>=57)
// console.log(stu);


// REDUCE

// syntax:

// arr.reduce(callback[, initialValue])

// const arr=[1,3,6,8]
// const arr1=arr.reduce((iteam,result)=>{
//   return iteam+result;

// },0)
// console.log(arr1);
  
//***************************preparing task*******************************************************************************:

// const numbers = [65, 44, 12, 4];
// const  no=numbers.map((iteam,index)=>{
//     return iteam*10
// })
// console.log(no);

//map on firstname and lastname
// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];
// const person1=persons.map((iteam,index)=>{
// return [iteam.firstname , iteam.lastname].join(" ")
// })
// console.log(person1);


// filter and maping on one name
// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];
// const person1=persons.filter(v=>v.firstname=="Malcom").map((iteam,index)=>iteam)
// console.log(person1);


//filter on age>=18

// const ages = [32, 33, 16, 40];
//  const rank=ages.filter((iteam,index)=>{
//     return iteam>=18;
//  })
//  console.log(rank);

// const numbers = [175, 50, 25];
// const no=numbers.reduce((i,v)=>{
//     return i-v;
// })
// console.log(no);
 
const arr=[1,3,4,6]
const arr1=arr.map((item,index)=>{
    return item>=1
})
=======
//MAP i)iteam means array la ulla value 5,7,8 ii)index means array position 0,1,2

// MAP syntax

// var new_array = arr.map(function callback(element, index, array) {
//     // Return value for new_array
// }[, thisArg])

// ex:1

// const arr=[5,7,8,9]
// const newarray=arr.map((item,index)=>item*3)
// console.log(newarray);

// FILTER 

// SYNTAX:
// var new_array = arr.filter(function callback(element, index, array) {
//     // Return true or false
// }[, thisArg])

// EX:1
//   const arr=[1,2,5,8]
//   const arr1=arr.filter((iteam,index)=>iteam%2===0)
// console.log(arr1);

// const arr=[1,2,5,8]
// const newarr =arr.filter((e,i)=>e%2 ==1);
// console.log(newarr);



    

// EX:2(filter grade using filter)

//  const student=[
//     {name:"g",grade:57},
//     {name:"h",grade:89},
//     {name:"i",grade:56},
//     {name:"p",grade:90},
//     {name:"w",grade:45}
//  ];
// const stu = student.filter((item,index)=>item.grade>50)
// console.log(stu);

 


//item-{name:"g",grade:57},
 //index:0


// REDUCE

// syntax:

// arr.reduce(callback[ initialValue])
// const arr=[6,7,8]
// const arr1=arr.reduce((i,index)=>{
//     return i+index;
// })
// console.log(`reduce value is ${arr1}`);
  
//***************************preparing task*******************************************************************************:

// const numbers = [65, 44, 12, 4];
// const  no=numbers.map((iteam,index)=>{
//     return iteam*10
// })
// console.log(no);

//map on firstname and lastname
// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];

// const per=persons.map((ele,i)=>{
//     return [ele.firstname,ele.lastname].join("")
// })
// console.log(per);




// filter and maping on one name
// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];

// const person1=persons.filter(v=>v.firstname=="Malcom").map((iteam,index)=>iteam)
// console.log(person1);


//filter on age>=18

// const ages = [32, 33, 16, 40];
// const result =ages.filter((item,index)=>{
//     return item>18
// })
// console.log(result);


// const numbers = [175, 50, 25];
// const no=numbers.reduce((i,v)=>{
//     return i-v;
// })
// console.log(no);
 
// const arr=[1,3,4,6]
// const arr1=arr.map((item,index)=>{
//     return item>=1
// })



// நீங்கள் map, filter, மற்றும் reduce மேல் பிராக்டிஸ் செய்ய விரும்புகிறீர்கள். இவை தொடர்பான மூன்று சிக்கலான கேள்விகள் இதோ:

// Question 1: Employee Salary Calculation
// ஒரு employees என்ற array உள்ளது, அதில் ஒவ்வொரு ஊழியரின் விவரங்களும் உள்ளன.

// கோரி:
// ஊழியர்கள் அனைவருக்கும் 10% increment கொடுத்து புதிய array உருவாக்கவும் (map பயன்படுத்தவும்).
// மாத சம்பளம் ₹50,000-க்கு மேல் உள்ளவர்களை மட்டும் filter செய்யவும்.
// அனைத்து ஊழியர்களின் மொத்த சம்பளத்தையும் (increment பிறகு) reduce மூலம் கணக்கிடவும்.

const employees = [
    { id: 1, name: "Raj", salary: 45000 },
    { id: 2, name: "Priya", salary: 55000 },
    { id: 3, name: "Arun", salary: 60000 },
    { id: 4, name: "Meena", salary: 70000 },
];

// i)
const result =employees.map((item,i)=>({
    ...item,
    salary:item.salary+item.salary*(10/100)
    

}))
console.log(result);

// iii)
var result3= result.reduce((item,i)=>item+i.salary,0)
console.log(result3);

// ii)
const result2 =employees.filter((item,i)=>({salary:item.salary>50000}))
console.log(result2);














>>>>>>> Stashed changes
