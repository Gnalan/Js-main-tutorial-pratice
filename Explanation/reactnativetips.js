// import {
//     View,
//     Text,
//     TextInput,
//     Pressable,
//     FlatList,
//     Keyboard,
// } from "react-native";
// import React, { useRef, useState } from "react";
// import { deviceheight, devicewidth } from "../Utilities/Dimensions";
// import { KeyboardTrackingView } from "react-native-keyboard-tracking-view";

// const Test = () => {
//     const scrollViewRef = useRef(null);
//     const [messagearr, setMessagearr] = useState([]);
//     const [message, setMessage] = useState("");

//     const sendfn = async () => {
//         if (message.length) {
//             const data = [...messagearr];
//             data.push(message);
//             setMessagearr(data);
//             setMessage("");
//         }
//     };

//     return (
//         <View style={{ flex: 1 }}>
//             <View style={{ height: deviceheight * 0.1, backgroundColor: "yellow" }} />
//             <View
//                 style={{
//                     flex: 1,
//                     backgroundColor: "green",
//                     padding: devicewidth * 0.05,
//                 }}
//             >
//                 <FlatList
//                     data={messagearr}
//                     ref={scrollViewRef}
//                     onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
//                     renderItem={({ item }) => (
//                         <View
//                             style={{
//                                 backgroundColor: "blue",
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                                 maxWidth: devicewidth * 0.8,
//                                 alignSelf: "flex-end",
//                                 paddingHorizontal: devicewidth * 0.05,
//                                 marginTop: "5%",
//                                 paddingVertical: devicewidth * 0.025,
//                                 borderRadius: 10,
//                             }}
//                         >
//                             <Text>{item}</Text>
//                         </View>
//                     )}
//                 />
//             </View>

//             <KeyboardTrackingView
//                 style={{
//                     backgroundColor: "pink",
//                     flexDirection: "row",
//                     alignItems: "center",
//                     justifyContent: "space-around",
//                     paddingHorizontal: 10,
//                     paddingVertical: 5,
//                 }}
//             >
//                 <TextInput
//                     placeholder="Enter message"
//                     onChangeText={(text) => setMessage(text)}
//                     value={message}
//                     style={{
//                         flex: 1,
//                         backgroundColor: "#fff",
//                         borderWidth: 1,
//                         borderColor: "#ccc",
//                         borderRadius: 10,
//                         padding: 10,
//                     }}
//                 />
//                 <Pressable
//                     onPress={() => sendfn()}
//                     style={{
//                         width: devicewidth * 0.1,
//                         height: devicewidth * 0.1,
//                         backgroundColor: "red",
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}
//                 >
//                     <Text style={{ color: "#fff" }}>Send</Text>
//                 </Pressable>
//             </KeyboardTrackingView>
//         </View>
//     );
// };

// export default Test;



// //   chat


// const [keyboardHeight, setKeyboardHeight] = useState(0);
// const [keyboardVisible, setKeyboardVisible] = useState(true)

// useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//         'keyboardDidShow',
//         (event) => {
//             var test = pxToPercentage(event.endCoordinates.height, "height")
//             setKeyboardHeight(Platform.OS == "ios" ? test : event.endCoordinates.height);
//             setKeyboardVisible(false);

//         }
//     );

//     const keyboardDidHideListener = Keyboard.addListener(
//         'keyboardDidHide',
//         () => {
//             setKeyboardHeight(0);
//             setKeyboardVisible(true);
//         }
//     );

//     return () => {
//         keyboardDidShowListener.remove();
//         keyboardDidHideListener.remove();
//     };
// }, []);

// {
//     keyboardVisible &&
//     <View style={{ width: "100%", height: windowheight * 0.1, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 15, }}>
//         <Pressabl>

//         </Pressabl>
//     </View>
// }




// // smalldevice condition

// import React from 'react';
// import { View, Platform, StyleSheet, Dimensions } from 'react-native';

// const { width } = Dimensions.get('window');
// const isSmallDevice = width < 360;

// const App = () => {
//     return (
//         <View
//             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//             style={[styles.typerTop, { bottom: isSmallDevice ? '6%' : '3%' }]}
//         >
//             {/ Your content here /}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     typerTop: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         gap: 10,
//         position: 'absolute',
//         width: '100%',
//         paddingLeft: 15,
//         paddingRight: 15,
//         backgroundColor: 'red',
//     },
// });

// export default App;



// // backhandler on mobile bottom back  screen

// useFocusEffect(
//     React.useCallback(() => {
//         const backAction = () => {

//             Alert.alert('Hold on!', 'Are you sure you want to go back ?', [
//                 {
//                     text: 'Cancel',
//                     onPress: () => null,
//                     style: 'cancel',
//                 },
//                 {
//                     text: 'YES',
//                     onPress: () => navigation.navigate("ProfileHome"),
//                 },
//             ]);
//             return true;
//         };

//         const backHandler = BackHandler.addEventListener(
//             'hardwareBackPress',
//             backAction
//         );

//         return () => backHandler.remove();
//     }, [])
// );

// // --------------refreshcontroller----------

// <ScrollView
//     refreshControl={
//         <RefreshControl
//             refreshing={refreshing}
//             onRefresh={handleEventList}
//         />
// const [refreshing, setRefreshing] = useState(false);




// // linear gradient
// Common x and y values:
// Top to Bottom Gradient:

// start={{ x: 0, y: 0 }}
// end={{ x: 0, y: 1 }}
// Left to Right Gradient:

// start={{ x: 0, y: 0 }}
// end={{ x: 1, y: 0 }}
// Diagonal Gradient (Top-Left to Bottom-Right):

// start={{ x: 0, y: 0 }}
// end={{ x: 1, y: 1 }}
// Diagonal Gradient (Bottom-Left to Top-Right):

// start={{ x: 0, y: 1 }}
// end={{ x: 1, y: 0 }}
// You can experiment with different values of x and y to create various gradient angles. For example, if you want a steeper gradient:

// jsx
// Copy code
// start={{ x: 0.5, y: 0 }}
// end={{ x: 1, y: 1 }}
// This gradient will start at the middle of the top (because x: 0.5), and end at the bottom-right.

// Feel free to modify the x and y values to get the gradient effect you prefer!




//  export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
//  sudo update-alternatives --config java
//  ./gradlew --version






// modal pop up design


// import { View, Text, Pressable, ScrollView, StyleSheet, Platform, TextInput } from 'react-native'
// import React, { useContext, useState } from 'react'
// import { Modal } from 'react-native'
// import themeContext from '../../Utlites/themecontext'
// import { borderradius, windowheight, windowwidth } from '../../Utlites/dimenions'
// import { RFValue } from 'react-native-responsive-fontsize'
// import { Fonts } from '../../Utlites/fonts'
// import { Dropdown } from 'react-native-element-dropdown';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Colors } from '../../Utlites/images'

// const LocationPopUp = ({ visible, onclose }) => {
//     const closefn = () => {
//         onclose(false)
//     }
//     const theme = useContext(themeContext)
//     const [value, setValue] = useState(null);
//     const styles = style(theme);


//     return (
//         <Modal
//             visible={visible}
//             transparent={true}
//             animationType='fade'
//             onRequestClose={() => closefn()}

//         >
//             <View onStartShouldSetResponder={() => closefn()} style={styles.container}>
//                 <View style={styles.modalcontainer}>
//                 </View>
//             </View>
//         </Modal>


//     )
// }

// export default LocationPopUp

// const style = (theme) => StyleSheet.create({
//     container: {
//         flex: 1,
//         width: "100%",
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',

//     },
//     modalcontainer: {
//         backgroundColor: "#fff",
//         width: '90%',
//         height: windowheight * 0.210,
//         borderRadius: borderradius * 0.3,
//         paddingHorizontal: "6%",
//         paddingVertical: "4%",

//     },

// });
//  <LocationPopUp visible={visible} onclose={setVisible} />





//  IOS setup



// Nvm use 18(node version)
// Node i 
// sudo gem install cocoapods
// Cd iOS 
// Pod install 

// workspace create gum and workspace click panna

// 1.Next add font family— go iOS to info.plist file add this

// <key>UIAppFonts</key>
//     <array>
//         <string>Outfit-Bold.ttf</string>
//         <string>Outfit-Black.ttf</string>
//         <string>Outfit-ExtraBold.ttf</string>
//         <string>Outfit-ExtraLight.ttf</string>
//         <string>Outfit-Light.ttf</string>
//         <string>Outfit-Medium.ttf</string>
//         <string>Outfit-Regular.ttf</string>
//         <string>Outfit-SemiBold.ttf</string>
//         <string>Outfit-Thin.ttf</string>
//    </array>
//  And create folder on src> assets>fonts to adds fonts
//   And go terminal  npx react-native-asset add this


// 2.Next vector icons setup
// Add info.plist la

//  <string>AntDesign.ttf</string>
//   <string>Entypo.ttf</string>
//   <string>EvilIcons.ttf</string>
//   <string>Feather.ttf</string>
//   <string>FontAwesome.ttf</string>
//   <string>FontAwesome5_Brands.ttf</string>
//   <string>FontAwesome5_Regular.ttf</string>
//   <string>FontAwesome5_Solid.ttf</string>
//   <string>FontAwesome6_Brands.ttf</string>
//   <string>FontAwesome6_Regular.ttf</string>
//   <string>FontAwesome6_Solid.ttf</string>
//   <string>Foundation.ttf</string>
//   <string>Ionicons.ttf</string>
//   <string>MaterialIcons.ttf</string>
//   <string>MaterialCommunityIcons.ttf</string>
//   <string>SimpleLineIcons.ttf</string>
//   <string>Octicons.ttf</string>
//   <string>Zocial.ttf</string>
//   <string>Fontisto.ttf</string>
  
// And go no modules to react native vector icons folder add fonts folder drag  to add x code(refer video 12.25 min)

// And cache clear
// And
//  embed pod frameworks-last remove panna
//  copy pod resurces-last remove panna



// imagebackground

{/* <ImageBackground source={Images.hotelpic1} resizeMode='contain' style={{
                    height: deviceheight * 0.180, width: "100%",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: 'rgba(0,0,0,0.5)',
                    opacity:0.3
                    
                  }}>
                    <View>
                      <Text style={{
                        color: "#fff",
                        fontSize: RFPercentage(2.20),
                        fontFamily:Fonsts.Regular,
                        textAlign: 'center',
                      }}>View all photos</Text>
                    </View>
                  </ImageBackground> */}



//  height: isSmallDevice ? deviceHeight * 0.960 :  deviceHeight*0.9

// small device:   const deviceHeight = Dimensions.get('window').height;
// const isSmallDevice = deviceHeight < 600;




// react native svg for verision 71.0.1

// metr.config file ------                                                                                                                                                                      
                                                                                                                                                                                                       
// const { getDefaultConfig } = require('metro-config');

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts },
//   } = await getDefaultConfig();
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     },
//     resolver: {
//       assetExts: assetExts.filter((ext) => ext !== 'svg'),
//       sourceExts: [...sourceExts, 'svg'],
//     },
//   };
// })();
// package is react native svg and svg transfer install panna



// import React, { useContext, useEffect, useState, useRef, useCallback } from "react";
// import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Animated, Image, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
// import Header from "../../Navigations/Header";
// import { borderradius, deviceheight, devicewidth } from "../../Utilities/Dimensions";
// import { RFPercentage,RFValue} from "react-native-responsive-fontsize";
// import { Fonts } from "../../Utilities/fonts";
// import themeContext from "../../Utilities/themecontext";
// import { Input, Icon as Icn } from "react-native-elements";

// import { ScrollView } from "react-native-gesture-handler";
// import { showImage } from "../../Utilities/commenfuctions";
// import { CurrentWalletArray, GetCurrentIndex, UseWalletArray } from "../../Utilities/usestorage";
// import LottieView from "lottie-react-native";
// import { lotties } from "../../Utilities/images";
// import { selectCurrencyForTransaction } from "../../Redux/Actions/Defaultcurrencies";
// import { useDispatch, useSelector, } from "react-redux";
// import { C } from "../../Utilities/colors";
// import Eth from "../../Assets/caexicons/eth.svg"
// import Arrow from "../../Assets/caexicons/rightarrow.svg"
// import LinearGradient from "react-native-linear-gradient";
// import Swap1 from "../../Assets/caexicons/swap1.svg"
// import Swap2 from "../../Assets/caexicons/swap2.svg"
// import Button from "../../Components/Button";
// import NetworkSelect from "./networkselect";
// import { helperSelector, update_barcontent, update_statusbarcolor } from "../../Redux/helper";
// import { useFocusEffect } from "@react-navigation/native";
// import { EstimateSwaphooks, getSwapCurrencies, getSwapPairs } from "../../Utilities/axios";

// import { TextInput } from "react-native";
// import { Toastfn } from "../../Utilities/toast";
// import { cryptoBlanace, tokenBlanace } from "../../Network_controllers/EVM/Evm_contracthook";
// import { Card } from "react-native-paper";

// export default function Swapmain({ navigation }) {
//     const theme = useContext(themeContext);
//     const style = styles(theme);
//     const rotation = useRef(new Animated.Value(0)).current;
//     const [modalvisile, setModalvisible] = useState(false);

//     const [currencies, setCurrencies] = useState([]);
//     const [referencekey, setReferencekey] = useState([]);

//     const [fromcurrency, setFromcurrency] = useState();
//     const [tocurrency, setTocurrency] = useState();
//     const [loader , setLoader] = useState(false);
//     const [pairlimit , setPairlimit] = useState();
//     const [error , setError] = useState("");

//     const [fromvalue , setFromvalue] = useState(0);
//     const [refresh , setRefresh] = useState(0);
//     const [estimate , setEstimate] = useState(false);
//     const [balance , setBalance] = useState(0)

//     const handlePress = () => {
//         // Reset rotation to 0 before starting
//         rotation.setValue(0);

//         Animated.timing(rotation, {
//             toValue: 1, // Rotate 360 degrees
//             duration: 500, // Animation duration in milliseconds
//             useNativeDriver: true, // Use native driver for better performance
//         }).start();
//     };

//     // Interpolate rotation value to degrees
//     const rotateStyle = {
//         transform: [
//             {
//                 rotate: rotation.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: ["0deg", "180deg"], // Full rotation
//                 }),
//             },
//         ],
//     };
//     const dispatch = useDispatch();
//     useFocusEffect(
//         React.useCallback(() => {
//             dispatch(update_statusbarcolor(theme.background))
//             dispatch(update_barcontent(theme.swaphome))
//         }, [])

//     )
//     useEffect(() => {
//         Getswapdetail();
//         // GetPair()
//     }, [])

//     const Getswapdetail = async () => {
//         let result = await getSwapCurrencies();
//         console.log("result in swaps", result?.result?.length);
//         setCurrencies(result?.result)
//     }

//     useEffect(() => {
//         if(fromcurrency?.changelly?.ticker && tocurrency?.changelly?.ticker){
//             GetPair();
//         }
//     } , [fromcurrency , tocurrency])

//     useEffect(() => {
//         handleGetbalance();
//     } , [fromcurrency])

//     const GetPair = async () => {
//         try {
//             setLoader(true);
//             let result = await getSwapPairs({from : fromcurrency?.changelly?.ticker , to : tocurrency?.changelly?.ticker});
//             console.log("result in pair", result?.result?.minAmountFloat);
//             if(result?.status){
//                 setPairlimit(result?.result);
//                 setFromvalue(parseFloat(result?.result?.minAmountFloat));
//                 setRefresh(refresh+1)
//             }
//             else{
//                 Toastfn(result?.message);
//             }
//             setLoader(false);
//         }
//         catch (e) {
//             console.log("Error on get pair", e);
//         }
//     }


//     const handlefrom = (e) => {
//         try{
//             setFromvalue(e);
//             if(parseFloat(e) > parseFloat(pairlimit?.minAmountFloat) && parseFloat(e) < parseFloat(pairlimit?.maxAmountFloat)){
//                 setError("")
//             }
//             else{
//                 setError("Invalid Value")
//             }
//         }
//         catch(e){
//             console.log("Error on handle from" , e);
//         }
//     }

//     const handleGetbalance = async() => {
//         try{
//             var walletarray = UseWalletArray();
//             var currenteindex = GetCurrentIndex();
//             let data = walletarray[currenteindex]
//             if(fromcurrency?.type == "crypto"){
//                 let balance = await cryptoBlanace(
//                     fromcurrency?.network == 'TRX' ? data[0].privateKey.tron : fromcurrency?.network == 'BTC' ? data[0].privateKey.btc : data[0].privateKey.evm,
//                     fromcurrency?.network == 'TRX' ? "TRC20" : fromcurrency?.network == 'BNB' ? "BEP20" : fromcurrency?.network == 'ETH' ? "ERC20" : fromcurrency?.network == "POL" ? "POL" : "BTC",
//                     fromcurrency?.network == 'TRX' ? data[0].walletaddress.tron : fromcurrency?.network == 'BTC' ? data[0].walletaddress.btc : data[0].walletaddress.evm
//                 );
//                 console.log("balancdsdfgasdgasdgasg" , balance);
//                 setBalance(balance);
//             }
//             else{
//                 if (fromcurrency?.network == 'TRX') {
//                     let balance = await tokenBlanace(fromcurrency?.changelly?.contractAddress, data[0].privateKey.tron, item?.type, item.decimals, data[0].walletaddress.tron, item.network)//to get token balnace
//                     setBalance(balance);
//                 }
//                 else {
//                     let balance = await tokenBlanace(fromcurrency?.changelly?.contractAddress, data[0].privateKey.evm, item?.type, item.decimals, data[0].walletaddress.evm, item.network)//to get token balnace
//                     setBalance(balance);
//                 }
//             }
//         }
//         catch(e){
//             console.log("Error on handle get balance" , e);
//         }
//     }

//     const handleto = (e) => {
//         try{}
//         catch(e){
//             console.log("Error on handle to" , e);
//         }
//     }


//     const handleEstimateSwap = async() => {
//         try{
//             let result = await EstimateSwaphooks({from : fromcurrency?.changelly?.ticker , 
//                 to : tocurrency?.changelly?.ticker, amount : fromvalue});

//             console.log("result in estimatew swap" , result);
            
//         }
//         catch(e){
//             console.log("Error on handle estimate swap" , e);
//         }
//     }

//     const handleCreateTransaction = async() => {
//         try{}
//         catch(e){
//             console.log("error on handle create traansaction" , e);
//         }
//     }

//       const [keyboardVisible, setKeyboardVisible] = useState(true)
    
//         useEffect(() => {
//             const keyboardDidShowListener = Keyboard.addListener(
//                 'keyboardDidShow',
//                 () => {
    
    
//                     setKeyboardVisible(false);
    
//                 }
//             );
    
//             const keyboardDidHideListener = Keyboard.addListener(
//                 'keyboardDidHide',
//                 () => {
    
//                     setKeyboardVisible(true);
//                 }
//             );
    
//             return () => {
//                 keyboardDidShowListener.remove();
//                 keyboardDidHideListener.remove();
//             };
//         }, []);
    


//     return (
//          <KeyboardAvoidingView style={style.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
//         <SafeAreaView style={style.container} >
//             {/ <StatusBar  barStyle={ theme.theme =="dark"?"light-content":"dark-content"}/> /}
//             <View style={{ flex: 1, backgroundColor: theme.background }} >
//                 <Header title={"Swap"} />
//                 <View  onStartShouldSetResponder={() => Keyboard.dismiss()} style={style.box_container} >
//                     <ScrollView  showsVerticalScrollIndicator={false}>
//                          <View style={{width:"100%",height:deviceheight,}}>
//                     <View style={{ marginTop: "12%", alignItems: "center", justifyContent: "center" }}>
//                         <Text style={style.para}>Current Wallet Balance</Text>
//                         <Text style={style.para1}>$ 1,42,000</Text>
//                         <Text style={style.amtstyle}>Min Amount: <Text style={style.amt}>{pairlimit?.minAmountFloat} {fromcurrency?.currencySymbol}</Text></Text>
//                         <Text style={style.amtstyle}>Max Amount: <Text style={style.amt}>{pairlimit?.maxAmountFloat} {fromcurrency?.currencySymbol}</Text></Text>
                        
//                     </View>
//                     <Card style={style.card_container} >
//                         <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
//                             <Text style={style.heading}>You Send</Text>
//                             {/ <Text style={style.amtstyle}>Max Amount: <Text style={style.amt}>0.0008</Text></Text> /}
//                         </View>
//                         <View style={style.innercard}>
//                             <Pressable
//                                 onPress={() => {
//                                     setReferencekey("from");
//                                     setModalvisible(!modalvisile)
//                                 }}
//                                 style={fromcurrency?.currencySymbol ? style.networkbtn : style.networkbtn1}>
//                                 <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
//                                     {/ <Eth width={devicewidth  0.1} height={devicewidth  0.1} /> /}
//                                     {fromcurrency?.changelly?.image
//                                     ?
//                                     <Pressable style={{ width: devicewidth  0.120, height: devicewidth  0.120, borderRadius: borderradius * 2 }}>
//                                         <Image source={{ uri: fromcurrency?.changelly?.image }} style={{ width: "100%", height: "100%", }} resizeMode="contain" />
//                                     </Pressable>:
//                                     null
//                                      }
//                                     <Text style={style.heading1}>{fromcurrency?.currencySymbol ? fromcurrency?.currencySymbol : "Select"}</Text>
//                                 </View>
//                                 <View>
//                                     <Arrow width={devicewidth  0.06} height={devicewidth  0.06} />
//                                 </View>
//                             </Pressable>

//                             {/* <View style={{}}>
//                                 <Text style={style.para2}>$ 1,42,000</Text>
//                             </View> /}
// {console.log("fromvalue" , fromvalue)
// }
//                             <View style={{ width: "60%", alignItems: "center", }}>
//                                 <TextInput
//                                     style={style.para2}
//                                     placeholder="From amount"
//                                     placeholderTextColor={theme.theme == "dark" ? "#A3A3B7" : "#0D0D0D"}
//                                     keyboardType="decimal-pad"
//                                     // defaultValue={fromvalue}
//                                     value={fromvalue ? fromvalue : 0}
//                                     onChangeText={handlefrom}
//                                 />
                                
//                             </View>
                            
//                         </View>

                       
//                             <Text style={style.errtxt}>{error}</Text>
                          
//                         <View style={{ alignItems: "flex-end", marginTop: "6%" }}>
//                             <Pressable
//                                 onPress={handlePress}
//                                 style={{ backgroundColor: C.secondary, borderRadius: borderradius * 2.2, height: deviceheight / 22, width: devicewidth / 10, alignItems: "center", justifyContent: "center", }}>
//                                 <Animated.View style={rotateStyle}>
//                                     <Swap2 width={devicewidth  0.06} height={devicewidth  0.06} />
//                                 </Animated.View>
//                             </Pressable>
//                         </View>

//                         <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "1%" }}>
//                             <Text style={style.heading}>You Get</Text>
//                         </View>
//                         <View style={style.innercard}>
//                             <Pressable
//                                 onPress={() => {
//                                     setReferencekey("to")
//                                     setModalvisible(!modalvisile)
//                                 }}
//                                 style={tocurrency?.currencySymbol ? style.networkbtn : style.networkbtn1}>
//                                 <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
//                                 {tocurrency?.changelly?.image ?
//                                 <Pressable style={{ width: devicewidth  0.120, height: devicewidth  0.120, borderRadius: borderradius * 2 }}>
//                                         <Image source={{ uri: tocurrency?.changelly?.image }} style={{ width: "100%", height: "100%", }} resizeMode="contain" />
//                                     </Pressable>:
//                                     null}
//                                     <Text style={style.heading1}>{tocurrency?.currencySymbol ? tocurrency?.currencySymbol : "Select"}</Text>
//                                 </View>
//                                 <View>
//                                     <Arrow width={devicewidth  0.06} height={devicewidth  0.06} />
//                                 </View>
//                             </Pressable>

//                             {/ <View style={{}}>
//                                 <Text style={style.para2}>$ 1,42,000</Text>
//                             </View> */}
//                             <View style={{ width: "60%", alignItems: "center", }}>
//                                 <TextInput
//                                     style={style.para2}
//                                     placeholder="To amount"
//                                     placeholderTextColor={theme.theme == "dark" ? "#A3A3B7" : "#0D0D0D"}
//                                     keyboardType="decimal-pad"
//                                 />
//                             </View>






//                         </View>

//                     </Card>
//                     </View>
//                     </ScrollView>

//                 </View>
//             </View>
//             {keyboardVisible &&
//             <View style={{ position: "absolute", left: 0, right: 0, bottom: "6%", alignItems: "center", justifyContent: "center" }}>

//                 <View style={{
//                     width: "100%",
//                     alignItems: "center"
//                 }}>
//                     {estimate? <TouchableOpacity
//                         onPress={() => navigation.navigate("Swapconfirm")}
//                         style={{
//                             width: "90%",
//                             alignSelf: "center"
//                         }} >
//                         <Button title={"Swap"} colors={[C.secondary, C.secondary]} />
//                     </TouchableOpacity> 
//                     :
//                     <TouchableOpacity
//                         onPress={() => {
//                             if(fromcurrency?.changelly?.ticker && tocurrency?.changelly?.ticker && fromvalue && !error)
//                             handleEstimateSwap()
//                         }}
//                         style={{
//                             width: "90%",
//                             alignSelf: "center"
//                         }} >
//                         <Button title={"Estimate"} colors={[C.secondary, C.secondary]} />
//                     </TouchableOpacity>    
//                 }




//                 </View>

//             </View>
// }
//             <NetworkSelect visible={modalvisile} onClose={setModalvisible} currency={currencies}
//                 referencekey={referencekey}
//                 onSetCurrency={(e) => {
//                     if (referencekey == "from") {
//                         setFromcurrency(e);
//                     }
//                     else {
//                         setTocurrency(e);
//                     }
//                 }}
//             />
//         </SafeAreaView>
//         </KeyboardAvoidingView>


//     )
// }

// const styles = (theme) =>
//     StyleSheet.create({
//         container: {
//             flex: 1,

//         },
//         box_container: {
//             // paddingHorizontal: "3%",
//             // justifyContent: "center",
//             // alignItems: 'center',
//             height: deviceheight * 0.90,
//             // backgroundColor: "red"

//         },
//         card_container: {
//             width: "92.5%",
//             marginTop: "6%",
//             backgroundColor: theme.secondarybg,
//             alignSelf: "center",
//             borderRadius: borderradius * 0.5,
//             paddingVertical: "4%",
//             paddingHorizontal: "4%",


//         },
//         innercard: {
//             width: "100%",
//             marginTop: "6%",
//             backgroundColor: theme.theme == "dark" ? "#EAFFBA" : "#FFFFFF",
//             borderRadius: borderradius * 2,
//             paddingHorizontal: "3%",
//             height: deviceheight * 0.07,
//             flexDirection: "row",
//             justifyContent: "space-between",
//             alignItems: "center"

//         },
//         networkbtn: {
//             width: "38%",
//             backgroundColor: "#19181C",
//             borderRadius: borderradius * 2,
//             paddingHorizontal: "1.5%",
//             height: deviceheight * 0.0650,
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between"

//         },
//         networkbtn1: {
//             width: "38%",
//             backgroundColor: "#19181C",
//             borderRadius: borderradius * 2,
//             paddingHorizontal: "1.5%",
//             height: deviceheight * 0.0650,
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent:"center"
//         },
//         para: {
//             fontSize: RFPercentage(2.15),
//             color: "#808080",
//             fontFamily: Fonts.Regular,
//         },
//         para1: {
//             fontSize: RFPercentage(4.5),
//             color: theme.text,
//             fontFamily: Fonts.Bold,
//             marginTop: "3%"

//         },
//         para2: {
//             fontSize: RFPercentage(1.90),
//             color: C.black,
//             fontFamily: Fonts.Medium,
//             textAlign: "right",
//             width: "100%",
//             height:"100%",
//             // backgroundColor:"red"


//         },
//         heading: {
//             fontSize: RFPercentage(2.15),
//             color: theme.greyblack,
//             fontFamily: Fonts.Regular,
//         },
//         heading1: {
//             fontSize: RFPercentage(2.35),
//             color: C.white,
//             fontFamily: Fonts.Regular,
//             // marginRight: "2%"
//         },
//         amtstyle: {
//             fontSize: RFPercentage(2.30),
//             color: theme.greyblack,
//             fontFamily: Fonts.Regular,
//             marginTop:"2%",
       
//         },
//         amt: {
//             fontSize: RFPercentage(2.30),
//             color: theme.text,
//             fontFamily: Fonts.Bold,
//         },
//         // parablue: {
//         //     fontSize: RFPercentage(1.95),
//         //     color: theme.text,
//         //     fontFamily: Fonts.Regular,
//         //     textAlign: 'center'
//         // },

//         // create_button: {
//         //     marginTop: "5%",
//         //     width: "92.5%",
//         //     alignSelf: "center"
//         // },

//         // contentsec: {
//         //     justifyContent: "center",
//         //     alignSelf: "center",
//         //     marginBottom: "7%"
//         // },
//         // gradTitle: {
//         //     fontSize: RFPercentage(2.85),
//         //     color: "#9ACFFF",
//         //     fontFamily: Fonts.Medium,
//         //     textAlign: "center"

//         // },
//         // gradTitle1: {
//         //     fontSize: RFPercentage(2.55),
//         //     color: "#9ACFFF",
//         //     fontFamily: Fonts.Medium,
//         //     textAlign: "center"

//         // },
//         // imgsec: {
//         //     marginTop: "35%",
//         //     marginBottom: "3%"
//         // },
//         // Signinsec: {
//         //     marginTop: "5%"
//         // },
//         // inputsec: {
//         //     marginTop: '2%',
//         //     height: deviceheight * 0.055,
//         //     backgroundColor: "transparent",


//         // },
//         // searchinput: {
//         //     fontSize: RFPercentage(2.25),
//         //     // padding: 7,
//         //     alignSelf: "center",
//         //     color: theme.text
//         // },
//         // containersearchinput: {
//         //     width: "100%",
//         //     alignSelf: "center",
//         //     borderWidth: 1.2,
//         //     borderColor: theme.secondarybg,
//         //     borderRadius: borderradius * 0.7,
//         //     height: deviceheight * 0.068,
//         //     backgroundColor: theme.secondarybg,
//         //     paddingHorizontal: "3%",

//         // },
//         // logoname: {
//         //     flexDirection: "row",
//         //     gap: 5,
//         //     alignItems: 'center'
//         // },
//         // coinlistsec: {
//         //     flexDirection: "row",
//         //     justifyContent: 'space-between',
//         //     alignItems: 'center',
//         //     paddingVertical: "1%",
//         //     marginBottom: "2%"
//         // },
//         errtxt: {
//             fontFamily: Fonts.Regular,
//             color: "red",
//             fontSize: RFValue(13),
//             marginTop:"1.5%",
//             textAlign:"right"
//             // backgroundColor:"red"
           
//         },



//     })





// Fire base fcm token genarate
// import React, { useEffect } from 'react';
// import { View, Text, Alert, Platform } from 'react-native';
// import messaging from '@react-native-firebase/messaging';

// const Test = () => {
  
//   useEffect(() => {
//     requestUserPermission();

//     // Listen for token refresh
//     const unsubscribe = messaging().onTokenRefresh(token => {
//       console.log('FCM Token Refreshed:', token);
//       // Send token to your server if needed
//     });

//     return unsubscribe;
//   }, []);

//   // Request user permission for notifications
//   const requestUserPermission = async () => {
//     if (Platform.OS === 'ios') {
//       const authStatus = await messaging().requestPermission();
//       const enabled =
//         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//       if (!enabled) {
//         Alert.alert('Permission Denied', 'Notifications will not work without permission.');
//         return;
//       }
//     }

//     getFCMToken();
//   };

//   // Get FCM token
//   const getFCMToken = async () => {
//     try {
//       const token = await messaging().getToken();
//       if (token) {
//         console.log('FCM Token:', token);
//         // Send token to your backend if needed
//       } else {
//         console.log('Failed to get FCM token');
//       }
//     } catch (error) {
//       console.error('Error getting FCM token:', error);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>FCM Token Handling</Text>
//     </View>
//   );
// };

// export default Test;



