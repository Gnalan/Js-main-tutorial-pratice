 // // pratice 1
// import React,{useEffect,useState} from'react';
// import {Text,View,StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native';
// const App=()=>{
//   const[count,setCount]=useState(0);
//   useEffect(()=>{
//     console.warn("useeffect has called")
//   })
//   return(
//     <ScrollView style={{   flex:1,
//     justifyContent:"center",
//     alignItems:"center",
//   }}>
//     <View style={styles.container}>
//     <Text style={{marginBottom:10}}>you click {count} times</Text>
//      <TouchableOpacity style={{width:"50%",height:"10%",borderWidth:1,backgroundColor:"blue",alignItems:"center",justifyContent:"center",marginBottom:30}} onPress={()=>setCount(count+1)}>
//       <Text>Add</Text>
//      </TouchableOpacity>
//      <View style={{borderWidth:1,marginBottom:10}}>
//      <Image source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Ftopics%2Freact-ui&psig=AOvVaw1klYWSUz_fmBg-xlC-q13C&ust=1692612383247000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMCv_6-m7IADFQAAAAAdAAAAABAE"}} style={{width:50,height:100,borderWidth:2}}/>
//      </View>
//      <Image source={require('./assets/snack-icon.png')}/>
//     </View>
//     </ScrollView>
//   )

// }
// const styles=StyleSheet.create({
//  container:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:"center",
  
    
//  }
// })
// export default App;




// pratice 2 class component

// import React,{Component} from 'react';
// import{Text,View,TouchableOpacity} from 'react-native';
// class App extends Component{
//     constructor(props){
//       super(props)
//       this.state={
//         name:"guna",
//         deg:"mca",
//         place:"svg"
//       }
//     }
    
//     componentDidMount(){
//       setTimeout(()=>{
//         this.setState({place:"rajai"})
//       },5000)
//     }
     
//      componentDidUpdate(){
//        setTimeout(()=>{
//          this.setState({place:"surandai"})
//        },3000)
//      }
//      componentWillUnmount(){
//        console.warn("unmount has called")
//      }


//     render(){
//       return(
//         <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
//         <Text>your name is {this.state.name} {this.state.deg} {this.state.place}</Text>
//         <TouchableOpacity style={{borderWidth:1,height:50,width:100,alignItems:"center",justifyContent:"center",backgroundColor:"blue"}} onPress={()=>{
//           this.setState({place:"chennai"})
//         }}>
//          <Text>Change</Text>
//         </TouchableOpacity>
//         </View>
//       )
//     }
    
// }
// export default App;



// pratice:3-- three button click  event

// import React,{useEffect,useState} from 'react';
// import {View,ScrollView,Button, Text} from 'react-native'

  
// const App=()=>{
//    const[content,setContent]=useState("add")
//   return(
//     <View style={{flex:1,justifyContent:"center"}}>
//     <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginBottom:30}}>
//      <Button title="ADD" onPress={()=>setContent("add")} />
//       <Button title="Edit" onPress={()=>setContent("edit")} />
//       <Button title="Delete" onPress={()=>setContent("delete")} />
//     </View>
//     <View style={{alignItems:"center",justifyContent:"center"}}>
//     <Text> display are {content}</Text>
//     </View>

//     </View>
//   )

// }
// export default App;


// pratice:4-- increment decrement same the textcolor and color name change task

// import React,{useEffect,useState} from 'react';
// import {View,Button,Text} from'react-native';

// const App=()=>{
//   const[count,setCount]=useState(0);
//   const[color,setColor]=useState("blue")
//   const[deccolor,setDeccolor]=useState("blue")
//   const[textColor,settextColor]=useState("black")
//   const incrementcount=()=>{
//     setCount(count+1)
//      setColor("green")
//     settextColor("green")
//     }

//   const decrementcount=()=>{
//     setCount(count-1)
//     setDeccolor("red")
//     settextColor("red")
   
//   }
//   return(
//     <View style={{flex:1,justifyContent:"center"}}>
//     <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",marginBottom:10}}>
//     <Button title="Increment" onPress={incrementcount}  color={color}/>
//     <Button title="decrement" onPress={decrementcount}  color={deccolor}/>
//     </View>
//     <View style={{justifyContent:"center",alignItems:"center",}}>
//     <Text> increment value is {count} color is <Text style={{color:textColor}}>{textColor} </Text> </Text>
//     </View>
     
//     </View>
//   )
// }
// export default App;




// pratice5:--Array of object using flat list

// import React,{useeffect,useState} from 'react';
// import {View,Text,FlatList} from 'react-native';
//  const App=()=>{
//    const [user,setUser]=useState([])
//     const Data = [
//   { id: '1', name: 'Item 1' },
//   { id: '2', name: 'Item 2' },
//   { id: '3', name: 'Item 3' },
//   { id: '3', name: 'Item 3' },
//  ];
    
//  const renderResult=({item})=>{
//    return(
//      <View style={{borderWidth:1,borderRadius:5,padding:10,marginVertical:15,}}>
//       <Text><Text style={{fontWeight:"bold"}}>id:</Text>{item.id}</Text>
//       <View style={{}}>
//         <Text><Text style={{fontWeight:"bold"}}>name:</Text>{item.name}</Text>
//       </View>

//      </View>
//    )
//  }


//    return(
//      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
//      <FlatList
//      data={Data} 
//      keyExtractor={(Item)=>Item.id}
//      renderItem={renderResult}
     
//      />

//      </View>

//    )

//  }
// export default App


// pratice:6---fetch data using then catch method


// import React,{useState,useEffect} from 'react'
// import{View,Text,FlatList} from "react-native"
 
// const App=()=>{
//   const[user,setUser]=useState([])
//   const fetchingDta=()=>{
//     const responseData= fetch("https://jsonplaceholder.typicode.com/comments").then(response=>response.json()).then(createData=>setUser(createData)).catch(err=>{
//       console.warn("error",err)
//      }
//     )
//    console.warn(responseData)
//   }

//   useEffect(()=>{
//     fetchingDta()
//   },[])


// const renderResult=({item})=>{
//   return(
    
//      <View style={{borderWidth:1,borderRadius:5,backgroundColor:'white',padding:10,marginVertical:10,alignItems:"center",justifyContent:"center",}}>
//      <View style={{}} >
//      <View style={{justifyContent:"space-between",alignItems:"center"}}>
//     <Text><Text style={{fontWeight:"bold"}}>id: </Text>{item.id}</Text>
//     </View>
//      <View style={{justifyContent:"space-between",alignItems:"center"}}>
//     <Text><Text style={{fontWeight:"bold"}}>name: </Text>{item.name}</Text>
//     </View>
//      <View style={{justifyContent:"space-between",alignItems:"center"}}>
//     <Text><Text style={{fontWeight:"bold"}}>emai: </Text>{item.email}</Text>
//     </View>
//      <View style={{justifyContent:"space-between",alignItems:"center",}}>
//     <Text><Text style={{fontWeight:"bold",textAlign:"center"}}>body: </Text>{item.body}</Text>
//     </View>
//     </View>
//     </View>
    
   
//   )
// }



//   return(
//      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
//       <View>
//      <Text style={{}}>course details</Text>
//      </View>
//      <FlatList
//      data={user}
//      keyExtractor={(item)=>item.id}
//      renderItem={renderResult}
     
//      />
//      </View>
//   )
// } 
// export default App;













