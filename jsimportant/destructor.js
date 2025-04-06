 
//*************SYNTAX*************************
//   def: object and array la ulla property ya vera oru varible ku assign pandrathu tha destructuring
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


// pratice:1

// const car = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 20, 
//     color: 'red'
//   }
// const{type,color,brand,model,year}=car
// console.log(`my ${type} is ${color} color car brand is ${brand} model is ${model} boughting year is ${year}`);

//pratice:2
// output: My Mustang is registered in Texas.


// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red',
//     registration: {
//       city: 'Houston',
//       sta: 'Texas',
//       country: 'USA'
//     }
//   }
//  const{model,registration:{sta}}=vehicleOne
//  console.log(`my ${model} is registered in ${sta}`);
 
//pratice:3

// const vehicles = ['mustang', 'f-150', 'expedition','h','y','g','d'];
// const[one,two,...restof]=vehicles
// console.log(restof);



// const person={
//     name:"guna",
//     deg:"mca",
//     street:"svg",
//     details:{
//         course:{
//          frontend:"react native",
//          backend:"node",
//         },
//         siblings:{
//             bro:"kk",
//             sis:"ra",
//            work:{
//              browork:"teaching",
//              siswork:"studuy"
//             }
//         }
//     }
// }
// console.log(person);
//    const{details}=person
//   console.log(details);
//    const{name,street,deg}=person
//    console.log(name,deg,street);
//    const{details:{course:{backend}}}=person
//    console.log(backend);
//    const{details:{siblings:{work:{siswork}}}}=person
//    console.log(siswork);



// const mydetails={
//     name:"guna",
//     deg:"mca",
//     details:{
//         st:"tuytuyt",
//         sec:{
//             one:"1",
//             two:{
//                 three:"67",
//                 four:"787",
//                 five:{
//                     hi:"7878787878"
//                 }
//             }

//         }
//     }
// }

// console.log(mydetails);
// const{name,deg,details}=mydetails
// console.log(name);
// console.log(deg);
// const{details:{sec:{two:{five}}}}=mydetails
// console.log(five)



// my pratice important

// const config = {
//     server: {
//         host: "127.0.0.1",
//         port: 8080,
//         routes: {
//             home: "/",
//             dashboard: "/dashboard",
//             profile: {
//                 view: "/profile/view",
//                 edit: "/profile/edit"
//             }
//         }
//     },
//     database: {
//         url: "mongodb://localhost:27017",
//         credentials: {
//             user: "admin",
//             password: "secure123"
//         }
//     }
// };

// ans print:

// serverHost → "localhost"
// serverPort → 3000
// homeRoute → "/home"
// profileViewRoute → "/profile"
// dbUser → "root"
// dbPassword → "password


// const{server:{host}}=config
// console.log(`serverhost is ${host}`);
// const{server:{port}}=config
// console.log(`port is ${port}`);
// const {server:{routes:{home}}}=config
// console.log(home);
// const{database:{credentials:{user}}}=config
// console.log(`user details is ${user}`);



const footballClub = {
    teamName: "Chennai Titans",
    stadium: {
        stadiumName: "Chennai Chepauk",
        capacity: 60000,
        location: {
            city: "Chennai",
            state: "Tamilnadu"
        }
    },
    squad: [
        {
            id: 4,
            name: "Guna",
            position: "Forward",
            stats: {
                goals: 25,
                assists: 12
            },
            contact: {
                email: "guna@email.com",
                phone: "898989898"
            }
        },
        {
            id: 5,
            name: "Carlos",
            position: "Midfielder",
            stats: {
                goals: 10,
                assists: 18
            },
            contact: {
                email: "carlos@tfc.com",
                phone: "6367576576"
               
            }
        }
    ],
    coach: {
        name: "jack",
        experience: "20 years",
        social: {
            twitter: "@coach_jack",
            linkedin: "linkedin.com/in/jack"
        }
    }
};

// Destructure the team name
const{teamName}=footballClub
console.log(`club name: ${teamName}`)

// Destructure the stadium name
const{stadium:{stadiumName}}=footballClub
console.log(`stadium name: ${stadiumName}`);

// Destructure the stadium city
const{stadium:{location:{city}}}=footballClub
console.log(`Stadium city: ${city}`);

// Destructure the coach's LinkedIn profile
const{coach:{social:{linkedin}}}=footballClub
console.log(`Coach linkedin profile: ${linkedin}`);

// Destructure the first player's name
const{squad:[{name}]}=footballClub
console.log(`First Player Name:${name}`);


// Destructure the second player's name
const{squad}=footballClub
const secondPlayerName=squad[1].name
console.log(`Second Player Name:${secondPlayerName}`);

// Destructure the first player's goals
const{squad:[{stats:{goals}}]}=footballClub
console.log(`First Player Goal:${goals}`);

// Destructure the second player's phone number
const secondPlayerPhoneNumber =squad[1].contact.phone
console.log(`Secon player phone number ${secondPlayerPhoneNumber}`);


// Output:

//  club name: Chennai Titans
//  stadium name: Chennai Chepauk
//  Stadium city: Chennai
//  Coach linkedin profile: linkedin.com/in/jack
//  First Player Name:Guna
//  Second Player Name:Carlos
//  First Player Goal:25
//  Secon player phone number 6367576576











// 1️⃣ Basic Details:

// Club name → clubName (Default: "Unknown Club")
// Stadium name → stadiumName (Default: "Unnamed Stadium")
// Stadium city → stadiumCity (Default: "Unknown City")
// 2️⃣ Coach Information:

// Coach's LinkedIn → coachLinkedIn (Default: "Not Available")
// 3️⃣ First Player Details:

// First player's name → firstPlayerName (Default: "N/A")
// First player's goals → firstPlayerGoals (Default: 0)
// 4️⃣ Second Player Details:

// Second player's phone number → secondPlayerPhone (Default: "No Phone")





