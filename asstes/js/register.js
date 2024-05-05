
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyD0LfnC9RWT-vqNUPP7D8XR9ymiqkD6HIE",
    authDomain: "foodapp-b17f3.firebaseapp.com",
    projectId: "foodapp-b17f3",
    storageBucket: "foodapp-b17f3.appspot.com",
    messagingSenderId: "638547820405",
    appId: "1:638547820405:web:c7c577f208a536f5101d3c",
    measurementId: "G-HXXH1M0F14"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();



const submit = document.getElementById('btn');

submit.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById('semail').value;
    const password = document.getElementById('spass').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            alert("created Successfuly!")
            document.querySelector('label.signup-label').click();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error.message)
        });
})

/* login */
const submitt = document.getElementById('lbtn');

submitt.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById('lemail').value;
    const password = document.getElementById('lpass').value;
   
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("login Successfuly!")
        window.location.href = "index.html";
    })

    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message)
    });

});