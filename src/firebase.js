import app from "firebase/app";
import "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyDO8BVBYHxJReKyuMGpX4A3dn5mLlFGdKc",
    authDomain: "stock-market-f00f4.firebaseapp.com",
    projectId: "stock-market-f00f4",
    storageBucket: "stock-market-f00f4.appspot.com",
    messagingSenderId: "422037100419",
    appId: "1:422037100419:web:f878897304ba37d61548b6"
  };
  
// Initialize Firebase
app.initializeApp(firebaseConfig);

export const auth = app.auth();