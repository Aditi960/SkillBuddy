// ✅ Firebase initialization using compat (global) style

const firebaseConfig = {
  apiKey: "AIzaSyAJITCIWvoT5tIXgJYkPofEvi9ngQ7yJ3s",
  authDomain: "skillbuddy-b7724.firebaseapp.com",
  projectId: "skillbuddy-b7724",
  storageBucket: "skillbuddy-b7724.appspot.com",
  messagingSenderId: "802859457126",
  appId: "1:802859457126:web:1b9c49b71abba084a3aba7",
  measurementId: "G-Z3ELQ7ZNZS"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); // ✅ Firestore access using compat
window.db = db; // ✅ Expose globally if needed by inline scripts
