
// assemble and bundle release 

// cd android && ./gradlew assembleRelease

// ./gradlew bundleRelease

// clean


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

// jsx
// Copy
// Edit
// const MemoizedComponent = React.memo(({ data }) => <Text>{data}</Text>);
// 7. React Native-ல் Image Handling எப்படி செய்வது?
// ✅ FastImage – Optimized Image Loading
// ✅ react-native-cached-image – Image caching

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

// jsx
// Copy
// Edit
// import BackgroundFetch from "react-native-background-fetch";
// BackgroundFetch.configure({}, async () => {
//   console.log("Background Task Running...");
// });
// 11. React Native-ல் Deep Linking எப்படி வேலை செய்கிறது?
// ✅ React Navigation + Linking API

// jsx
// Copy
// Edit
// const linking = {
//   prefixes: ['myapp://'],
// };
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

// <WebView source={{ uri: 'https://google.com' }} />;
// 14. React Native-ல் Video Playback எப்படி செய்வது?
// ✅ react-native-video

// jsx
// Copy
// Edit
// import Video from 'react-native-video';

// <Video source={{ uri: 'video.mp4' }} />;
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

