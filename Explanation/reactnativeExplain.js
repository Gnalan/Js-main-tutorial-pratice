React Native-ல் **OTA (Over-The-Air)** என்பது, ஆப் ஸ்டோரில் (Google Play Store அல்லது Apple App Store) புதிய வெர்ஷனை அப்லோட் செய்யாமல், பயனர்களின் மொபைலிலேயே நேரடியாக ஆப்பை அப்டேட் செய்யும் தொழில்நுட்பமாகும்.

OTA எப்படி வேலை செய்கிறது?**

ஒரு React Native ஆப் இரண்டு முக்கியப் பகுதிகளைக் கொண்டது:

1. **Native Code:** Java, Kotlin, Swift அல்லது Objective-C குறியீடுகள் (கேமரா, ஜிபிஎஸ் போன்ற ஹார்ட்வேர் அனுமதிகள்).
2. **JavaScript Bundle & Assets:** நீங்கள் எழுதும் UI, லாஜிக் குறியீடுகள் மற்றும் படங்கள்.

OTA தொழில்நுட்பம் மூலம் உங்களின் **JavaScript Bundle** மற்றும் படங்கள் மட்டுமே கிளவுட் சர்வரில் அப்லோட் செய்யப்பட்டு, பயனர் ஆப்பைத் திறக்கும்போது பின்னணியில் (Background) டவுன்லோட் ஆகி அப்டேட் ஆகிறது.

**OTA அப்டேட் செய்யக்கூடியவை & செய்ய முடியாதவை**

| செய்யக்கூடியவை (OTA Allowed) | செய்ய முடியாதவை (App Store Update Required) |
| --- | --- |
| UI/UX மாற்றங்கள், புதிய ஸ்கிரீன்கள் | புதிய Native லைப்ரரி சேர்த்தல் (எ.கா: `react-native-camera`) |
| பிழைத் திருத்தங்கள் (Bug Fixes) | `AndroidManifest.xml` அல்லது `Info.plist` மாற்றங்கள் |
| JavaScript பிசினஸ் லாஜிக் மாற்றங்கள் | ஆப் ஐகான் அல்லது ஆப் பெயர் மாற்றுதல் |
| உரை மற்றும் CSS/Styling திருத்தங்கள் | SDK வெர்ஷன் அப்கிரேட்கள் (React Native Core upgrade) |

OTA-வின் முக்கிய நன்மைகள்**

* **ஸ்டோர் ரிவ்யூ தேவையில்லை:** கூகுள் அல்லது ஆப்பிளின் 24-48 மணிநேர ரிவ்யூ காலதாமதம் தவிர்க்கப்படுகிறது.
* **உடனடி Bug Fix:** தயாரிப்புச் சூழலில் (Production) ஏற்படும் திடீர் கிராஷ்களை சில நிமிடங்களில் சரிசெய்து வெளியிடலாம்.
* **பயனர் முயற்சி தேவையில்லை:** பயனர்கள் ஸ்டோருக்குச் சென்று 'Update' பட்டனை அழுத்த வேண்டிய அவசியமில்லை; ஆப் தானாகவே அப்டேட் ஆகிவிடும்.

**பயன்படுத்தப்படும் பிரபலமான டூல்ஸ்**

1. **Expo Updates:** நீங்கள் Expo பயன்படுத்துகிறீர்கள் என்றால், மிக எளிதாக EAS (Expo Application Services) வழியாக OTA அப்டேட்களை இயக்கலாம்.
2. **Microsoft CodePush:** React Native CLI மூலம் உருவாக்கப்பட்ட ஆப்ஸ்களுக்கு அதிகம் பயன்படுத்தப்படும் ஒரு பிரபலமான சேவை.

> **முக்கியக் குறிப்பு:** ஆப்பிள் மற்றும் கூகுளின் விதிமுறைகளின்படி, ஆப்பின் அடிப்படை நோக்கத்தையோ (Core functionality) அல்லது வகைப்பாட்டையோ (Category) OTA மூலமாக முழுமையாக மாற்றக்கூடாது. சிறிய பிழைத்திருத்தங்கள் மற்றும் வடிவமைப்பு மாற்றங்களுக்கு மட்டுமே இதைப் பயன்படுத்த வேண்டும்.

///////////****************************** Example in hot-updater/react-native this plugin  /////////////////////////////////////
  
Real-Time Scenario: E-Commerce ஆப்பில் Checkout Button Crash Fix
சூழ்நிலை (The Problem):
உங்களின் Production ஆப் வெர்ஷன் 1.0.0 Play Store மற்றும் App Store-ல் லைவ்-ல் இருக்கிறது. வெள்ளிக்கிழமை மாலை, Checkout ஸ்கிரீனில் couponCode.toUpperCase() என்ற இடத்தில் couponCode null-ஆக வருவதால் ஆப் மொத்தமாக Crash ஆகிறது.
கூகுள்/ஆப்பிள் ரிவ்யூவுக்கு அனுப்பினால் 24 முதல் 48 மணிநேரம் ஆகும்; அதற்குள் பிசினஸுக்கு பெரிய இழப்பு ஏற்படும். இதை hot-updater மூலம் 15 நிமிடங்களில் எப்படி சரிசெய்வது?

Step 1: குறியீட்டுப் பிழையை சரிசெய்தல் (Bug Fix)
Crash ஆகும் JS குறியீட்டை optional chaining மூலம் சரிசெய்கிறோம்:

TypeScript
// ❌ பிழை இருந்த பழைய கோட் (Crashed on undefined/null):
const formattedCoupon = couponCode.toUpperCase();

// ✅ சரிசெய்யப்பட்ட புதிய கோட்:
const formattedCoupon = couponCode?.toUpperCase() || '';
Step 2: ஆப்பில் hot-updater Integration (App.tsx)
ஆப் ஆரம்பிக்கும் போதே சைலண்ட்டாக அப்டேட் டவுன்லோட் ஆகி, பயனர் அடுத்த முறை ஆப்பைத் திறக்கும்போது லோட் ஆகும் (Silent Update Strategy):

TypeScript
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { HotUpdater } from '@hot-updater/react-native';

const App = () => {
  useEffect(() => {
    // ஆப் லோட் ஆகும் போது background-ல் செக் செய்ய:
    const syncHotUpdate = async () => {
      try {
        const updateInfo = await HotUpdater.checkForUpdate();
        
        if (updateInfo?.hasUpdate) {
          // 1. Silent Background Download (பயனருக்கு எந்தத் தடங்கலும் இருக்காது)
          await HotUpdater.downloadBundle();
          
          // 2. அடுத்த முறை ஆப் open ஆகும்போது புதிய JS bundle தானாகவே லோட் ஆகிவிடும்!
        }
      } catch (err) {
        console.warn('Hot Updater check failed:', err);
      }
    };

    syncHotUpdate();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Your Root Navigator / App Screens */}
    </View>
  );
};

// HotUpdater HOC கொண்டு wrap செய்யவும்
export default HotUpdater.wrap({
  updateStrategy: 'appVersion', // Target native version tracking
})(App);
Step 3: புதிய Bundle-ஐ Deploy செய்தல் (CLI)
AndroidManifest.xml அல்லது CocoaPods எதையும் மாற்றாததால், வெறும் JS Bundle மட்டும் build செய்யப்பட்டு உங்கள் storage-க்கு (AWS S3 / Supabase) deploy செய்யப்படும்:

Bash
# Android ஆப் வெர்ஷன் 1.0.0-க்கு மட்டும் இந்த fix செல்ல வேண்டும்:
npx hot-updater deploy -p android -t "1.0.0" -m "Fix coupon null crash on checkout"

# iOS ஆப் வெர்ஷன் 1.0.0-க்கு:
npx hot-updater deploy -p ios -t "1.0.0" -m "Fix coupon null crash on checkout"
Step 4: என்ன நடக்கும்? (Behind the Scenes Lifecycle)
[பயனர் ஆப்பைத் திறக்கிறார்]
         │
         ▼
[Hot-updater Cloud API-ல் செக் செய்கிறது]
         │
         ├──> புதிய Bundle Hash / Version உள்ளதா?
         │         │
         │         ▼ (ஆம்)
         │    [Background-ல் புதிய JS Bundle டவுன்லோட் ஆகிறது (~500KB - 2MB)]
         │         │
         │         ▼
         │    [Device Storage-ல் சேமித்து வைக்கப்படுகிறது]
         │
         ▼
[பயனர் ஆப்பை மூடிவிட்டு (Kill app) மீண்டும் திறக்கும் போது]
         │
         ▼
[Native Engine (Hermes/JSC) பழைய Bundle-க்கு பதிலாக புதிய Bundle-ஐ லோட் செய்கிறது]
         │
         ▼
[Crash நீங்கி Checkout Screen சீராக வேலை செய்கிறது!]




2. //////rest apis?////


**REST API** (Representational State Transfer Application Programming Interface) என்பது கிளையண்ட் (Mobile App) மற்றும் சர்வர் (Backend Database/Server) இடையே தரவுகளைப் பரிமாறிக்கொள்ளப் பயன்படும் ஒரு நிலையான நெறிமுறை (Architectural Style) ஆகும்.

React Native மொபைல் அப்ளிகேஷன்கள் HTTP நெறிமுறை வழியாக JSON வடிவில் சர்வரிலிருந்து டேட்டாவைப் பெறவும் அனுப்பவும் REST API-களைப் பயன்படுத்துகின்றன.

---

### REST API-ன் 6 முக்கியக் கோட்பாடுகள் (Guiding Principles)

1. **Client-Server Architecture:** பயனர் இடைமுகம் (React Native UI) மற்றும் சர்வர் டேட்டா லாஜிக் இரண்டும் தனித்தனியாக இயங்கும்.
2. **Statelessness:** ஒவ்வொரு ரெக்வஸ்ட்டும் முழுமையான தகவலைக் கொண்டிருக்க வேண்டும். முந்தைய ரெக்வஸ்ட் குறித்த எந்த தகவலையும் சர்வர் சேமிக்காது (Session state இல்லை; Auth Tokens/JWT பயன்படுத்தப்படும்).
3. **Cacheability:** சர்வர் அனுப்பும் பதில் Cache செய்யக்கூடியதா (Cache-Control) என்பதைத் தெளிவுபடுத்த வேண்டும்.
4. **Uniform Interface:** அனைத்து API endpoint-களும் ஒரே மாதிரியான Resource URI வடிவத்தைப் பின்பற்ற வேண்டும் (எ.கா: `/api/v1/users`).
5. **Layered System:** ஆப் நேரடியாக மெயின் சர்வருடன் மட்டும் பேசாமல், இடையில் உள்ள Proxy, Load Balancer, API Gateway வழியாகவும் தகவல்களைப் பரிமாறலாம்.
6. **Code on Demand (Optional):** சர்வர் தேவைப்பட்டால் executable script-களை அனுப்பலாம் (REST-ல் இது பொதுவாக மொபைல் ஆப்ஸ்களுக்குப் பயன்படாது).

---

### HTTP Methods & CRUD Operations

REST API-ல் Resources-ஐ கையாள முக்கிய HTTP Methods பயன்படுகின்றன:

| HTTP Method | CRUD Operation | விளக்கம் | Idempotent? |
| --- | --- | --- | --- |
| **GET** | Read | சர்வரிலிருந்து தகவல்களைப் பெற (எ.கா: பயனர்களின் பட்டியல்) | ஆம் |
| **POST** | Create | புதிய பதிவை சர்வருக்கு அனுப்ப / உருவாக்க (எ.கா: பயனர் பதிவு) | இல்லை |
| **PUT** | Update / Replace | ஒரு பதிவை முழுமையாக மாற்றி அமைக்க | ஆம் |
| **PATCH** | Partial Update | ஒரு பதிவில் குறிப்பிட்ட சில புலங்களை (fields) மட்டும் மாற்ற | இல்லை / சூழ்நிலையைப் பொறுத்து |
| **DELETE** | Delete | குறிப்பிட்ட பதிவை நீக்க | ஆம் |

> **Idempotent என்றால் என்ன?** ஒரு ரெக்வஸ்ட்டை எத்தனை முறை திரும்பத் திரும்ப இயக்கினாலும் சர்வரின் டேட்டாவில் ஒரே முடிவுதான் ஏற்படும் (GET, PUT, DELETE போன்றவை).

---

### HTTP Status Codes (Interview-ல் கேட்கப்படுபவை)

* **2xx (Success):**
* `200 OK`: ரெக்வஸ்ட் வெற்றிகரமாக முடிந்தது.
* `201 Created`: புதிய resource உருவாக்கப்பட்டது (POST-க்கு).
* `204 No Content`: செயல் முடிந்தது, ஆனால் திருப்பி அனுப்ப body data இல்லை (DELETE-க்கு).


* **4xx (Client Errors):**
* `400 Bad Request`: அனுப்பிய payload அல்லது parameters தவறு.
* `401 Unauthorized`: Authentication இல்லை அல்லது Token காலாவதியானது.
* `403 Forbidden`: Token உள்ளது, ஆனால் குறிப்பிட்ட resource-ஐ அணுக அனுமதி இல்லை (Role-based).
* `404 Not Found`: கேட்ட URL / Resource சர்வரில் இல்லை.


* **5xx (Server Errors):**
* `500 Internal Server Error`: சர்வர் குறியீட்டில் ஏற்பட்ட பிழை.
* `503 Service Unavailable`: சர்வர் பராமரிப்பில் உள்ளது அல்லது அதிக பணிச்சுமையில் உள்ளது.

// ****************************************** react native google map sdk explain *****************************************\\\\\\\\

  React Native Google Maps SDK என்பது கூகுளின் வரைபட சேவையை (Google Maps) நமது React Native மொபைல் செயலியில் (Android & iOS) இணைத்து, பயனர்களுக்கு மேப் மற்றும் லொகேஷன் சார்ந்த வசதிகளைக் காட்டப் பயன்படும் ஒரு தொழில்நுட்பமாகும்.

React Native-ல் இதைச் செய்வதற்கு அதிகாரப்பூர்வமாக அதிகம் பயன்படுத்தப்படும் லைப்ரரி react-native-maps ஆகும்.

இது எப்படிச் செயல்படுகிறது?
Bridge Architecture: React Native-ல் நீங்கள் JSX வடிவில் <MapView/> என்று எழுதும்போது, பின்னணியில் Android-க்குரிய Google Play Services (Maps SDK for Android) மற்றும் iOS-க்குரிய Google Maps SDK for iOS ஆகிய நேட்டிவ் SDK-களை இது இயக்கும்.

Google Cloud Console & API Key: கூகுள் மேப்ஸை உங்கள் ஆப்பில் காட்ட Google Cloud Console-ல் ஒரு ப்ராஜெக்ட் உருவாக்கி, அங்கு Maps SDK for Android மற்றும் Maps SDK for iOS என இரண்டையும் எனேபிள் செய்து, பெறப்படும் API Key-ஐ நேட்டிவ் ஃபைல்களில் சேர்க்க வேண்டும்.

நேட்டிவ் கான்பிகரேஷன் (Native Setup)
1. Android (android/app/src/main/AndroidManifest.xml):
<application> டேக்கிற்குள் இந்த மெட்டாடேட்டாவை சேர்க்க வேண்டும்:

XML
<meta-data
   android:name="com.google.android.geo.API_KEY"
   android:value="YOUR_GOOGLE_MAPS_API_KEY"/>
2. iOS (ios/Podfile & AppDelegate):
iOS-ல் ஆப்பிளின் சொந்த Apple Maps இயல்புநிலையாக இருக்கும். அங்கும் கூகுள் மேப்ஸைப் பயன்படுத்த விரும்பினால்:

Podfile-ல்:

Ruby
pod 'GoogleMaps'
AppDelegate.mm-ல் SDK-ஐ ஆரம்பிக்க வேண்டும்:

Objective-C
#import <GoogleMaps/GoogleMaps.h>

[GMSServices provideAPIKey:@"YOUR_GOOGLE_MAPS_API_KEY"];
முக்கியமான காம்போனென்ட்டுகள் (Core Components)
MapView: வரைபடத்தைக் காட்டும் முதன்மை காம்போனென்ட்.

Marker: குறிப்பிட்ட அட்சரேகை/தீர்க்கரேகையில் (Latitude/Longitude) பின் (Pin) அல்லது தனிப்பயன் ஐகானைக் காட்ட.

Callout: ஒரு மார்க்கரை தொடும்போது மேலே தோன்றும் தகவல் பாப்-அப் (Tooltip).

Polyline: இரண்டு அல்லது அதற்கு மேற்பட்ட இடங்களுக்கு இடையே வழியை (Route / Path) கோடாக வரைய.

Polygon / Circle: ஒரு குறிப்பிட்ட பரப்பளவை (Geofence area) சுற்றி எல்லை வரைய.

React Native கோட் மாதிரி
JavaScript
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        // iOS மற்றும் Android இரண்டிலும் Google Maps-ஐ கட்டாயப்படுத்த
        provider={PROVIDER_GOOGLE} 
        style={styles.map}
        initialRegion={{
          latitude: 9.9252, // Madurai coordinates
          longitude: 78.1198,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation={true} // பயனரின் தற்போதைய இடத்தை நீல நிறப் புள்ளியாகக் காட்ட
        showsMyLocationButton={true} // லொகேஷனுக்குத் திரும்பும் பட்டன்
      >
        <Marker
          coordinate={{ latitude: 9.9252, longitude: 78.1198 }}
          title="Madurai Junction"
          description="Railway Station area"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
இன்டர்வியூவில் கவனிக்க வேண்டிய முக்கிய விஷயங்கள்
provider={PROVIDER_GOOGLE}: இதை நீங்கள் குறிப்பிடவில்லை என்றால், iOS சாதனங்களில் கூகுள் மேப்ஸுக்குப் பதிலாக ஆப்பிளின் இயல்புநிலை Apple Maps மட்டுமே ரெண்டர் ஆகும்.

latitudeDelta & longitudeDelta: வரைபடத்தின் ஜூம் அளவை (Zoom Level) தீர்மானிப்பது இதுவே. இதன் மதிப்பு குறைவாக இருந்தால் (எ.கா: 0.01) மேப் மிகவும் நெருக்கமாக (Zoom In) தெரியும்; அதிகமாக இருந்தால் (எ.கா: 1.0) பரந்த பரப்பளவு (Zoom Out) தெரியும்.

API Key Security: ஆப் ரிலீஸ் செய்யும்போது இந்த API கீயை Google Cloud Console-ல் SHA-1 fingerprint (Android) மற்றும் Bundle Identifier (iOS) மூலம் ரெஸ்ட்ரிக்ட் (Restrict) செய்ய வேண்டும்; இல்லையெனில் கீ தவறாகப் பயன்படுத்தப்பட வாய்ப்புள்ளது.
  


// ****************************************  What is event loop  *********************************

Event Loop என்பது JavaScript-ல் asynchronous (ஒரே நேரத்தில் நடக்கும் பணிகளை) non-blocking முறையில் இயக்குவதற்குப் பின்னணியில் செயல்படும் ஒரு core runtime மெக்கானிசம் ஆகும்.

JavaScript இயல்பாகவே ஒரு Single-Threaded மொழி (அதாவது ஒரே நேரத்தில் ஒரு வேலையை மட்டுமே செய்யக்கூடிய ஒரு Call Stack மட்டுமே கொண்டது). அப்படி இருந்தும் network calls (API), timers (setTimeout), touch events போன்றவற்றை UI freeze ஆகாமல் எப்படி கையாள்கிறது என்பதை Event Loop தீர்மானிக்கிறது.

Event Loop Architecture-ன் 4 முக்கியப் பகுதிகள்
┌──────────────────────────────────────────────┐
│                  Call Stack                  │ ──> Sync code runs here (LIFO)
└──────────────────────────────────────────────┘
                       ▲
                       │  Event Loop checks if Stack is EMPTY
                       │
       ┌───────────────┴───────────────┐
       │                               │
┌──────────────┐              ┌────────────────┐
│ Microtask    │              │ Macrotask      │
│ Queue (VIP)  │              │ Queue (Task)   │
└──────────────┘              └────────────────┘
(Promises,                    (setTimeout,
queueMicrotask)               setInterval, I/O)
Call Stack (LIFO - Last In, First Out):

அனைத்து Synchronous குறியீடுகளும் இங்கேதான் ஒன்றன் பின் ஒன்றாக அடுக்கப்பட்டு executed ஆகும்.

Web APIs / Native APIs:

setTimeout, Network fetch, Touch events போன்றவை Call Stack-ல் நிற்காமல், Background engine-க்கு (Browser அல்லது React Native C++ runtime/Hermes) அனுப்பப்பட்டு இயக்கப்படும்.

Microtask Queue (High Priority Queue):

Promise.then(), async/await, queueMicrotask() ஆகியவற்றின் callbacks இங்கே சேரும்.

Macrotask Queue / Task Queue (Low Priority Queue):

setTimeout, setInterval, setImmediate, I/O callbacks இங்கே வரிசையில் நிற்கும்.

Event Loop எப்படி வேலை செய்கிறது? (Execution Algorithm)
Call Stack-ல் உள்ள அனைத்து Synchronous குறியீடுகளையும் இயக்கி முடிக்கும்.

Call Stack காலியானவுடன் (Empty ஆனவுடன்), Event Loop முதலில் Microtask Queue-ஐ பார்க்கும்.

Microtask Queue-ல் இருக்கும் அனைத்து callbacks-ஐயும் Stack-க்கு அனுப்பி முழுமையாக முடிக்கும்.

அவை அனைத்தும் முடிந்த பிறகு, Macrotask Queue-ல் உள்ள முதல் ஒரு task-ஐ எடுத்து Call Stack-க்கு அனுப்பும்.

இந்தச் சுழற்சி (Loop) தொடர்ந்து இடைவிடாமல் நடக்கும்.

Classic Interview Puzzle & Output Execution
இந்தக் குறியீட்டின் Output என்ன என்று இன்டர்வியூவில் அடிக்கடி கேட்பார்கள்:

JavaScript
console.log('1: Start');

setTimeout(() => {
  console.log('2: Macrotask (Timeout)');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Microtask 1 (Promise)');
}).then(() => {
  console.log('4: Microtask 2 (Promise)');
});

console.log('5: End');
Output:
Plaintext
1: Start
5: End
3: Microtask 1 (Promise)
4: Microtask 2 (Promise)
2: Macrotask (Timeout)
ஏன் இந்த வரிசை?
Step 1: 1: Start மற்றும் 5: End ஆகியவை synchronous என்பதால் உடனே Call Stack வழியாக print ஆகிறது.

Step 2: setTimeout(..., 0) Macrotask queue-க்கு செல்கிறது.

Step 3: Promise callbacks Microtask queue-க்கு செல்கிறது.

Step 4: Stack காலியானதும் Event loop Microtask Queue-க்கு முன்னுரிமை தருகிறது. அதனால் 3 மற்றும் 4 print ஆகிறது.

Step 5: Microtasks அனைத்தும் முடிந்த பிறகே Macrotask-ல் உள்ள 2 எடுக்கப்பட்டு print ஆகிறது.

// *****************************   explain react native play store and app store deployment  **************************************

  React Native அப்ளிகேஷனை Android (Google Play Store) மற்றும் iOS (Apple App Store)-ல் வெளியிடுவதற்கான முழுமையான Deployment Pipeline மற்றும் படிகள்:1. Google Play Store Deployment (Android)Google Play Store-ல் பயன்பாட்டை வெளியிட AAB (Android App Bundle) வடிவில் பைனரி உருவாக்கப்பட வேண்டும்.Step 1: Upload Keystore உருவாக்குதல்ஆப் சைனிங் (App Signing) செய்வதற்கு keytool வழியாக ஒரு ரகசிய Keystore ஃபைலை உருவாக்க வேண்டும்:Bashkeytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
இந்த ஃபைலை android/app/ ஃபோல்டருக்குள் நகர்த்த வேண்டும்.Step 2: Gradle Credentials Setupபாதுகாப்புக் காரணங்களுக்காக பாஸ்வேர்டுகளை android/gradle.properties ஃபைலில் சேர்க்க வேண்டும்:PropertiesMYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
Step 3: android/app/build.gradle ConfigurationVersion Control: versionCode (ஒவ்வொரு build-க்கும் +1 அதிகரிக்க வேண்டும்) மற்றும் versionName ("1.0.0").Signing Configs:Groovyandroid {
    ...
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            shrinkResources true
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }
}
Step 4: Release AAB Build செய்தல்Bashcd android
./gradlew clean
./gradlew bundleRelease
பைனரி அவுட்புட்: android/app/build/outputs/bundle/release/app-release.aabStep 5: Play Console SubmissionGoogle Play Console-ல் உள்நுழைந்து Create App கிளிக் செய்யவும்.Internal Testing அல்லது Closed Testing (Alpha/Beta) டிராக்கில் .aab ஃபைலை அப்லோட் செய்து சோதனை செய்யவும் (Google-ன் 20 testers / 14 days விதிமுறைக்கு உட்பட்டு).Store Listing Details: App Icon (512x512), Feature Graphic (1024x500), Screenshots, Privacy Policy URL, App Access/Data Safety Form பூர்த்தி செய்து Production-க்கு அனுப்பவும்.2. Apple App Store Deployment (iOS)iOS-க்கு கட்டாயம் macOS மற்றும் Xcode தேவைப்படும்.Step 1: Apple Developer Account & Identifiersdeveloper.apple.com-ல் சென்று Bundle Identifier (e.g., com.company.appname) உருவாக்க வேண்டும்.Certificates, Identifiers & Profiles பகுதியில்:Distribution Certificate (.p12)App Store Provisioning Profile ஆகியவற்றை உருவாக்க வேண்டும்.Step 2: Bundle Version & App Capabilities Setupios/YourProject.xcworkspace-ஐ Xcode-ல் திறக்கவும்.General Tab:Version (1.0.0) மற்றும் Build (1, 2, 3...) செட் செய்யவும்.Target Device (iPhone/iPad) தேர்ந்தெடுக்கவும்.Signing & Capabilities:Automatically manage signing எனேபிள் செய்து உங்களின் Apple Developer Team-ஐ தேர்ந்தெடுக்கவும்.Push Notifications, Background Modes போன்ற capabilities தேவைப்பட்டால் சேர்க்கவும்.Info.plist Permissions: Camera, Location போன்ற அனுமதிகளுக்கான தெளிவான விளக்கங்களை (Usage Descriptions) கட்டாயம் உள்ளிட வேண்டும்; இல்லையெனில் build நிராகரிக்கப்படும்.Step 3: Archive & Upload via XcodeTarget Device-ஆக Any iOS Device (arm64) என்பதைத் தேர்ந்தெடுக்கவும்.Menu-வில் Product $\rightarrow$ Clean Build Folder செய்யவும்.Product $\rightarrow$ Archive கிளிக் செய்யவும்.Archive முடிந்ததும் திறக்கும் Organizer விண்டோவில்:Distribute App கிளிக் செய்யவும்.App Store Connect $\rightarrow$ Upload தேர்வு செய்து, cloud validation முடிந்து App Store Connect-க்கு அனுப்பவும்.Step 4: TestFlight & App Store Reviewappstoreconnect.apple.com சென்று:TestFlight வழியாக இன்டர்னல்/எக்ஸ்டர்னல் குழுவுக்கு பீட்டா டெஸ்டிங் அனுப்பலாம்.App Store Tab:Version Information, App Icon (1024x1024, no transparency), Screenshots (6.7" மற்றும் 5.5" Display sizes).Demo Account credentials (Reviewer login செய்ய).Submit for Review கிளிக் செய்யவும் (ஆப்பிளின் ரிவ்யூ பொதுவாக 24 - 48 மணிநேரம் எடுக்கும்).Deployment Comparison Tableகட்டமைப்பு விவரங்கள்Android (Google Play Store)iOS (Apple App Store)Binary Format.aab (Android App Bundle).ipa (Archive via Xcode)Signing Files.keystore / .jks (Keytool)Certificates (.p12) & Provisioning ProfilesBeta Testing ToolGoogle Play Internal / Closed TestingTestFlightBuild MachineWindows, Linux அல்லது macOSmacOS (Xcode கட்டாயம் தேவை)VersioningversionCode (Int), versionName (String)CFBundleVersion (Build), CFBundleShortVersionString (Version)Code ShrinkingProGuard / R8 (minifyEnabled true)Xcode Dead Code Stripping (Default)3 Years Experience Level: Interview-ல் சொல்ல வேண்டிய Advanced PointsFastlane Automation: Production-ல் manual-ஆக செய்யாமல் fastlane match, fastlane android deploy, fastlane ios release மூலமாக CI/CD pipeline (GitHub Actions/GitLab) அமைத்து automated deployment செய்த அனுபவத்தைக் கூறலாம்.ProGuard / R8 Issues: Android release build-ல் minifyEnabled true போடும் போது Hermes engine அல்லது native libraries கிராஷ் ஆனால், அவற்றுக்கான keep rules-ஐ android/app/proguard-rules.pro-ல் சேர்ப்பது அவசியம்.Hermes Bytecode Compatibility: Release build-ல் enableHermes: true என அமைக்கப்பட்டிருப்பதை உறுதி செய்து compilation time மற்றும் app launch performance-ஐ மேம்படுத்துவது.







  
