<<<<<<< Updated upstream
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




=======
//shallow copy

//shallow copy,deep copy 3 method 1.object.assign copy panni valu change pannum
// 2. deep copy la json.parse ah json.stringify ah mathi copy panni value change pannalam 
//3.destructor panni copy panni same '''''''''''  


// EXAMPLES IN BOTTOM SCRIPT.JS
// Using spread operator: 
// We can avoid the creation of shallow copies with the help of using the spread operator.

// var obj={
//     a:"1",
//     b:"2",
//     c:"6",
//     d:"9"
//       } 


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



// const obj={
//   a:"3",
//   b:"5",
//   c:"6"
// }
// const obj1={...obj}
// console.log(obj1);
//  obj.a="4"
//  console.log(obj);



// EXAMPLE OF SHALLOW AND DESTRUCTURING:
// 1.SHALLOW COPY

let person={
    name:"guna",
    deg:"mca",
    street:"svg",
    details:{
        course:{
         frontend:"react native",
         backend:"node",
        },
        
    },
    siblings:{
        bro:"kk",
        sis:"ra",
       work:{
         browork:"teaching",
         siswork:"studuy"
        }
    }
}

const per= {...person,details:{...person.details,course:{...person.details.course,siblings:{...person.details.course.siblings}}}}
per.details.course.frontend="java"
per.details.course.siblings.bro="seelan"
console.log(per.details.course);
console.log(per.details.course.siblings);
console.log(per);
>>>>>>> Stashed changes
