<<<<<<< Updated upstream
// ---SHALLOW COPY--------
//ex:1
// let person={
//         fname:"guna",
//         lname:"seelan",
    
//     details:{
//        rollno:4,
//        address:{
//         place:'svg',
//         dist:'tenkasi',
//         state:{
//             location:'tamilnadu',
//             street:'gandhi road',
//             mark:{
//              tamil:60,
//              eng:70,
//              maths:80,
//             },
//             phone:{
//                 mobileno:6381337473,
//                 teleno:8787878
//             }
//         }
//        }
//     }
// }

// let person1={...person,details:{...person.details,address:{...person.details.address,state:{...person.details.address.state,mark:{...person.details.address.state.mark,phone:{...person.details.address.state.mark.phone}}}}}}
// console.log(person1)


//ex:2

// let obj={
//     a:4,
//     b:3,
//     c:{
//         d:5,
//         e:7,
//         f:{
//         g:32,
//         h:67
//         }
//     }
// }
// let obj1={...obj,c:{...obj.c,d:{...obj.c.d}}}
// console.log(obj1)
// obj1.c.e=50
// console.log(obj1)

//----spreed operator----
//ex1 array spreed operator

// const arr=[1,2,3,4]
// arr[1]=5
// console.log(arr)
// const arr1=[...arr]


//----ex:2 object spreed operator---

// let obj={
//     a:1,
//     b:2,
//     c:5,
//     d:{
//         e:7
//     }
// }
// let obj1={...obj}
// console.log(obj1)


//-----object destructuring----
//---example1---
// const obj={
//     a:1,
//     b:2,
//     c:3
// }
// const{b,c}=obj;
// console.log(b,c)

//    ----error------
// const obj={
//     a:1,
//     b:2
// }
// // console.log(obj.a)
// // console.log(['a'])
// const printperson=(obj,prop){
//  return obj[prop];
// }
// person(obj,a)


//---example2---
// const obj={
//     a:1,
//     b:2,
//     c:3
// }
// const{b:n1}=obj
// console.log(n1)

//----array destructuring----
//ex1
// const arr=[1,2,3,4,5,6]
// const [a,b]=arr
// console.log(a)

//ex2
// const arr=[1,2,3,4,5,6]
// const [a,b,...arr1]=arr
// console.log(a)
// console.log(b)
// console.log(arr1)


// ----DOM------
//DEF:  The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

//DOM USE-  The Document Object Model (DOM) is an application     programming interface (API) for HTML and XML documents


//The <html> element can be accessed with document.documentElement property, whereas the <head> element can be accessed with document.head property, and the <body> element can be accessed with document.body property.
// ID SELECTOR
//TAG SELECTOR
//CLASS SELECTOR
//QUERY SELECTOR


// JavaScript DOM Get Set Attributes
// The getAttribute() method is used to get the current value of a attribute on the element.

// If the specified attribute does not exist on the element, it will return null. Here's an example:

// const arr=["na1","na2","na3","na4","na5","na6","na7"]
// // [[na1,na2,na3],[na1,na2,na3],[na1]]
// const newarr=[...arr]


// const obj={
//     a:1,
//     b:2,
//     c:{
//     d:3,
//     e:{
//         f:4,
//         g:8,
//         h:10
//     }
//     }
// }

// const obj1={...obj,c:{...obj.c,e:{...obj.c.e}}}
// console.log(obj1)

// const address = require('address');
// console.log(address.ip());
// address.ipv6(address.ipv6());
// address.mac(function (err, addr) {
//     console.log(addr);
//   });



function showMacAddress() {
    var obj = new ActiveXObject("WbemScripting.SWbemLocator");
    var s = obj.ConnectServer(".");
    var properties = s.ExecQuery("SELECT * FROM Win32_NetworkAdapterConfiguration");
    var e = new Enumerator(properties);
    var output;
    output = '<table border="0" cellPadding="5px" cellSpacing="1px" bgColor="#CCCCCC">';
    output = output + '<tr bgColor="#EAEAEA"><td>Caption</td><td>MACAddress</td></tr>';
    while (!e.atEnd()) {
        e.moveNext();
        var p = e.item();
        if (!p) continue;
        output = output + '<tr bgColor="#FFFFFF">';
        output = output + '<td>' + p.Caption; +'</td>';
        output = output + '<td>' + p.MACAddress + '</td>';
        output = output + '</tr>';
    }
    output = output + '</table>';
    document.getElementById("box").innerHTML = output;
}

showMacAddress();
=======
// ---SHALLOW COPY--------
//ex:1
// let person={
//         fname:"guna",
//         lname:"seelan",
    
//     details:{
//        rollno:4,
//        address:{
//         place:'svg',
//         dist:'tenkasi',
//         state:{
//             location:'tamilnadu',
//             street:'gandhi road',
//             mark:{
//              tamil:60,
//              eng:70,
//              maths:80,
//             },
//             phone:{
//                 mobileno:6381337473,
//                 teleno:8787878
//             }
//         }
//        }
//     }
// }
//  let person1={...person,details:{...person.details,address:{...person.details.address,state:{...person.details.address}}}}
//    console.log(person1);







// let person1={...person,details:{...person.details,address:{...person.details.address,state:{...person.details.address.state,mark:{...person.details.address.state.mark,phone:{...person.details.address.state.mark.phone}}}}}}
// console.log(person1)


//ex:2

// let obj={
//     a:4,
//     b:3,
//     c:{
//         d:5,
//         e:7,
//         f:{
//         g:32,
//         h:67
//         }
//     }
// }
// const obj1=Object.assign({},obj)

// const obj1={...obj,c:{...obj.c,f:{...obj.c.f}}}
// obj1.c.f.g="4"
// console.log(obj1.c.f.g);




// let obj1={...obj,c:{...obj.c,f:{...obj.c.f}}}
// console.log(obj1)
// obj1.c.e=50
// console.log(obj1)

//----spreed operator----
//ex1 array spreed operator

// const arr=[1,2,3,4]
// arr[1]=5
// console.log(arr)
// const arr1=[...arr]


//----ex:2 object spreed operator---

// let obj={
//     a:1,
//     b:2,
//     c:5,
//     d:{
//         e:7
//     }
// }
// let obj1={...obj}
// console.log(obj1)


//-----object destructuring----
//---example1---
// const obj={
//     a:1,
//     b:2,
//     c:3
// }
// const{b,c}=obj;
// console.log(b,c)

//    ----error------
// const obj={
//     a:1,
//     b:2
// }
// // console.log(obj.a)
// // console.log(['a'])
// const printperson=(obj,prop){
//  return obj[prop];
// }
// person(obj,a)


//---example2---
// const obj={
//     a:1,
//     b:2,
//     c:3
// }
// const{b:n1}=obj
// console.log(n1)

//----array destructuring----
//ex1
// const arr=[1,2,3,4,5,6]
// const [a,b]=arr
// console.log(a)

//ex2
// const arr=[1,2,3,4,5,6]
// const [a,b,...arr1]=arr
// console.log(a)
// console.log(b)
// console.log(arr1)


// ----DOM------
//DEF:  The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

//DOM USE-  The Document Object Model (DOM) is an application     programming interface (API) for HTML and XML documents


//The <html> element can be accessed with document.documentElement property, whereas the <head> element can be accessed with document.head property, and the <body> element can be accessed with document.body property.
// ID SELECTOR
//TAG SELECTOR
//CLASS SELECTOR
//QUERY SELECTOR


// JavaScript DOM Get Set Attributes
// The getAttribute() method is used to get the current value of a attribute on the element.

// If the specified attribute does not exist on the element, it will return null. Here's an example:

// const arr=["na1","na2","na3","na4","na5","na6","na7"]
// // [[na1,na2,na3],[na1,na2,na3],[na1]]
// const newarr=[...arr]


// const obj={
//     a:1,
//     b:2,
//     c:{
//     d:3,
//     e:{
//         f:4,
//         g:8,
//         h:10
//     }
//     }
// }

// const obj1={...obj,c:{...obj.c,e:{...obj.c.e}}}
// console.log(obj1)

// const address = require('address');
// console.log(address.ip());
// address.ipv6(address.ipv6());
// address.mac(function (err, addr) {
//     console.log(addr);
//   });



// function showMacAddress() {
//     var obj = new ActiveXObject("WbemScripting.SWbemLocator");
//     var s = obj.ConnectServer(".");
//     var properties = s.ExecQuery("SELECT * FROM Win32_NetworkAdapterConfiguration");
//     var e = new Enumerator(properties);
//     var output;
//     output = '<table border="0" cellPadding="5px" cellSpacing="1px" bgColor="#CCCCCC">';
//     output = output + '<tr bgColor="#EAEAEA"><td>Caption</td><td>MACAddress</td></tr>';
//     while (!e.atEnd()) {
//         e.moveNext();
//         var p = e.item();
//         if (!p) continue;
//         output = output + '<tr bgColor="#FFFFFF">';
//         output = output + '<td>' + p.Caption; +'</td>';
//         output = output + '<td>' + p.MACAddress + '</td>';
//         output = output + '</tr>';
//     }
//     output = output + '</table>';
//     document.getElementById("box").innerHTML = output;
// }

// showMacAddress();
>>>>>>> Stashed changes
