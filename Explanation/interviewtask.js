//1
const students = [
    {"name": "Student1", "age": 20, "course": {"name": "Math", "code": "MATH101"}, "location": "New York", "phone": "123-456-7890"},
    {"name": "Student2", "age": 21, "course": {"name": "Science", "code": "SCI101"}, "location": "Los Angeles", "phone": "234-567-8901"},
    {"name": "Student3", "age": 22, "course": {"name": "Engineering", "code": "ENG101"}, "location": "Chicago", "phone": "345-678-9012"}
];

console.log("students",students)
console.log("students",students.length)

//filter maths only

const result= students.filter((ele,i)=>ele.course.name ==="Math")
console.log(result)

//add reg:1,2,3

const added = students.map((ele,i)=>({
    ...ele,
    reg:(i+1).toString()
}))
console.log(added)




// let txt= "Poorvika Technologies"
function txt(str){
    let reverse="";
   for(let i= str.length-1;i>=0;i--)
   {
       reverse +=str[i];
   }
   return reverse
   }
   
   console.log(txt("poorvika Technologies"))


//print 1,2,3,6,7,8,9

   for(let i=1;i<10;i++){
    if(i == "4"|| i=="5"){
        continue
    }
    console.log(i)
    
    
}






//laabam one task


setTimeout(()=>{
    console.log("gunaseelan")
},2000)

setInterval(()=>{
    console.log("gunaseelan1")
},2000)
setImmediate(()=>{
    console.log("gunaseelan2")
},2000)

// // iife
// (function(){
    
// }
// })()

// const str ="gunaseelan react"
// const result= str.split('').reverse().join();
// console.log(result)

// const arr= ["gunaseelan","react","react"]
//  const result=[...new Set(arr)]
//  console.log(result)



















