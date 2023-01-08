//shallow copy
// Using spread operator: 
// We can avoid the creation of shallow copies with the help of using the spread operator.

// var obj={
//     a:"1",
//     b:"2",
//     c:"6",
//     d:"9"
//       } 
// console.log(obj);
// var obj1={...obj}
// obj1.a="4"
// console.log(obj1);



// ex:2 (object.assign method)
// var person={
//     name:"guna",
//     place:"svg",
//     street:"gandhi road",
//      dtails:{
//          edu:"msc",
//          fav:"cricket"
//      }
// }
// console.log(person);

// var person1=Object.assign({},person) //assign method copy

// person1.dtails.edu="mca"
// console.log("your education is",person1.dtails.edu);

// Deep copy(JSON.PARSE and JSON.STRINGIFY METHOD )


// var obj={
//     a:"1",
//     b:"2",
//     c:"6",
//     d:"9",
//     details:{
//       edu:"msc"  
//     }
// }
// console.log(obj)
// var obj1=JSON.parse(JSON.stringify(obj))
// obj1.details.edu="bsc"
// console.log(obj1);
// console.log("your updated education is",obj1.details.edu)




