// 🚀 Asynchronous Programming (அசிங்க்ரோனஸ் பிரோகிராமிங்) தமிழில் விளக்கம்
// Asynchronous Programming என்பது ஒரே நேரத்தில் பல செயல்களை (tasks) மேற்கொள்ள உதவுகிறது.
// JavaScript-ல், சில செயல்கள் உடனடியாக முடிவதில்லை (e.g., API call, database fetch, file read).
// அவ்வாறு நேரம் எடுக்கும் செயல்களை (long-running tasks) Asynchronous முறையில் செயல்படுத்தலாம்.

// 🛑 Synchronous vs.                                        ✅ Asynchronous
// Synchronous (சிங்க்ரோனஸ்)	                             Asynchronous (அசிங்க்ரோனஸ்)
// ஒரு operation முடிந்த பிறகு தான் மற்றது நடைபெறும்.	 மறைந்தபிறகு (background-ல்) செயல்படும்.
// Blocking (பிளாக்கிங்) - மற்றோன்றை காத்திருக்க செய்கிறது Non-blocking (நான்-பிளாக்கிங்) - மற்ற செயல்களை தடங்கலின்றி இயங்க செய்யும்.
// Example: File Read → Processing → Display	Example: API Call (நேரம் எடுத்துக்கொள்ளும், ஆனால் UI பாதிக்காது)


// 🔹 Synchronous JavaScript
// Runs line by line, one after another.

// Each line waits for the previous one to finish before executing.

// Blocking in nature: If one task takes time, everything after it is paused.

// 🔧 Example:
// js
// Copy
// Edit
// console.log("1");
// console.log("2");
// console.log("3");


// 🔹 Asynchronous JavaScript
// Code does not wait for previous tasks to complete.

// Executes in the background and uses callbacks, Promises, or async/await.

// Non-blocking: Good for tasks like API calls, file reads, etc.

// 🔧 Example using setTimeout:
// js
// Copy
// Edit
// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 2000);

// console.log("3");


// | Feature   | Synchronous             | Asynchronous                     |
// | --------- | ----------------------- | -------------------------------- |
// | Execution | One line at a time      | Can skip and come back later     |
// | Blocking  | Yes                     | No                               |
// | Use case  | Simple logic            | Network calls, timers, etc.      |
// | Examples  | `console.log`, math ops | `setTimeout`, `fetch`, `Promise` |





// 🚀 Async & Await தமிழில் விளக்கம்

// async மற்றும் await என்பது JavaScript-ல் asynchronous (அசிங்க்ரோனஸ்) operations-ஐ எளிதாக handle செய்ய பயன்படுகிறது.
// இது Promises-ஐ handling செய்ய ஒரு சிறந்த வழி ஆகும்.

// 🎯 async மற்றும் await என்றால் என்ன?
// 1️⃣ async - (அசிங்க்ரோனஸ் Function)
// async function ஒரு Promise return செய்யும்.
// ஒரு function-ஐ asynchronous-ஆ மாற்ற async keyword-ஐ பயன்படுத்த வேண்டும்.