// ============ Firebase Configuration ============
// This project uses the Firebase compat SDK loaded via <script> tags
// (see the <head> of contact.html / admin.html) since the site has no
// build step — it's plain static HTML/CSS/JS deployed on Vercel.

const firebaseConfig = {
    apiKey: "AIzaSyBn8QSCmEFH4SLcTnFHMhNK_xcC0kkh-zw",
    authDomain: "al-rayyan-hostel-website.firebaseapp.com",
    projectId: "al-rayyan-hostel-website",
    storageBucket: "al-rayyan-hostel-website.firebasestorage.app",
    messagingSenderId: "1054592078667",
    appId: "1:1054592078667:web:af6336426c216e80814ece"
};

// Initialize Firebase + Firestore (only once, only if the SDK is present on the page)
let db = null;
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
}

console.log('🔐 Firebase config loaded');
