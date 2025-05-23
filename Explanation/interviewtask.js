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
// const result= str.split('').reverse().join('');
// console.log(result)

// const arr= ["gunaseelan","react","react"]
//  const result=[...new Set(arr)]
//  console.log(result)









//count task in p m  square
// import { Text, SafeAreaView, StyleSheet,View,Button} from 'react-native';
// import React,{useState,useEffect} from 'react'
// import { Card } from 'react-native-paper';
// import AssetExample from './components/AssetExample';

// export default function App() {
//   const [count,setCount]=useState(0)
//   useEffect(()=>{
//    { count == 10 ?
//  console.log(count+0,"resulttttttttttt"):
//   null
//    }
//   })
//   const handleincrement=()=>{
//     setCount(count+1)
//   }
//   const handledecrement=()=>{
//     setCount(count-1)
//   }
//   return (
//     <SafeAreaView style={styles.container}>
//      <View style={{alignItems:"center",justifyContent:"center"}}>
//      <Text>{count}</Text>
//      <View style={{width:"80%",marginTop:12,height:30}}>
//      <Button onPress={handleincrement} title="increment"/>
//      </View>
//       <View style={{width:"80%",marginTop:12,height:30}}>
//      <Button  onPress={handledecrement} title="decrement"/>
//      </View>
//      </View>

     
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });


//p m square task return id name

// const data=[
// 	{
// 		id:1,
// 		name:"Mithun",
// 		department:"BCA",
// 		section:"A"
// 	},
// 	{
// 		id:2,
// 		name:"Karthik",
// 		department:"BCA",
// 		section:"A"
// 	}
// ]
// const result =data.map((ele,index)=>{
//     return {
//         id:ele.id,
//         name:ele.name
        
//     }
    
// })
// console.log(result)





//validation task

import { Text, SafeAreaView, StyleSheet,View,Image,TextInput,Pressable } from 'react-native';
import React,{useState} from 'react'

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const[username,setUserName]=useState('')
  const[gender,setGender]=useState('')
  const[dob,setDob]=useState('')
  const [phonenumber,setPhoneNumber]=useState('')
  const [email,setEmail]=useState('')
  const [fullname,setFullName]=useState('')
  return (
    <SafeAreaView style={styles.container}>
    <View style={{width:"100%",height:"100%",paddingVertical:"10%"}}>
    <View style={{width:"100%",alignItems:"center",justifyContent:"center"}}>
     <View>
     <Image  style={{width:80,height:80}} source={require('./assets/snack-icon.png')} resizeMode='cover'/>
     </View>
     <Text style={styles.para}>Gunaseelan</Text>
      <Text style={styles.para1}>@gunaseelan</Text>
    </View>
    <View style={{width:"90%",alignSelf:"center"}}>
       <View>
       <TextInput
       style={styles.inputcontainer} 
       placeholder='username'
       placeholderTextColor='grey'
       value={username}
       onChangeText={setUserName}
       />
       </View>
         <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
       <TextInput
       style={styles.inputmale} 
       placeholder='gender'
       placeholderTextColor='grey'
       value={gender}
       onChangeText={setGender}
       />
        <TextInput
       style={styles.inputdob} 
       placeholder='dob'
       placeholderTextColor='grey'
       value={dob}
       onChangeText={setDob}
       />
       </View>
         <View>
       <TextInput
       style={styles.inputcontainer} 
       placeholder='phonenumber'
       placeholderTextColor='grey'
       value={phonenumber}
       onChangeText={setPhoneNumber}
       />
       </View>
           <View>
       <TextInput
       style={styles.inputcontainer} 
       placeholder='email'
       placeholderTextColor='grey'
       value={email}
       onChangeText={setEmail}
       />
       </View>
       <View>
       <TextInput
       style={styles.inputcontainer} 
       placeholder='full name'
       placeholderTextColor='grey'
       value={fullname}
       onChangeText={setFullName}
       />
       </View>


    </View>
    <View style={{position:"absolute",bottom:"4%",width:"100%",}}>
    <Pressable style={styles.btn}>
    <Text style={{color:"#fff", fontSize: 18,
    fontWeight: 'bold',}}>Save</Text>
    </Pressable>
    </View>
    </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  para: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:10
  },
   para1: {
    fontSize: 18,
    fontWeight: 'regular',
    textAlign: 'center',
    color:"grey",
    marginTop:10
  },
  inputcontainer:{
    height:37,
    borderWidth:0.7,
    borderRadius:10,
    marginTop:"4%",
    paddingHorizontal:15
  },
   inputmale:{
     width:"45%",
    height:37,
    borderWidth:0.7,
    borderRadius:10,
    marginTop:"4%",
    paddingHorizontal:15
  },
   inputdob:{
    width:"45%",
    height:37,
    borderWidth:0.7,
    borderRadius:10,
    marginTop:"4%",
    paddingHorizontal:15
  },
   btn:{
     width:"90%",
    alignSelf:"center",
    height:37,
    borderWidth:0.7,
    borderRadius:10,
    backgroundColor:"#000",
    alignItems:"center",
    justifyContent:"center"

  },
});


// drazetech

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const convertdigits  = "9876551111"
let sum = 0;
for(let i=0;i<convertdigits.length;i++){
    sum+=parseInt(convertdigits[i]);
}

while(sum>=10){
    let temp =0;
    while(sum>0){
        temp+=sum%10;
        sum= Math.floor(sum/10)
    }
   sum =temp
   
}
console.log("summmmmm",sum)



// 1,  // Console.log([1] == 1);
          //output true

// var x=10;
// var y;
// console.log(x + y);
//output NAN


// Console.log(1 - false);
// false is converted to 0

// true is converted to 1

//output 1-0=1



// Console.log(x);
// Var x=5;
// Console.log(x);
//output  undefined
          // 5



// let a=10;
// let a=5;
// console.log(a);
//output   'a' has already been declared




// let numbers = [30,10, 20, 20, 30, 40, 50, 50];
// let result =numbers.sort((a,b)=>a-b)
// console.log("result is",result);


// let result =[...new Set(numbers)]
// result.unshift(5)



// import { Text, SafeAreaView, StyleSheet,View,FlatList,Pressable } from 'react-native';
// import React,{useState,useEffect} from 'react'
// import axios from 'axios';

// export default function App() {
//   const [products,setProducts]=useState([])
//    const [showdetails,setShowDetais]=useState(true)
//   const fetchLists=async()=>{
//     try{
//       const response=await axios.get('https://dummyjson.com/products')
//       setProducts(response.data.products)
//       console.log(response)
//     }
//     catch(error){
//       console.log("errrorrr",error)
//     }

//   }
//   useEffect(()=>{
//     fetchLists()
//   },[])

//    const dataRenderList=({item})=>(
//      <View style={styles.cardcontainer}>
//      {showdetails && (
//        <>
//      <Text style={{marginBottom:"2%"}}>{item.title}</Text>
//       <Text style={{marginTop:"2%"}}>{item.category}</Text>
//        <Text style={{marginTop:"2%"}}>{item.price}</Text>
//        </>
//        )}
//      </View>
//    )



//   return (
//     <SafeAreaView style={styles.container}>
//   <View style={{}}>
//   <FlatList
//     data={products}
//     keyExtractor={(item)=>item.id.toString()}
//     renderItem={dataRenderList}
  
//   />
//   <View  style={{position:"absolute",bottom:"4%",}}>
//    <Pressable   onPress={()=>setShowDetais(!showdetails)} style={{width:"90%",padding:"3%",backgroundColor:"red",}}>
//    <Text>{showdetails? "hide":"show"}</Text>
//    </Pressable>
//    </View>
  
//   </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     paddingTop: 8,
//   },
//   cardcontainer:{
     
//   }
//   // paragraph: {
//   //   margin: 24,
//   //   fontSize: 18,
//   //   fontWeight: 'bold',
//   //   textAlign: 'center',
//   // },
// });
