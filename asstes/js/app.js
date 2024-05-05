
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, set, ref, get, child } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";


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
const db = getDatabase(app);



const makecateGory = document.getElementById('makeCategory');

makecateGory.addEventListener("click", function (event) {
    event.preventDefault();
   
    set(ref(db,'Dishes/' + document.getElementById("productCategory").value),
{
    productName : document.getElementById("prductName").value,
    sellingPrice : document.getElementById("sellingPrince").value,
    productCategory : document.getElementById("productCategory").value,
    costPrice : document.getElementById("costPrice").value,
    itemQuantity : document.getElementById("itemQuantity").value,
    fileInput : document.getElementById("formFile").value,
    description : document.getElementById("Discription").value,
}),
alert("added category")
   
});


