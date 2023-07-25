
let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
let buttons = document.querySelectorAll(".navbar a");
let loginBn = document.querySelector("#login-btn");

menuBtn.addEventListener('click', function () {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
})
window.onscroll = function () {

    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add('active');
    } else {
        document.querySelector(".header").classList.remove('active');
    }

    navbar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
}
window.onload = function () {

    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add('active');
    } else {
        document.querySelector(".header").classList.remove('active');
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        navbar.classList.remove('active');
        menuBtn.classList.remove('fa-times');
    })
}

loginBn.addEventListener('click', function () {
    document.querySelector(".login-form-container").classList.toggle('active');
    navbar.classList.remove('active');
})

document.querySelector("#close").addEventListener('click', function () {
    document.querySelector(".login-form-container").classList.remove('active');
})

document.querySelector('.home').onmousemove = (e) => {

    document.querySelectorAll('.home-parallax').forEach(elm => {

        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

    });

};
document.querySelector('.home').onmouseleave = (e) => {

    document.querySelectorAll('.home-parallax').forEach(elm => {

        elm.style.transform = `translateX(0px) translateY(0px)`;

    });

};

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grapCursor: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".featured-slider2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".slider-reviews", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});