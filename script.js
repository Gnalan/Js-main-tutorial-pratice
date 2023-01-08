// let arr1=[
//     {id:1,name:'raja'},
//     {id:2,name:'guna'},
//     {id:3,name:'seelan'},
//     {id:4,name:'john'},
//     {id:5,name:'mani'}
// ]
 
// let arr2=[
//     {id:1,name:'raja'},
//     {id:2,name:'seelan'}

// ]
// function result(array1, array2)
//  {
//     return array1.filter(obj1 => {
//         // console.log(!array2.some(obj2=> obj1.id == obj2.id));
//       return !array2.some(obj2 => {
//         return obj1.id === obj2.id;
//       });
//     });
//   }
  
// console.log(result(arr1, arr2));



//single array of object filter
//example 2
// const arr=[
//     {id:1,name:'raja'},
//     {id:2,name:'guna'},
//     {id:3,name:'seelan'},
//     {id:4,name:'john'},
//     {id:5,name:'mani'},
//     {id:6,name:'raja'},
//     {id:7,name:'seelan'}
// ];

// // const result=arr.filter((arr)=>arr.name!=='raja')
// // arr.map((obj,index)=>{
// //     return obj.id!=='raja'
// // })
// var result = arr.filter(function(arr) {
//     return arr.name!== "raja" && arr.name!== "seelan";
//   });
  
//   console.log(result);


//example 2 another method


// const arr=[
//     {id:1,name:'raja'},
//     {id:2,name:'guna'},
//     {id:3,name:'seelan'},
//     {id:4,name:'john'},
//     {id:5,name:'mani'},
//     {id:6,name:'raja'},
//     {id:7,name:'seelan'}
// ];
// // arr.map(item,index)
// function result(arr, key) {
//     return [...new Map(arr.map(item => [item[key], item])).values()]
// }
// const arr1 = result(arr, 'name')
// console.log(JSON.stringify(arr1))


// const delta =[
    
//         {
//             name: 'rose',
//             age: 24,
//             address:{
//                 permanentadd: 'dstfdcskvcvatfhb',
//                 currentadd: 'wduGVDIYvciYGDVCIYDG'
//             },
//             contact:{
//                 phone: 7635434562,
//                 mobile: 623266887
//             }
//         },
//         {
//             name: 'rose1',
//             age: 24,
//             address:{
//                 permanentadd: 'dstfdcskvcvatfhb',
//                 currentadd: 'wduGVDIYvciYGDVCIYDG'
//             },
//             contact:{
//                 phone: 7635434562,
//                 mobile: 623266887
//             }
//         },
//         {
//             name: 'rose2',
//             age: 24,
//             address:{
//                 permanentadd: 'dstfdcskvcvatfhb',
//                 currentadd: 'wduGVDIYvciYGDVCIYDG'
//             },
//             contact:{
//                 phone: 7635434562,
//                 mobile: 623266887
//             }
//         },
//         {
//             name: 'rose3',
//             age: 24,
//             address:{
//                 permanentadd: 'dstfdcskvcvatfhb',
//                 currentadd: 'wduGVDIYvciYGDVCIYDG'
//             },
//             contact:{
//                 phone: 7635434562,
//                 mobile: 623266887
//             }
//         },
//         {
//             name: 'rose4',
//             age: 24,
//             address:{
//                 permanentadd: 'dstfdcskvcvatfhb',
//                 currentadd: 'wduGVDIYvciYGDVCIYDG'
//             },
//             contact:{
//                 phone: 7635434562,
//                 mobile: 623266887
//             }
//         }
        
    
// ]


// var result = delta.map(item => ({  name: item.name ,address:item.address.currentadd,contact:item.contact.phone }));
// console.log(result)

// (function(n, m) {
//     Array.from({length:m}, (v,i) => console.log(i + n));
//   })(1, 100);