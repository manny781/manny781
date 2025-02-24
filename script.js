// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfWCUCBbeFQ__gF9_RpNaLwjKG2aYDrXI",
    authDomain: "free-web-8b432.firebaseapp.com",
    projectId: "free-web-8b432",
    storageBucket: "free-web-8b432.appspot.com",
    messagingSenderId: "329974976202",
    appId: "1:329974976202:web:b31726a172b785d17e2e33",
    measurementId: "G-BXT23EPQ66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up Function
window.signUp = function() {
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;
    const login = document.querySelectorAll("onclick");
    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Account Created Successfully!");
        })
        .catch((error) => {
            alert(error.message);
        });
};

// Login Function
window.login = function() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        })
        .catch((error) => {
            alert(error.message);
        });
};
