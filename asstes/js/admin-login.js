 
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0LfnC9RWT-vqNUPP7D8XR9ymiqkD6HIE",
    authDomain: "foodapp-b17f3.firebaseapp.com",
    databaseURL: "https://foodapp-b17f3-default-rtdb.firebaseio.com",
    projectId: "foodapp-b17f3",
    storageBucket: "foodapp-b17f3.appspot.com",
    messagingSenderId: "638547820405",
    appId: "1:638547820405:web:c7c577f208a536f5101d3c",
    measurementId: "G-HXXH1M0F14"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


let getBtn = document.querySelector("#btn")
if (getBtn) {
    getBtn.addEventListener("click", () => {
        let authUser = () => {
            let getEmail = document.querySelector("#semail").value
            let getPass = document.querySelector("#spass").value
            createUserWithEmailAndPassword(auth, getEmail, getPass)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.onmouseenter = Swal.stopTimer;
                          toast.onmouseleave = Swal.resumeTimer;
                        }
                      });
                      Toast.fire({
                        icon: "success",
                        title: "Signup in successfully!"
                      });
                    document.querySelector('label.signup-label').click();


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text:error,
                      });
                });
        }
        authUser()
    })
}


let getLbtn = document.querySelector("#lbtn")
if (getLbtn) {
    getLbtn.addEventListener('click', () => {
        let email = document.querySelector("#lemail").value
        let password = document.querySelector("#lpass").value

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "success",
                    title: "Login successfully!"
                  });                location.href = './manage.html'
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
            });
    })
}