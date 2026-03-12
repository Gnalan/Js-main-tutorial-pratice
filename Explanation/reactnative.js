
// assemble and bundle release 

// cd android && ./gradlew assembleRelease

// ./gradlew bundleRelease

// clean

// lastest v is 0.79
// npx @react-native-community/cli@latest init AwesomeProject ---- project create commend


// 🧱 Key Concepts in React Native Flexbox:
// flexDirection – Controls the main axis direction:

// 'column' (default): items stacked vertically.

// 'row': items arranged horizontally.

// justifyContent – Aligns children along the main axis:

// Values: flex-start, center, flex-end, space-between, space-around, space-evenly.

// alignItems – Aligns children along the cross axis:

// Values: flex-start, center, flex-end, stretch, baseline.

// flex – Defines how a component grows/shrinks relative to its siblings.

// flex: 1 takes up all available space.

// alignSelf – Overrides alignItems for a single child.

// 1. If flexDirection: 'column' (default in React Native)
// 🔹 justifyContent → Vertical alignment (because main axis is vertical)

// 🔹 alignItems → Horizontal alignment (because cross axis is horizontal)

// 2. If flexDirection: 'row'
// 🔹 justifyContent → Horizontal alignment

// 🔹 alignItems → Vertical alignment









// 1️⃣ Basic React Native Questions
// Q1: React Native மற்றும் ReactJS வித்தியாசம் என்ன?
// Answer:

// Feature	        React Native	  R   eactJS
// Platform	Mobile (Android & iOS)   	Web
// UI Rendering	   Native Components	  HTML, CSS
// Styling    	  StyleSheet (CSS-in-JS)  CSS
// Navigation	  React Navigation	      React Router



// Q3: React Native-ல் FlatList & ScrollView வித்தியாசம்?
// Answer:

// Feature	FlatList	ScrollView
// Performance	Optimized (renders only visible items)	Renders all items (not optimized)
// Large Data	Best for large lists	Not recommended
// Memory Usage	Efficient	High memory usage


// 🔥 React Native-ல் FlatList மற்றும் SectionList வித்தியாசம் 🔥
// React Native-ல் list-based data rendering செய்ய FlatList மற்றும் SectionList இரண்டு முக்கியமான components ஆகும்.

// Feature	FlatList	SectionList
// Usage	Normal list rendering	Grouped list rendering (Sections & Headers)
// Data Structure	Array ([{id: 1, name: 'Item 1'}])	Array of Sections ([{title: 'Section 1', data: [{id: 1, name: 'Item 1'}]}])
// Header/Footer	Only single ListHeaderComponent	Each section has its own header (renderSectionHeader)
// Performance	Good for long lists (Lazy loading)	Similar to FlatList, but better for grouped data
// Ideal for	Simple lists (Ex: Contact List, Product List)	Grouped lists (Ex: FAQ, Messages by Date)


// 3️⃣ Navigation & State Management
// Q6: React Navigation-ல் Stack vs Tab vs Drawer Navigation?
// Answer:

// Type	Usage
// Stack Navigation	Screen-to-Screen (Back & Forward)
// Bottom Tab Navigation	Tab-based navigation (WhatsApp Tabs)
// Drawer Navigation	Side menu navigation (Facebook Menu)

// npm install @react-navigation/native @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context



// Q: Redux vs Context API?
// Answer:

// Feature	Redux	Context API
// Complexity	High	Low
// Best For	Large apps	Small apps
// Performance	Optimized with middleware	Simple but may re-render often
// Installation	redux, react-redux	Built-in (No extra install)
// ✅ Use Redux for complex apps & Context API for simple state management.



// 5️⃣ Debugging & Testing
// Q9: React Native Debugging Tools?
// Answer:
// 🔹 React Native Debugger – Redux & Network debugging
// 🔹 Flipper – UI, Network, Logs debugging
//Flipper is a mobile debugging tool by Meta used in React Native to inspect network calls, logs, layout, and Redux state during development.
// 🔹 Chrome DevTools – Console logs & Performance check

// ✅ Enable Debugging:






// 3️⃣ React Native Performance & Optimization
// Q5: React Native-ல் FlatList Performance Optimization எப்படி செய்யலாம்?
// விடை:
// ✅ keyExtractor பயன்படுத்தவும்
// ✅ initialNumToRender குறைக்கவும்
// ✅ getItemLayout memory optimize செய்ய
// ✅ useMemo, useCallback unnecessary re-renders தவிர்க்க

// 📌 Example:

// javascript
// Copy
// Edit
// <FlatList
//   data={data}
//   keyExtractor={(item) => item.id.toString()}
//   renderItem={({ item }) => <Text>{item.name}</Text>}
//   initialNumToRender={10}
//   getItemLayout={(data, index) => ({ length: 50, offset: 50 * index, index })}
// />
// ✅ Big lists-க்கு FlatList use செய்யவும்!




// 1️⃣ Basic Level React Native Questions
// 1. React Native-ல் JSX என்றால் என்ன?
// JSX (JavaScript XML) என்பது JavaScript-க்குள் HTML போன்ற syntax எழுத உதவுகிறது.

// jsx
// Copy
// Edit
// const element = <Text>Hello, React Native!</Text>;
// 2. React Native-ல் Component-கள் எந்த வகையாக பிரிக்கலாம்?
// ✅ Functional Components
// ✅ Class Components
// ✅ Higher Order Components (HOC)

// 3. Controlled vs Uncontrolled Components?
// Controlled Components	Uncontrolled Components
// State மூலம் data control செய்யப்படும்	Directly DOM reference மூலம் data handle செய்யப்படும்
// Example: <TextInput value={text} onChangeText={setText} />	Example: <TextInput ref={inputRef} />
// 2️⃣ Intermediate Level Questions
// 4. React Native-ல் useEffect எப்படி வேலை செய்கிறது?
// useEffect() lifecycle methods-ஐ மாற்றி side effects handle செய்ய பயன்படும்.

// jsx
// Copy
// Edit
// useEffect(() => {
//   console.log("Component Mounted!");
// }, []);
// Without dependencies: Component re-render ஆகும் போது run ஆகும்.
// With dependencies: Only dependency change ஆகும் போது run ஆகும்.
// 5. React Native-ல் Lists எப்படி handle செய்வது?
// ✅ FlatList – Large lists efficiently render செய்ய பயன்படும்.
// ✅ SectionList – Grouped data display செய்ய.

// jsx
// Copy
// Edit
// <FlatList
//   data={data}
//   keyExtractor={(item) => item.id}
//   renderItem={({ item }) => <Text>{item.name}</Text>}
// />
// 6. React Native-ல் Memoization & Performance Optimization எப்படி செய்யலாம்?
// ✅ useMemo & useCallback
// ✅ React.memo() for Functional Components
//✅ Perfect Interview Answer (Experienced Level – 2–3 Years)
// useMemo & useCallback diff
// Both useMemo and useCallback are performance optimization hooks in React.
// useMemo is used to memoize a computed value, while useCallback is used to memoize a function reference.
// We use useMemo when we have expensive calculations, and useCallback when we want to prevent unnecessary re-renders of child components by keeping the same function reference.

// jsx
// Copy
// Edit
// const MemoizedComponent = React.memo(({ data }) => <Text>{data}</Text>);
// 7. React Native-ல் Image Handling எப்படி செய்வது?
// ✅ FastImage – Optimized Image Loading
// Why react-native-fast-image use பண்ண வேண்டும்?
// React Native default <Image> component-க்கு சில limitations இருக்கிறது:
// Image loading slow ஆக இருக்கும்
// Proper caching இல்லாமல் இருக்கலாம்
// Flickering / reload problem வரும்
// Large images handle பண்ணும்போது performance issue வரும்
// அதனால்தான் FastImage use பண்ணுவாங்க.

// 🔹 react-native-fast-image என்ன advantage?
// 1️⃣ Fast Image Loading

// FastImage native libraries (Android → Glide, iOS → SDWebImage) use பண்ணும்.

// 👉 அதனால் image very fast load ஆகும்.

// 2️⃣ Image Caching

// Image once load ஆன பிறகு cache ஆகி இருக்கும்.
// அடுத்த தடவை same image load பண்ணும்போது:
// Network call வேண்டாம்
// Cache லிருந்து load ஆகும்
// App speed improve ஆகும்
// 3️⃣ Better Performance
// Large images அல்லது list-ல் (FlatList) நிறைய images இருந்தால்:
// Memory usage optimize ஆகும்
// App smooth ஆக run ஆகும்

// jsx
// Copy
// Edit
// import FastImage from 'react-native-fast-image';

// <FastImage source={{ uri: 'https://example.com/image.png' }} />;
// 8. React Native-ல் Splash Screen, App Icon எப்படி Set செய்வது?
// ✅ react-native-splash-screen
// ✅ react-native-bootsplash
// ✅ expo-splash-screen

// jsx
// Copy
// Edit
// import SplashScreen from 'react-native-splash-screen';
// useEffect(() => {
//   SplashScreen.hide();
// }, []);
// 3️⃣ Advanced Level Questions
// 9. React Native-ல் Push Notifications எப்படி செயல்படுத்துவது?
// ✅ Firebase Cloud Messaging (FCM)
// ✅ OneSignal

// 📱 1️⃣ Foreground (App Open-ஆ இருக்கும்போது)
// 👉 Meaning:

// User app-ஐ open பண்ணி use பண்ணிக்கிட்டே இருக்கிறார்.

// 🔔 Notification Behavior:

// Notification automatic-ஆ tray-ல வராது

// நாம் manually handle பண்ணணும்

// 💻 Code:
// messaging().onMessage(async remoteMessage => {
//   console.log('Foreground:', remoteMessage);
// });
// 🎤 Interview-ல சொல்லணும்:

// App foreground-ல இருந்தா notification automatic-ஆ show ஆகாது. onMessage use பண்ணி manually local notification display பண்ணணும்.

// 📱 2️⃣ Background (App Minimize)
// 👉 Meaning:

// User app-ஐ minimize பண்ணி வேற app use பண்ணுகிறார்.

// 🔔 Notification Behavior:

// System automatic-ஆ notification tray-ல show பண்ணும்

// Tap பண்ணினா app open ஆகும்

// 💻 Code:
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Background:', remoteMessage);
// });
// 🎤 Interview-ல சொல்லணும்:

// Background state-ல notification system handle பண்ணும். Tap பண்ணினா app open ஆகும்.

// 📱 3️⃣ App Minimize (Background-க்கு Same)

// Minimize = Background state தான்.

// User recent apps-ல app இருக்கிறது.

// Notification வரும் → Tray-ல show ஆகும் → Tap பண்ணினா app open.

// 📱 4️⃣ App Kill (Completely Closed)
// 👉 Meaning:

// User app-ஐ recent apps-ல swipe பண்ணி close பண்ணியிருக்கிறார்.

// 🔔 Notification Behavior:

// Notification tray-ல show ஆகும்

// Tap பண்ணினா app fresh-ஆ launch ஆகும்

// 💻 Code:
// messaging().getInitialNotification().then(remoteMessage => {
//   if (remoteMessage) {
//     console.log('Opened from quit state');
//   }
// });
// 🎤 Interview-ல சொல்லணும்:

// App kill state-ல இருந்தாலும் FCM notification வரும். User tap பண்ணினா getInitialNotification use பண்ணி detect பண்ணலாம்.
// jsx
// Copy
// Edit
// import messaging from '@react-native-firebase/messaging';

// const requestUserPermission = async () => {
//   const authStatus = await messaging().requestPermission();
// };
// 10. React Native-ல் Background Services எப்படி வேலை செய்கிறது?
// ✅ react-native-background-fetch
// ✅ react-native-background-task
// 📱 Background Service என்றால் என்ன?

// 👉 App minimize / background / kill state-ல் இருந்தாலும்
// சில task-கள் run ஆகணும்.
// Example:
// Location tracking
// Periodic API sync
// Offline data upload
// Auto refresh
// Background analytics
// ⚙️ react-native-background-fetch
// Library:
// 👉 react-native-background-fetch
// Purpose:
// App background-ல் இருந்தாலும் periodic task run பண்ண use பண்ணுவோம்.

// 🎯 Real Example: Offline Data Sync App
// 📱 Scenario:

// நீங்க ஒரு Delivery / Field Sales App build பண்ணிருக்கிறீர்கள்.
// User:
// Offline-ல order create பண்ணுறார்
// Internet இல்லை
// Data local storage-ல் save ஆகுது

// 👉 Internet வந்ததும் backend-க்கு auto sync ஆகணும்
// 👉 App minimize இருந்தாலும் sync ஆகணும்

// இதுக்காக தான் Background Fetch use பண்ணுவோம்.

// 🏗️ Production Flow
// User creates order → Save locally → App in background →
// OS triggers background fetch → API sync → Clear local data
// 🧠 Step-by-Step Code Example
// 1️⃣ Install
// npm install react-native-background-fetch
// 2️⃣ Background Fetch Setup
// import React, {useEffect} from "react";
// import BackgroundFetch from "react-native-background-fetch";
// const App = () => {
//   useEffect(() => {
//     BackgroundFetch.configure(
//       {
//         minimumFetchInterval: 15,
//         stopOnTerminate: false,
//         startOnBoot: true,
//       },
//       async (taskId) => {

//         console.log("Background task running");

//         await syncOfflineOrders();  // 👈 important

//         BackgroundFetch.finish(taskId);
//       },
//       (error) => {
//         console.log("Background fetch failed", error);
//       }
//     );

//   }, []);

//   return null;
// };
// 3️⃣ Sync Function Example
// const syncOfflineOrders = async () => {
//   const orders = await getOfflineOrders();

//   if (orders.length > 0) {
//     await fetch("https://api.example.com/sync", {
//       method: "POST",
//       body: JSON.stringify(orders),
//     });

//     await clearOfflineOrders();
//     console.log("Orders synced successfully");
//   }
// };
// 📱 How It Works in Real Life
// 1️⃣ User app minimize பண்ணுகிறார்
// 2️⃣ 15 minutes கழித்து OS background task trigger பண்ணும்
// 3️⃣ App API call பண்ணும்
// 4️⃣ Offline orders backend-க்கு upload ஆகும்
// 5️⃣ finish(taskId) call பண்ணி task complete ஆகும்
// 🔥 Important Points (Interview Gold)
// ✔️ OS தான் timing decide பண்ணும்
// ✔️ Exact 15 mins guarantee இல்லை
// ✔️ finish(taskId) call செய்யாவிட்டால் app crash / stop ஆகும்
// ✔️ iOS restrictions strict



// 11. React Native-ல் Deep Linking எப்படி வேலை செய்கிறது?
// ✅ React Navigation + Linking API

// jsx
// Copy
// Edit
// const linking = {
//   prefixes: ['myapp://'],
// };
// 🔧 Deep Linking வேலை செய்வது எப்படி?
// 1. URL Scheme:
// உங்கள் app-க்கு ஒரு custom URL scheme define செய்யலாம். உதா: myapp://home, myapp://profile/123

// 2. App Configuration:
// ✅ Android:
// android/app/src/main/AndroidManifest.xml-ல் intent filter add செய்ய வேண்டும்:

// xml
// Copy
// Edit
// <intent-filter android:label="Deep Link">
//     <action android:name="android.intent.action.VIEW" />

//     <category android:name="android.intent.category.DEFAULT" />
//     <category android:name="android.intent.category.BROWSABLE" />

//     <data android:scheme="myapp" android:host="home" />
// </intent-filter>
// ✅ iOS:
// Info.plist-ல் URL Types define செய்ய வேண்டும்:

// xml
// Copy
// Edit
// <key>CFBundleURLTypes</key>
// <array>
//   <dict>
//     <key>CFBundleURLSchemes</key>
//     <array>
//       <string>myapp</string>
//     </array>
//   </dict>
// </array>
// 3. React Navigation-ல் Deep Linking Setup:
// js
// Copy
// Edit
// const linking = {
//   prefixes: ['myapp://', 'https://myapp.com'],
//   config: {
//     screens: {
//       Home: 'home',
//       Profile: 'profile/:id',
//     },
//   },
// };

// <NavigationContainer linking={linking}>
//   {/* Your Stack Navigator */}
// </NavigationContainer>
// 4. Link Handle செய்ய:
// js
// Copy
// Edit
// import { Linking } from 'react-native';

// useEffect(() => {
//   Linking.getInitialURL().then(url => {
//     if (url) {
//       console.log('Initial URL:', url);
//     }
//   });

//   const handleURL = event => {
//     console.log('Received URL:', event.url);
//   };

//   const subscription = Linking.addEventListener('url', handleURL);

//   return () => {
//     subscription.remove();
//   };
// }, []);

// 🛒 Real-Time Example: E-commerce App Deep Linking
// Use Case:
// ஒரு user-க்கு SMS அல்லது email-ல் ஒரு offer link அனுப்பப்படுகிறது:

// 👉 myshop://product/123

// இந்த link-ஐ click செய்தால், app open ஆகி, Product Details page-ல் product ID 123-க்கு navigate ஆகணும்.








// 12. React Native-ல் Detox & Appium பயன்படுத்தி Testing செய்யலாமா?
// ✅ Detox – End-to-End Testing
// ✅ Appium – Mobile Automation Testing

// sh
// Copy
// Edit
// npm install -g detox-cli
// detox test
// 13. React Native-ல் WebView எப்படி வேலை செய்கிறது?
// ✅ react-native-webview

// jsx
// Copy
// Edit
// import { WebView } from 'react-native-webview';
// react-native-webview என்பது React Native-ல் ஒரு web browser-like view-ஐ app-க்குள் integrate செய்ய பயன்படுத்தப்படும் component ஆகும். இது உங்கள் app-க்கு ஒரு webpage (HTML, URL)யை embedded-ஆக காட்ட அனுமதிக்கிறது.
// 🌐 react-native-webview – Explanation
// ✅ Use cases:
// A web page load பண்ணனும் (like terms and conditions, blogs, etc)

// Payment gateway integration (like Razorpay, Stripe)

// Existing web app-ஐ mobile app-ல் embed பண்ணனும்

// Custom HTML render பண்ணனும்

// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import { WebView } from 'react-native-webview';

// const MyWebView = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <WebView 
//         source={{ uri: 'https://www.wikipedia.org/' }} 
//         style={styles.webview}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   webview: {
//     flex: 1,
//   },
// });

// export default MyWebView;






// 14. React Native-ல் Video Playback எப்படி செய்வது?
// ✅ react-native-video

// react-native-video என்பது React Native-ல் video files (local or online) play செய்ய பயன்படும் library. இது fullscreen support, play/pause controls, and custom UI integration எல்லாமே support பண்ணும்.

// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Video from 'react-native-video';

// const MyVideoPlayer = () => {
//   return (
//     <View style={styles.container}>
//       <Video
//         source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} // online video
//         style={styles.video}
//         controls={true} // Show default media controls
//         resizeMode="contain" // fit or cover or stretch
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//   },
//   video: {
//     width: '100%',
//     height: 300,
//   },
// });

// export default MyVideoPlayer;



// 4️⃣ React Native Architecture & System Design Questions
// 15. React Native-ல் MVVM vs Redux Architecture எது சிறந்தது?
// MVVM (Model-View-ViewModel)	Redux Architecture
// UI & Data separate-ஆக இருக்கும்	Centralized state management
// Small scale apps-க்கு best	Large scale apps-க்கு best
// 16. React Native-ல் Multi-Language Support எப்படி செய்யலாம்?
// ✅ react-native-localization
// ✅ i18n-js

// jsx
// Copy
// Edit
// import I18n from 'react-native-i18n';

// I18n.translations = {
//   en: { welcome: "Welcome" },
//   ta: { welcome: "வரவேற்கிறோம்" },
// };
// <Text>{I18n.t('welcome')}</Text>
// 17. React Native-ல் Payment Gateway Integration எப்படி செய்வது?
// ✅ Razorpay
// ✅ Stripe

// jsx
// Copy
// Edit
// import RazorpayCheckout from 'react-native-razorpay';

// RazorpayCheckout.open(options);
// 5️⃣ Miscellaneous Questions
// 18. React Native-ல் Accessibility Features (A11Y) எப்படி சேர்க்கலாம்?
// ✅ accessible={true}
// ✅ aria-label & accessibilityLabel

// jsx
// Copy
// Edit
// <Text accessibilityLabel="Click Me">Click</Text>
// 19. React Native-ல் Gesture Handling எப்படி செய்யலாம்?
// ✅ react-native-gesture-handler
// ✅ react-native-reanimated

// jsx
// Copy
// Edit
// import { PanGestureHandler } from 'react-native-gesture-handler';

// <PanGestureHandler onGestureEvent={gestureHandler}>
//   <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
// </PanGestureHandler>
// 20. React Native-ல் Crashlytics மற்றும் Error Tracking எப்படி செயல்படுத்தலாம்?
// ✅ Firebase Crashlytics
// ✅ Sentry

// jsx
// Copy
// Edit
// import crashlytics from '@react-native-firebase/crashlytics';

// crashlytics().log('App crashed!');



// React Native Native Bridge - தமிழ் விளக்கம் 🚀
// React Native JavaScript (JS) & Native Code (Android - Java/Kotlin, iOS - Objective-C/Swift) இடையே தொடர்பு ஏற்படுத்த Native Bridge concept-ஐ பயன்படுத்துகிறது.

// 📌 Native Bridge என்றால் என்ன?
// React Native default-ஆ JavaScript-ல் இயங்கும். Native modules (Android: Java/Kotlin, iOS: Objective-C/Swift)க்கு direct access இல்லை.
// JS & Native code இடையே தொடர்பு ஏற்படுத்த Bridge ஒரு intermediate வழி ஆக செயல்படுகிறது.

// 🎯 Bridge = JavaScript ↔ Native Code (Android/iOS)

// 🔗 Use Case Examples:
// ✅ Native APIs (Camera, Bluetooth, File System)
// ✅ Custom Native Modules (Background Services, Sensors)
// ✅ High-Performance Animations
// ✅ Third-party Native SDK Integration



// React Native Authentication & Authorization Explained in Tamil
// React Native-ல் Authentication (அங்கீகாரம்) மற்றும் Authorization (அனுமதி) முக்கியமான security அம்சங்கள். இதைப் புரிந்துகொள்வது React Native mobile apps-ல் user data-வை பாதுகாக்க உதவும்.

// 1. Authentication (அங்கீகாரம்) என்றால் என்ன?
// 🔹 Authentication என்பது யார் user என்பதை சரிபார்ப்பது.
// 🔹 இது பொதுவாக login மற்றும் signup வழியாக செய்யப்படுகிறது.
// 🔹 Example: Email & Password, OTP, Social Login (Google, Facebook).

// React Native-ல் Authentication எப்படி செய்யலாம்?
// API உருவாக்குதல் – Backend (Node.js, Firebase, Django) மூலம் user authentication செய்யலாம்.

// Login UI உருவாக்குதல் – Email & Password fields, Social login buttons போன்றவை சேர்க்கலாம்.

// Token Management – JWT (JSON Web Token) அல்லது Firebase authentication tokens-ஐ handle செய்யலாம்.

// Secure Storage – AsyncStorage, SecureStore (expo) அல்லது Encrypted Storage பயன்படுத்தலாம்.

// 📌 Example – JWT Authentication

// js
// Copy
// Edit
// fetch('https://example.com/api/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ email: 'test@example.com', password: 'password123' })
// })
// .then(response => response.json())
// .then(data => {
//   if (data.token) {
//     AsyncStorage.setItem('userToken', data.token);
//   }
// });
// 2. Authorization (அனுமதி) என்றால் என்ன?
// 🔹 Authorization என்பது user-க்கு எந்த அளவிற்கான access கொடுக்க வேண்டும் என்பதை தீர்மானிக்கிறது.
// 🔹 Authentication verified user-யை confirm செய்யும், Authorization அவருக்கு எவ்வளவு privilege வேண்டும் என்று முடிவு செய்யும்.

// React Native-ல் Authorization எப்படி செய்யலாம்?
// User Roles & Permissions – Admin, User, Moderator போன்ற roles கொடுக்கலாம்.

// Protected Routes – Certain pages-க்கு access JWT Token மூலம் கட்டுப்படுத்தலாம்.

// Backend Authorization – API endpoint-களுக்கு role-based access control (RBAC) பயன்படுத்தலாம்.

// 📌 Example – Role-Based Authorization

// js
// Copy
// Edit
// fetch('https://example.com/api/user-data', {
//   method: 'GET',
//   headers: { 'Authorization': `Bearer ${userToken}` }
// })
// .then(response => response.json())
// .then(data => {
//   if (data.role === 'admin') {
//     setIsAdmin(true);
//   }
// });



// React Native-ல் Thread என்றால் என்ன?
// React Native-ல் Thread என்பது ஒரு தனி செயல்பாட்டு பாதையாக (execution path) செயல்களை ஒரே நேரத்தில் (concurrently) இயக்க உதவுகிறது. Threads முக்கியமானது, குறிப்பாக heavy computations, animations, network requests போன்ற செயல்களை மென்மையாக இயக்க உதவுகிறது.

// React Native-ல் Threads வகைகள்
// React Native-ல் முக்கியமாக 4 விதமான Threads உள்ளன:

// 1. Main Thread (UI Thread)
// இது முக்கிய Thread, இதில் UI (User Interface) rendering மற்றும் user interactions (touch, gestures) நடக்கின்றன.

// இந்த thread-ல் எதாவது heavy operation (e.g., data processing) நடந்தால், UI lag ஆகலாம் அல்லது freeze ஆகலாம்.

// 2. JavaScript Thread (JS Thread)
// JavaScript execution நடக்கும் thread.

// React components, state updates, API calls போன்றவை இதிலேயே ஓடுகிறது.

// இதை overload செய்தால், UI slow ஆகலாம் அல்லது not responding ஆகலாம்.

// 3. Native Modules Thread
// இது native code execution (Java/Kotlin - Android, Objective-C/Swift - iOS) செய்ய பயன்படும்.

// Database queries (SQLite), image processing, heavy calculations போன்ற செயல்களுக்கு native thread-ஐ பயன்படுத்தலாம்.

// 4. Background Threads (Worker Threads)
// Heavy tasks JS thread-ஐ affect செய்யாமல் ஓட இந்த thread-ஐ பயன்படுத்தலாம்.

// react-native-worker-threads அல்லது Web Workers மூலம் parallel processing செய்யலாம்.

// React Native-ல் Background Threads எப்படி பயன்படுத்தலாம்?
// 1. Web Workers (CPU-Intensive Tasks)
// javascript
// Copy
// Edit
// import { Worker } from 'react-native-workers';

// const worker = new Worker(() => {
//   postMessage('Hello from worker!');
// });

// worker.onmessage = (message) => {
//   console.log(message);
// };
// இது parallel execution செய்ய உதவும், இதனால் JS Thread block ஆகாது.

// 2. Native Modules (Heavy Processing)
// Native modules (Java/Kotlin, Swift/Obj-C) பயன்படுத்தி image processing, data encryption போன்றவற்றை background thread-ல் செய்யலாம்.

// 3. InteractionManager (UI-Blocking Tasks)
// javascript
// Copy
// Edit
// import { InteractionManager } from 'react-native';

// InteractionManager.runAfterInteractions(() => {
//   // UI animation முடிந்த பிறகு expensive task ஓடும்
// });
// இது UI animations முடிந்த பிறகு மட்டுமே heavy operations செய்ய உதவும்.

// Thread-ஐ சரியாக பயன்படுத்தலானால் என்ன ஆகும்?
// ✅ UI lag இல்லாமல் மென்மையாக இயங்கும்
// ✅ Heavy tasks செய்யும் போது UI freeze ஆகாது
// ✅ App performance அதிகரிக்கும்

// React Native-ல் background thread மற்றும் native modules சரியாக பயன்படுத்தினால், fast & smooth application உருவாக்கலாம்! 🚀





// React Native-ல் Network Calls செய்யும் முறைகள்
// React Native-ல் Network Calls செய்ய நிறைய library-கள் இருக்கின்றன, ஆனால் முக்கியமானவைகள்:

// fetch API (Built-in JavaScript API)

// Axios (Popular third-party library)

// react-query (For caching & state management)

// 1. fetch API (Built-in)
// React Native-ல் network requests செய்ய fetch API default-ஆக support செய்கிறது. இது lightweight மற்றும் easy-to-use.

// GET Request (Data Fetching)
// javascript
// Copy
// Edit
// const fetchData = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// fetchData();
// ✅ fetch API asynchronous ஆகவே, async/await பயன்படுத்தலாம்.
// ✅ Response-ஐ JSON format-ஆக convert செய்ய response.json() பயன்படுத்த வேண்டும்.

// POST Request (Data Sending)
// javascript
// Copy
// Edit
// const postData = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         title: 'React Native',
//         body: 'Learning network calls!',
//         userId: 1,
//       }),
//     });

//     const data = await response.json();
//     console.log('Response:', data);
//   } catch (error) {
//     console.error('Error sending data:', error);
//   }
// };

// postData();
// ✅ POST request-க்கு method: 'POST' specify செய்ய வேண்டும்.
// ✅ Headers-ல் Content-Type: 'application/json' கொடுத்தால் JSON data அனுப்பலாம்.

// 2. Axios (Third-party Library)
// 🔹 fetch API-வை விட Axios பயன்படுத்துதல் எளிது, ஏனெனில் automatic JSON conversion மற்றும் error handling support செய்கிறது.

// Axios Installation
// sh
// Copy
// Edit
// npm install axios
// GET Request (Axios)
// javascript
// Copy
// Edit
// import axios from 'axios';

// const fetchData = async () => {
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     console.log(response.data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// fetchData();
// ✅ Axios automatically response-ஐ JSON-ஆக convert செய்கிறது.

// POST Request (Axios)
// javascript
// Copy
// Edit
// const postData = async () => {
//   try {
//     const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
//       title: 'React Native with Axios',
//       body: 'Axios makes API calls easier!',
//       userId: 1,
//     });

//     console.log('Response:', response.data);
//   } catch (error) {
//     console.error('Error sending data:', error);
//   }
// };

// postData();
// ✅ fetch API-வுடன் manual JSON conversion தேவை, ஆனால் Axios-ல் அது automatic ஆகும்.

// 3. React Query (For Advanced Network Calls & Caching)
// 🔹 If your app frequently fetches data, then react-query is useful. It handles caching, background fetching, refetching, and more.

// Installation
// sh
// Copy
// Edit
// npm install @tanstack/react-query
// Usage Example
// javascript
// Copy
// Edit
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// const fetchPosts = async () => {
//   const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
//   return data;
// };

// const MyComponent = () => {
//   const { data, isLoading, error } = useQuery(['posts'], fetchPosts);

//   if (isLoading) return <Text>Loading...</Text>;
//   if (error) return <Text>Error: {error.message}</Text>;

//   return (
//     <FlatList
//       data={data}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({ item }) => <Text>{item.title}</Text>}
//     />
//   );
// };
// ✅ Automatic caching & background fetching support! 🚀
// ✅ Data-வை auto refetch செய்ய முடியும்!

// Error Handling & Timeout
// Network calls-க்கு proper error handling செய்ய try-catch block பயன்படுத்தலாம்.

// Timeout Example (fetch API)
// javascript
// Copy
// Edit
// const fetchWithTimeout = (url, timeout = 5000) => {
//   return Promise.race([
//     fetch(url),
//     new Promise((_, reject) =>
//       setTimeout(() => reject(new Error('Request Timeout')), timeout)
//     ),
//   ]);
// };
// ✅ இது 5 seconds-க்குள் response வராவிட்டால் "Request Timeout" error throw செய்யும்.

// Best Practices for Network Calls in React Native
// ✅ Always use async/await for better readability.
// ✅ Use error handling (try-catch) to handle API failures.
// ✅ Implement timeouts to prevent infinite loading.
// ✅ For frequently changing data, use React Query for caching & performance optimization.
// ✅ Always add proper HTTP headers (Content-Type: 'application/json').

// 🔹 முடிவுகள்
// 🔹 Small apps-க்கு fetch API போதும்.
// 🔹 Large-scale apps-க்கு Axios அல்லது React Query பயன்படுத்தலாம்.
// 🔹 Performance & caching தேவையானால் React Query ஒரு சிறந்த தேர்வு! 🚀

// இந்த மாதிரி network calls சரியாக பயன்படுத்தினால், React Native app fast & efficient ஆக இருக்கும்! 😃


// 🔥 Encryption / Decryption என்ற கான்செப்ட் - முழுமையான விளக்கம்
// Encryption என்பது,
// ஒரு information-ஐ (புதிய தகவல், உதாரணத்திற்கு: username, password) மற்றவர்களுக்கு புரியாத மாதிரி கணித முறையில் (mathematical algorithms) மறைபடுத்தும் (encode) செயல்முறை.

// Decryption என்பது,
// அந்த மறைத்து வைத்த தகவலை திரும்ப original வடிவத்தில் அதே சாவியை (key) பயன்படுத்தி மீட்டெடுப்பது.

// 🔒 ஏன் Encryption தேவை?
// இப்போது பாருங்க,
// நீங்க ஒரு mobile app develop பண்ணறீங்க.
// அதுல user-ல் sensitive data (உதா: bank details, phone numbers) save பண்ணணும்.

// நீங்க அவை plain text-ஆ save பண்ணிட்டீங்கனா, hacker ஒருத்தர் app-ஐ hack பண்ணினா எல்லா information-உம் read பண்ணிடுவாங்க.

// ஆனால், நீங்க அவை encrypt பண்ணி வைத்தீங்கனா,
// அவர் அந்த data-வை கண்டுபிடிச்சாலும் அது ஒரு meaningless random code மாதிரி இருக்கும். (அது decrypt செய்ய தவறான key உடன் முடியாது.)

// இதுவே data security-ல ஒரு மிக முக்கியமான பாதுகாப்பு அடிப்படை.

// 🛡️ Symmetric vs Asymmetric Encryption
// Symmetric Encryption → ஒரே secret key-யைப் பயன்படுத்தி both encryption மற்றும் decryption செய்வது.
// (உதா: AES, DES algorithms)

// Asymmetric Encryption → இரண்டு keys:

// Public Key → encrypt செய்ய

// Private Key → decrypt செய்ய
// (உதா: RSA algorithm)

// React Native apps-ல், சாதாரணமாக small-level encryption-க்கு Symmetric encryption போதுமானது.

// 🔎 Encryption எப்படி வேலை செய்கிறது?
// Input: உங்கள் normal text.
// (example: "123456")

// Encryption Algorithm:
// (AES - Advanced Encryption Standard மாதிரி ஒரு powerful formula.)

// Secret Key:
// (உங்களுடைய ரகசிய password மாதிரி ஒன்று.)

// Output:
// (ஒரு encrypted, unreadable string - ex: "U2FsdGVkX1...")

// Decryption Process:

// அந்த encrypted data + same key கொண்டு திரும்ப original message எடுக்க முடியும்.

// 🧠 ஒரு சிறிய example நினைவில் வைக்க:

// செயல்	விளக்கம்
// 🔐 Encrypt	நம்ம message-ஐ கூடிய security-யோடு அடைத்துவைக்கும்.
// 🔓 Decrypt	அடைக்கப்பட்ட message-ஐ மட்டும் சரியான password உடன் திறக்கும்.
// 📌 முக்கியமான தகவல்கள்:
// Key யாரிடமும் share பண்ணக்கூடாது.

// Encrypted data கூட leak ஆனா fine, ஆனால் key இல்லாமல் அதைப் புரிய முடியாது.

// Crypto algorithms (AES, RSA) எல்லாம் உலக அளவிலான military-grade securityக்கு use பண்ணப்படும்.

// ✅ சமீபத்திய வளர்ச்சி:
// இப்போது, mobile security, data-at-rest security, zero-knowledge encryption போன்ற advanced concepts field-ல் உருவாகி கொண்டு இருக்கிறது.
// அதனால் future-ல் நம்ம react-native apps கூட Zero Trust Architecture மாதிரி systems-க்குள் evolve ஆகும்.

// இது போன்று இன்னும் மேலும் deep security concepts, real-world encryption usage examples வேணுமா? 🔥
// நீங்க சொன்னா, நான் asymmetric encryption (public/private key encryption) கூட explain பண்ணி, coding sample கொடுக்கிறேன்! 🚀
// சொல்லுங்க! 🔥🧠



// 🏗️ React Native Architecture – மொத்தம் எப்படி இருக்கிறது?
// React Native ஒரு Bridge Architecture முறையில் வேலை செய்கிறது.

// அதாவது:


// பகுதி	விளக்கம்
// 1. JS Thread (JavaScript side)	நம்ம எழுதுற JavaScript / React code இந்த இடத்தில தான் இயங்கும். (Business Logic, UI updates)
// 2. Native Side (Android/iOS)	Native modules (Camera, GPS, File Access) இந்த பகுதியில் இருக்கும். (Java/Kotlin/Swift/Obj-C code)
// 3. Bridge (Connector)	JavaScript மற்றும் Native இடையே தகவல் அனுப்பும் communication சேனல்.
// 🎯 Simple Flow Diagram
// plaintext
// Copy
// Edit
// [JavaScript Thread]   <-->   [Bridge]   <-->   [Native Modules]
// இது தான் base-level React Native Architecture.
// (இது "Old Architecture" என்று இப்போது அழைக்கப்படுகிறது.)

// 🚀 New React Native Architecture (Fabric & TurboModules)
// React Native இப்போ ஒரு New Architecture-க்கு மாறி இருக்குது.

// New Architecture - Key Points:


// புதிய விஷயம்	விளக்கம்
// Fabric	புதிய UI rendering system. UI updates இன்னும் fast ஆகும். (React concurrent features பங்குபெறும்.)
// TurboModules	Modules-ஐ fast-ஆ load பண்ணும் புதிய முறை. (நீங்க என்ன modules வேணும் என App ஆரம்பிக்கும்போது lazy load செய்யும்.)
// CodeGen	C++-based Intermediate Layer. (Auto code generation native bindings.)


// முக்கியமான Core Components
// Component	விளக்கம்
// View	Box container போல செயல்படும். Layout மற்றும் styling க்கு முக்கியம் (Flexbox-ஐ ஆதரிக்கிறது).
// Text	Text-ஐ காட்ட பயன்படுத்தப்படுகிறது. HTML-இல் <p> அல்லது <span> போன்றது.
// Image	படங்களை (local அல்லது URL-இல் இருந்து) காட்ட பயன்படும்.
// ScrollView	Content-ஐ vertically அல்லது horizontally scroll செய்ய பயன்படும்.
// TextInput	Input field (பயனரிடமிருந்து text வாங்க)
// TouchableOpacity	Touchable area (button போல), touch செய்தால் opacity குறையும்.
// Pressable	TouchableOpacity-க்கு alternative – interaction styles customization அதிகம்.
// Button	Simple pre-styled button. Customization குறைவாக இருக்கும்.
// FlatList	Efficient scrollable list – Lazy rendering with performance optimization.
// SectionList	FlatList போலதான், ஆனால் grouped data (section-wise) க்கு.
// Modal	Overlay-யாக popup-ஐ காட்ட.
// ActivityIndicator	Loading spinner.
// SafeAreaView	iOS notch, status bar போன்ற பகுதிகளை தவிர UI-ஐ காட்ட.
// KeyboardAvoidingView	Keyboard open ஆகும்போது UI-ஐ adjust செய்ய.






// 🔹 முக்கியமான Touch Components
// Component	விளக்கம்
// TouchableOpacity	Touchable area. Press செய்யும் போது opacity குறையும். Simple animation.
// TouchableHighlight	Press செய்யும் போது background color highlight ஆகும்.
// TouchableWithoutFeedback	Touchable gesture-ஐ handle செய்யும் ஆனால் visual feedback இல்லாதது.
// Pressable	TouchableOpacity-க்கு update செய்யப்பட்ட alternative. Events மற்றும் state-based styles அதிகம்.
// Button	Built-in simple button. Customization குறைவாக இருக்கும்.
// GestureResponder System	Low-level gesture handling (advanced use-cases).


// REACT NATIVE PERMISIONS
// 🏗️ 1️⃣ Permission Types
// 📌 Android

// Runtime permissions (Android 6+)

// Example: CAMERA, LOCATION, READ_MEDIA_IMAGES

// 📌 iOS

// Info.plist-ல் description add பண்ணணும்

// User-க்கு popup வரும்

// 🛠️ 2️⃣ Recommended Library

// Most used library:

// 👉 react-native-permissions

// Install:

// npm install react-native-permissions
// 🔄 3️⃣ Basic Permission Flow (Production Standard)
// Check → If denied → Request → Handle result
// 📍 Example: Camera Permission
// import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

// const checkCameraPermission = async () => {
//   const result = await check(PERMISSIONS.ANDROID.CAMERA);

//   if (result === RESULTS.GRANTED) {
//     console.log("Permission granted");
//   } else {
//     const requestResult = await request(PERMISSIONS.ANDROID.CAMERA);
//     console.log(requestResult);
//   }
// };
// 📱 Android Manifest Add
// <uses-permission android:name="android.permission.CAMERA" />
// 🍎 iOS Info.plist Add
// <key>NSCameraUsageDescription</key>
// <string>We need camera access to scan QR code</string>
// 🎯 Real Production Permission Handling
// Proper Handling:
// Status	Meaning	Action
// GRANTED	Allowed	Continue
// DENIED	Not allowed	Request again
// BLOCKED	User permanently denied	Open settings
// 🔥 Handle Blocked Case
// import {openSettings} from 'react-native-permissions';

// if (result === RESULTS.BLOCKED) {
//   openSettings();
// }

// Interview-ல சொல்லணும்:

// If user permanently denies permission, we redirect them to app settings using openSettings().

// 📦 Common Permissions in React Native Apps

// Camera

// Location (foreground/background)

// Notifications

// Storage / Media

// Microphone

// 🎤 Strong Interview Answer

// In React Native, I handle permissions using react-native-permissions. I first check permission status, then request if needed. If blocked, I redirect user to settings. I also configure AndroidManifest and Info.plist properly.

// 💡 Android 13 Notification Permission

// Android 13+:

// PERMISSIONS.ANDROID.POST_NOTIFICATIONS

// Very important 🔥 (interviewer trap question)



// react native old vs new architure
// Using React Native

// 🏗️ React Native Old Architecture
// 📌 Main Components:

// Bridge

// JavaScript Thread

// Native Thread

// Shadow Thread

// 🧠 How It Works:
// JS Code → Bridge → Native Module → UI Update

// JS ↔ Native communication asynchronous ஆக நடந்தது.

// ❌ Problems in Old Architecture

// Bridge slow (JSON serialization)

// Large data transfer slow

// Performance issues

// UI lag

// No synchronous calls

// 🆕 React Native New Architecture

// Introduced around RN 0.68+ (Fully stable later versions)

// 📌 Main Components:

// JSI (JavaScript Interface)

// Fabric (New Renderer)

// TurboModules

// Codegen

// 🔄 New Architecture Flow
// JS Code → JSI → Direct Native Call (No Bridge)

// Bridge remove பண்ணப்பட்டு
// Direct communication possible.

// 🆚 Old vs New Architecture Comparison
// Feature	Old Architecture	New Architecture
// Communication	Bridge	JSI (No Bridge)
// Performance	Slower	Faster
// Data Transfer	JSON Serialization	Direct Memory
// UI Rendering	Old Renderer	Fabric
// Native Modules	Legacy	TurboModules
// Sync Calls	❌ No	✅ Yes
// 🧩 Key Concepts in New Architecture
// 1️⃣ JSI
// JavaScript engine (Hermes) directly native code-ஐ access பண்ணும்.
// 2️⃣ Fabric
// New rendering system → Faster UI updates.
// 3️⃣ TurboModules
// Lazy loading native modules → Better performance.
// 📱 Real Example
// Old Architecture:
// Large JSON data native-க்கு அனுப்பினால் lag வரும்.
// New Architecture:
// Direct memory access → No serialization → Fast.

// difference between react native expo vs cli
// Using React Native
// Expo ecosystem by Expo
// 🚀 1️⃣ React Native CLI

// 👉 Official React Native setup
// 👉 Full native control கிடைக்கும்

// ✅ Advantages:

// Custom native modules add பண்ணலாம்

// Native code modify பண்ணலாம் (Android/iOS)

// Better for complex apps

// New Architecture full support

// ❌ Disadvantages:

// Setup little complex

// Android Studio / Xcode required

// Build process manual

// 📦 2️⃣ Expo

// 👉 Managed workflow
// 👉 Quick setup & fast development

// ✅ Advantages:

// Easy setup (No native setup initially)

// Pre-built APIs (Camera, Location, Notifications)

// OTA (Over The Air) updates

// Fast development

// ❌ Disadvantages:
// Custom native module add பண்ண முடியாது (Managed workflow)
// Native code modify முடியாது
// App size slightly bigger
// 🎯 When to Use Expo?
// Startup / MVP build
// Simple app
// Fast development required
// No complex native integration
// 🎯 When to Use CLI?
// Banking app
// Bluetooth integration
// Custom SDK integration
// Heavy native customization
// Advanced performance optimization


// 📌 16KB Page Size Issue என்றால் என்ன?

// Android devices சில புதிய processors-ல்
// Memory Page Size = 16KB இருக்கும்.
// பழைய apps mostly 4KB page size மட்டும் support பண்ணி build பண்ணப்பட்டிருக்கும்.
// 👉 So Play Store reject பண்ண ஆரம்பிச்சது
// If app 16KB compatible இல்லனா.

// 🎯 Step-by-Step Solution (Production Ready)
// ✅ 1️⃣ Update Android NDK (Very Important)

// 👉 Minimum NDK r26+ use பண்ணணும்.

// 📍 android/build.gradle
// android {
//     ndkVersion "26.1.10909125"
// }
// 📍 Check Installed NDK

// Android Studio → SDK Manager → SDK Tools →
// Install NDK (Side by side) r26

// ✅ 2️⃣ Update React Native Version

// Old React Native versions incompatible இருக்கலாம்.

// 👉 Upgrade to latest stable version.

// npx react-native upgrade

// (Or manually upgrade dependencies)

// ✅ 3️⃣ Update Gradle + AGP
// 📍 android/build.gradle
// classpath("com.android.tools.build:gradle:8.1.1")
// 📍 gradle-wrapper.properties
// distributionUrl=https\://services.gradle.org/distributions/gradle-8.0-all.zip
// ✅ 4️⃣ Enable ABI Filters (Optional but Recommended)
// defaultConfig {
//     ndk {
//         abiFilters "armeabi-v7a", "arm64-v8a"
//     }
// }

// 👉 64-bit support mandatory.

// ✅ 5️⃣ Clean & Rebuild
// cd android
// ./gradlew clean
// cd ..
// npx react-native run-android

// For release build:

// cd android
// ./gradlew bundleRelease

// Upload fresh .aab file.



// 🔐 1️⃣ What is Bearer Token?

// 👉 Bearer token ஒரு authentication method.

// API call பண்ணும்போது:

// Authorization: Bearer <token>

// 👉 "Bearer" என்றால்
// இந்த token யாரிடம் இருக்கிறதோ அவர் access பெறுவார்.

// It is defined in OAuth 2.0 standard by
// IETF

// 🔑 2️⃣ What is JWT Token?

// 👉 JWT (JSON Web Token) ஒரு token format.

// Structure:

// Header.Payload.Signature

// Example:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

// JWT mostly authentication-க்கு use பண்ணுவோம்.

// 🧠 Important Understanding

// 👉 Bearer = How token is sent
// 👉 JWT = What type of token it is



