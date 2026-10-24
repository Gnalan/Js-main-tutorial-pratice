// நீங்கள் எழுதிய ஜாவாஸ்கிரிப்ட் (JavaScript) அரே (Array) குறிப்புகள் மிகவும் அருமை! நீங்கள் விட்டுப்போன **`unshift`** மற்றும் இந்த 3 முறைகளின் (Methods) சுருக்கமான விளக்கங்களைப் பார்ப்போம்:

// ### 1. `push()`

// * **வேலை:** Array-ன் **கடைசியில் (End)** புதிய elements-ஐ சேர்க்கும்.
// * **உங்கள் கோட் விளக்கம்:**
// ```javascript
// var arr = [1, 3, 5, 6];
// document.write("push", arr.push(7, 7, 7)); // இது புதிய array-ன் நீளத்தை (Length = 7) প্রিন்ட் செய்யும்
// document.write(arr); // [1, 3, 5, 6, 7, 7, 7] என முழு array-வும் print ஆகும்

// ### 2. `unshift()` *(நீங்கள் விட்டுப்போன பகுதி)*

// * **வேலை:** `push` கடைசியில் சேர்ப்பது போல, `unshift` array-ன் **ஆரம்பத்தில் (Beginning / First)** புதிய elements-ஐ சேர்க்கும்.
// * **எடுத்துக்காட்டு:**
// ```javascript
// const arr = [3, 4, 5];
// arr.unshift(1, 2); 
// console.log(arr); // Output: [1, 2, 3, 4, 5] (ஆரம்பத்தில் 1, 2 சேர்ந்துவிட்டது)

// ### 3. `slice()`

// * **நீங்கள் எழுதிய குறிப்பு மிகச் சரி:** `arr.slice(2, 4)` என்றால் **index 2 மற்றும் 3** மட்டும் தான் கிடைக்கும் (முடிவு செய்யும் index ஆன 4 இதில் சேர்க்கப்படாது).
// * **உங்கள் எடுத்துக்காட்டு விளக்கங்கள்:**
// ```javascript
// const arr = [45, 76, 89, 34, 9, 54]; // (இன்டெக்ஸ் நிலைகள்: 0 முதல் 5 வரை)

// // 1. arr.slice(2, 4)
// const arr1 = arr.slice(2, 4); 
// console.log(arr1); // Output: [89, 34] (Index 2 மற்றும் 3 மட்டும்)

// // 2. arr.slice(2)
// const arr2 = arr.slice(2); 
// console.log(arr2); // Output: [89, 34, 9, 54] (Index 2-ல் இருந்து கடைசி வரைக்கும் எடுத்துக்கொள்ளும்)

// // 3. arr.slice(-4, -2)
// const arr3 = arr.slice(-4, -2); 
// console.log(arr3); // Output: [89, 34] (பின்னியிருந்து கணக்கிட்டு -4 லிருந்து -2-க்கு முன் வரை தரும்)

// நிச்சயமாக! ஜாவாஸ்கிரிப்ட் (JavaScript)-ல் **`pop`**, **`shift`**, மற்றும் **`splice`** முறைகளின் (Methods) எடுத்துக்காட்டுகள் மற்றும் விளக்கங்கள் இதோ:

// ---

// ### 1. `pop()`

// * **வேலை:** Array-ன் **கடைசியில் (End)** உள்ள ஒரு element-ஐ நீக்கிவிட்டு (remove), அந்த நீக்கப்பட்ட element-ஐ தந்துவிடும். இது ஒரிஜினல் array-ஐ மாற்றும்.
// * **எடுத்துக்காட்டு:**
// ```javascript
// const arr = [10, 20, 30, 40];

// const removedElement = arr.pop(); // கடைசியில் உள்ள 40 நீக்கப்படும்

// console.log(removedElement); // Output: 40
// console.log(arr);          // Output: [10, 20, 30]

// ### 2. `shift()`

// * **வேலை:** Array-ன் **ஆரம்பத்தில் (Beginning / First)** உள்ள ஒரு element-ஐ நீக்கிவிட்டு, அந்த நீக்கப்பட்ட element-ஐ தந்துவிடும். இதுவும் ஒரிஜினல் array-ஐ மாற்றும்.
// * **எடுத்துக்காட்டு:**
// ```javascript
// const arr = [10, 20, 30, 40];

// const removedElement = arr.shift(); // ஆரம்பத்தில் உள்ள 10 நீக்கப்படும்

// console.log(removedElement); // Output: 10
// console.log(arr);          // Output: [20, 30, 40]


// ### 3. `splice()`

// * **வேலை:** Array-ல் எந்த இடத்திலும் (Index) புதிய elements-ஐ **சேர்க்கவோ**, அல்லது இருக்கிற elements-ஐ **நீக்கவோ** பயன்படும்.
// * **Syntax:** `arr.splice(start_index, delete_count, item1, item2, ...)`

// #### எடுத்துக்காட்டு A (Elements-ஐ நீக்குவது):

// ```javascript
// const arr = [10, 20, 30, 40, 50];

// // index 1-ல் இருந்து ஆரம்பித்து 2 elements-ஐ நீக்கு (20 மற்றும் 30 நீங்கும்)
// arr.splice(1, 2); 

// console.log(arr); // Output: [10, 40, 50]
// #### எடுத்துக்காட்டு B (புதிய elements-ஐ சேர்ப்பது):

// ```javascript
// const arr = [10, 40, 50];

// // index 1-ல் எதையும் நீக்காமல் (0), புதிய மதிப்புகளைச் சேர்க்கிறது
// arr.splice(1, 0, 20, 30); 

// console.log(arr); // Output: [10, 20, 30, 40, 50]



//********4.reverse********
// const arr=[45,76,89,34,09,54]
// const arr1=arr.reverse(arr);
// console.log(arr);


// *******5.sort******(returns ascending number)
//  var arr=[45,76,89,34,9,54]
//  var arr1=arr.sort()
//  console.log(arr1);



///******6.join*****   syntax:array.join(separator)
 
// var arr=[45,76,89,34,9,54]
//  var arr1=arr.join(' ')
//  console.log(arr1);

///******7.length****
// ex:1
// let arr=[45,76,89,34,9,54]
// let arr1=arr.length;
// console.log(arr1);

// ex:2
//   let arr=[45,76,89,34,9,54]
//   for(i=0;i<=arr.length;i++){
//     console.log(i);
//   }
 
// ******7.concat 
// syntax: arr.concat(value1, value2, ..., valueN)****

ex:1
    let arr=[45,76,89,34,9,54]
    let brr=[4,76,89,34,9,54]
    let arr1=arr.concat(brr);
    console.log(arr1);










// *****1.push*****
//  function person(){
//     var arr=[1,3,5,6];
//     console.log("push",arr.push(7,7,7));
//     console.log(arr);
// }


// person()
 
// *****2.unshift***
// *****3.slice***
//  Syntax:
//  arr.slice(begin, end)(2,4 na index 2,3 value tha varum)

//  const arr=[45,76,89,34,54]
//   const arr1=arr.slice(2,4)
//   console.log(arr1);
//   const arr2=arr.slice(2)
//   console.log(arr2);
//   const arr3=arr.slice(-4,-2)
//   console.log(arr3);
  

//********4.reverse********
// const arr=[45,76,89,34,09,54]
// const arr1=arr.reverse(arr);
// console.log(arr);


// *******5.sort******(returns ascending is a-b desending is b-a number)
//  var arr=[45,76,89,34,9,54]
//  var arr1=arr.sort((a,b)=>{
//     return b-a
//  })


//  console.log(arr1);








///******6.join*****   syntax:array.join(separator)
 
// var arr=[45,76,89,34,9,54]
//  var arr1=arr.join("   ") 
//  console.log(arr1);

///******7.length****
// ex:1
// let arr=[45,76,89,34,9,54]
// let arr1=arr.length;
// console.log(arr1);

// ex:2
  // for off value ah return pannum
  // let arr=[45,76,89,34,9,54]
  // for(let key of arr){
  //   console.log(key);
  // }
   
  //for in key ah return pannum
  // for(let key in arr){
  //   console.log(key);
  // }
 
// ******7.concat 
// syntax: arr.concat(value1, value2, ..., valueN)****

// ex:1
    // let arr=[45,76,89,34,9,54]
    // let brr=[4,76,89,34,9,54]
    // let arr1=arr.concat(brr);
    // console.log(arr1);










