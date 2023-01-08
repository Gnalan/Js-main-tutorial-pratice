 
//*************SYNTAX*************************

// Array destructuring:
// var x, y;
// [x, y] = [10, 20];
// console.log(x); // 10
// console.log(y); // 20

// or

// [x, y, ...restof] = [10, 20, 30, 40, 50];
// console.log(x); // 10
// console.log(y); // 20
// console.log(restof); // [30, 40, 50]

//**************************************************************/
// ex:1
// var a=["j","y","h","w"]
// var[first,second]=a
// console.log(first,second);

// ex:2
// var [first,,...restt]=["j","y","h","w"]
// console.log(first);
// console.log(restt);


//function destructuring
//  function guna(){
//     return ["j","y","h","w"];

//  }
//  var[first,second]=guna()
//  console.log(first);
//  console.log(second);

// Object destructuring:

//******************SYNTAX*******************
// ({ x, y} = { x: 10, y: 20 });
// console.log(x); // 10
// console.log(y); // 20

// or

// ({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
// console.log(x); // 10
// console.log(y); // 20
// console.log(restof); // {m: 30, n: 40}

//***************************************************/

// ex:1
//   const person={
//     name:"guna",
//     place:"svg",
//     street:6565
//   }
 
//   const {name,place,street}=person
//   console.log(name);
//   console.log(place);
//   console.log(street);

//  ex:2
// nested object destructor
    
// const person={
//         name:"guna",
//         place:"svg",
//         st:{
//           street:"hghg",  
//         dis:{
//           district:"tenkasi",
//           msg:"hi",
//         edu:{
//         ug:"bsc",
//         pg:"msc"
//         }
//         }
//     }
//     }
//     console.log(person);
//     const{name}=person
//     console.log(name);
//     const{st:{street}}=person
//     console.log(street);
//     const{st:{dis:{district}}}=person
//     console.log(district);
//     const{st:{dis:{edu:{pg}}}}=person
//     console.log(pg);


//pratice:1

// const car = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red'
//   }
// const{type,color,brand,model,year}=car
// console.log(`my ${type} is ${color} color car brand is ${brand} model is ${model} boughting year is ${year}`);

//pratice:2
// output: My Mustang is registered in Texas.


const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
 const{model:{registration:{state}}}=vehicleOne
 console.log(`my ${model} is registered in ${state}`);
 
//pratice:3

// const vehicles = ['mustang', 'f-150', 'expedition','h','y','g','d'];
// const[one,two,...rest]=vehicles
//  console.log(rest);

