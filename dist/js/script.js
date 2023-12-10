const humbuger = document.querySelector("#humburger");
const nav = document.querySelector("header");
const navMenu = document.querySelector("#nav-menu");
const selainNav = document.querySelector(".selainNav");
const aboutRight = document.querySelector(".about-right");
const aboutLeft = document.querySelector(".about-left");

AOS.init();


// selainNav.addEventListener("click", function () {

// });


window.addEventListener('click', function (e) {
    if (e.target != humbuger && e.target != navMenu) {
        navMenu.classList.add("hidden");
        humbuger.classList.remove("humburger-active");

    }
});
humbuger.addEventListener("click", function () {
    humbuger.classList.toggle("humburger-active");
    navMenu.classList.toggle("hidden");
});


addEventListener("scroll", function () {

    const sumbuY = window.scrollY;
    // console.log(sumbuY);
    if (sumbuY > 0) {
        nav.classList.add("fixed-nav");


    }
    if (sumbuY == 0) {
        nav.classList.remove("fixed-nav");



    }
    // if(sumbuY > 266 ){
    //     // aboutRight.classList.add("r-about");
    //     // aboutLeft.classList.add("l-about");

    //     aboutLeft.classList.remove("opacity-0");
    //     aboutRight.classList.remove("opacity-0");
    //     aboutLeft.classList.add("opacity-100");
    //     aboutRight.classList.add("opacity-100");




    // }

    console.log(sumbuY);
});

function sendWhatsapp() {
    let phone = "+6285158449281";

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;
    if (!name || !email || !message) {
        alert("Harap isi semua kolom!");
        return;
    }

    const inputEmail = email;
    if (!isValidEmail(inputEmail)) {
        alert("Email tidak valid!");
        return;

    }


    const url = "https://wa.me/" + phone + "?text=" +
        "Name :  " + name + "%0a" +
        "Email :  " + email + "%0a" +
        "Message :  " + message + "%0a";

    window.open(url, '_blank').focus();

}


function isValidEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}


const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector('html');


darkToggle.addEventListener('click', function(){
    
    // html.classList.remove('dark');
    if(darkToggle.checked){
        html.classList.add('dark');
    }else{
        html.classList.remove('dark');
    }
});