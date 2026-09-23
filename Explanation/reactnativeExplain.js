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


















  
