// const humbuger = document.querySelector("#humburger");
const nav = document.querySelector("#header");
const navMenu = document.querySelector("#nav-menu");
const selainNav = document.querySelector(".selainNav");
const aboutRight = document.querySelector(".about-right");
const aboutLeft = document.querySelector(".about-left");

AOS.init();


// selainNav.addEventListener("click", function () {

// });


// klik ketika di luar humburger
// window.addEventListener('click', function (e) {
//     if (e.target != humbuger && e.target != navMenu) {
//         navMenu.classList.add("hidden");
//         humbuger.classList.remove("humburger-active");

//     }
// });
// humbuger.addEventListener("click", function () {
//     humbuger.classList.toggle("humburger-active");
//     navMenu.classList.toggle("hidden");
// });


// addEventListener("scroll", function () {

//     const sumbuY = window.scrollY;

//     console.log(sumbuY)
//     // console.log(sumbuY);
//     if (sumbuY > 0) {
//         nav.classList.add("fixed-nav");
//         nav.classList.add("lg:transparent");


//     }
//     if (sumbuY == 0) {
//         nav.classList.remove("fixed-nav");



//     }

//     if (sumbuY >= 365) {
//         nav.classList.remove('bg-transparent')
//         nav.classList.add('bg-white')
//         nav.classList.add('dark:bg-neutral-950');
//         // navBar.classList.add('text-neutral-950');
//         navBar.classList.remove('text-white');
//         navBar.classList.remove('lg:text-white');



//     }

//     if (sumbuY <= 365) {
//         nav.classList.add('bg-transparent')
//         nav.classList.remove('bg-white')
//         nav.classList.remove('dark:bg-neutral-950');
//         navBar.classList.add('lg:text-white');


//     }
//     // if(sumbuY > 266 ){
//     //     // aboutRight.classList.add("r-about");
//     //     // aboutLeft.classList.add("l-about");

//     //     aboutLeft.classList.remove("opacity-0");
//     //     aboutRight.classList.remove("opacity-0");
//     //     aboutLeft.classList.add("opacity-100");
//     //     aboutRight.classList.add("opacity-100");




//     // }

//     // console.log(sumbuY);
// });

nav.classList.remove('shadow-lg');


addEventListener("scroll", function () {
    const nav = document.getElementById('header'); // Mengambil elemen header dengan ID 'header'
    const navBar = document.querySelector('.flex-none.text-xl.font-semibold.dark\\:text-white'); // Mengambil elemen navigasi yang mengontrol warna teks

    const sumbuY = window.scrollY; // Mendapatkan posisi scroll vertikal saat ini

    console.log(sumbuY);

    // if(sumbuY > 108){
    //     document.querySelector('#profile').classList.remove('hidden')
        
    // }
    if (sumbuY > 365) {
        // Ketika scroll melebihi 365, atur warna latar belakang dan teks
        document.querySelector('#myblog').classList.add('text-black');
        document.querySelector('#myblog').classList.remove('text-white');
        
        nav.classList.remove('bg-transparent');
        
        nav.classList.add('bg-white');
        nav.classList.add('shadow-lg');
        nav.classList.add('text-black'); // Atur warna teks menjadi hitam
        nav.classList.remove('text-white'); // Atur warna teks menjadi hitam
        nav.classList.add('dark:bg-neutral-950');
        nav.classList.add('dark:text-white'); 


    } else {
        document.querySelector('#myblog').classList.remove('text-black');
        document.querySelector('#myblog').classList.add('text-white');

        // Ketika scroll kurang dari atau sama dengan 365, kembalikan ke gaya awal
        nav.classList.remove('dark:bg-neutral-950');
        nav.classList.add('text-white');
        nav.classList.remove('text-black');

        nav.classList.add('bg-transparent');
        nav.classList.remove('bg-white');
        nav.classList.remove('shadow-lg');
        // nav.classList.remove('dark:bg-neutral-950');
        // navBar.classList.remove('text-black');
        navBar.classList.add('text-white'); // Kembali ke warna teks aslinya
    }
});



window.addEventListener('scroll', function () {
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


// This code should be added to <head>.
// It's used to prevent page load glitches.
const darkToggle = document.getElementById('dark-toggle');
const lightIcon = document.querySelector('.light-icon');
const darkIcon = document.querySelector('.dark-icon');

darkToggle.addEventListener('change', function () {
    if (this.checked) {
        // Dark Mode
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');

    } else {
        // Light Mode
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
    }
});




// const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

const navBar = document.querySelector('#nav-menu');
// Function to toggle dark mode
const toggleDarkMode = () => {
    if (darkToggle.checked) {
        html.classList.add('dark');
        navBar.classList.add('bg-neutral-950');
        navBar.classList.remove('bg-white');

    } else {
        console.log('tess');

        html.classList.remove('dark');
        // navBar.classList.remove('bg-neutral-950');
        // navBar.classList.add('bg-white');


    }
};

document.getElementById('dark-toggle').addEventListener('change', function () {
    document.documentElement.classList.toggle('dark', this.checked);
    toggleIcons(this.checked);
});



// Initial check when the page loads
toggleDarkMode();

// Event listener for change event on the checkbox
darkToggle.addEventListener('change', toggleDarkMode);



//nav

document.addEventListener('DOMContentLoaded', () => {
    const navActiveElements = document.querySelectorAll('.navActive');
    const sections = document.querySelectorAll('.section'); // Asumsikan setiap bagian memiliki kelas 'section'

    // Menambahkan event listener untuk klik pada setiap elemen navigasi


    // Fungsi untuk menambahkan kelas 'text-primary' dan 'underline' berdasarkan posisi scroll
    function onScroll() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight - 60) {
                currentSection = section.getAttribute('id');
            }
        });

        // Mengatur status elemen navigasi berdasarkan bagian yang sedang ditampilkan
        navActiveElements.forEach(navElement => {
            const hrefValue = navElement.getAttribute('href');
            if (!currentSection || !hrefValue || !hrefValue.includes(`#${currentSection}`)) {
                navElement.classList.remove('text-primary');
                navElement.classList.remove('underline');
            } else {
                navElement.classList.add('text-primary');
                navElement.classList.add('underline');
            }
        });
    }

    // Menambahkan event listener untuk scroll
    window.addEventListener('scroll', onScroll);

    // Memanggil fungsi onScroll saat halaman dimuat untuk menetapkan status awal
    onScroll();
});