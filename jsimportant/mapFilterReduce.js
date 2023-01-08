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