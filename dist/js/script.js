const humbuger = document.querySelector("#humburger");
const nav = document.querySelector("header");
const navMenu = document.querySelector("#nav-menu");
const selainNav = document.querySelector(".selainNav");
const aboutRight = document.querySelector(".about-right");
const aboutLeft = document.querySelector(".about-left");

AOS.init();


// selainNav.addEventListener("click", function () {

// });


// klik ketika di luar humburger
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

    console.log(sumbuY)
    // console.log(sumbuY);
    if (sumbuY > 0) {
        nav.classList.add("fixed-nav");
        nav.classList.add("transparent");


    }
    if (sumbuY == 0) {
        nav.classList.remove("fixed-nav");



    }

    if(sumbuY >= 365){
        nav.classList.remove('bg-transparent')
        nav.classList.add('bg-white')
        nav.classList.add('dark:bg-neutral-950');
        // navBar.classList.add('text-neutral-950');
        navBar.classList.remove('text-white');
        navBar.classList.remove('lg:text-white');


       
    }

    if(sumbuY <= 365){
        nav.classList.add('bg-transparent')
        nav.classList.remove('bg-white')
        nav.classList.remove('dark:bg-neutral-950');
        navBar.classList.add('lg:text-white');

        
    }
    // if(sumbuY > 266 ){
    //     // aboutRight.classList.add("r-about");
    //     // aboutLeft.classList.add("l-about");

    //     aboutLeft.classList.remove("opacity-0");
    //     aboutRight.classList.remove("opacity-0");
    //     aboutLeft.classList.add("opacity-100");
    //     aboutRight.classList.add("opacity-100");




    // }

    // console.log(sumbuY);
});


window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let parallaxText = document.getElementById('parallax-text');
    let parallaxText2 = document.getElementById('parallax-text2');
    let parallaxText3 = document.getElementById('parallax-text3');
    
    parallaxText.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
    parallaxText2.style.transform = 'translateY(' + scrollPosition * -0.2 + 'px)';
    parallaxText3.style.transform = 'translateY(' + scrollPosition * -0.2 + 'px)';

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




const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

const navBar = document.querySelector('#nav-menu');
// Function to toggle dark mode
const toggleDarkMode = () => {
    if(darkToggle.checked){
        html.classList.add('dark');
        navBar.classList.add('bg-neutral-950');
        navBar.classList.remove('bg-white');
        
    } else {
        console.log('tess');

        html.classList.remove('dark');
        navBar.classList.remove('bg-neutral-950');
        navBar.classList.add('bg-white');


    }
};

// Initial check when the page loads
toggleDarkMode();

// Event listener for change event on the checkbox
darkToggle.addEventListener('change', toggleDarkMode);

