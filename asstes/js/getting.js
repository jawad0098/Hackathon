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


function GetAllData() {
    const dbRef = ref(db);
    get(child(dbRef, "Dishes"))
        .then((snapshot) => {
            var categoryes = [];
            snapshot.forEach(childSnapshot => {
                categoryes.push(childSnapshot.val());
            });
            displayData(categoryes);
        }).catch((error) => {
            console.error("Error getting data:", error);
        });
}

function displayData(data) {
    const container = document.querySelector('.swiper-wrapper');

    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('swiper-slide');
        const innerHTML = `
           <div class="control_card">
            <div class="coffe_item ab-${index + 1}">
             <img src="./asstes/images/pizza/1.png" alt="burger images">
            </div>
            <div class="coffe-detail ab-${index + 1}">
                <h5>${item.productCategory}</h5>
                <h5>$ ${item.sellingPrice}</h5>
                <h5>Order Now</h5>
            </div>
           </div>
        `;
        card.innerHTML = innerHTML;
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    GetAllData();
});

/* siwper init */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});