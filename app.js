const images = [
    {
        name: 'Alicia',
        img: '<img src="./img/mono/Alicia.jpg" class="noselect" alt="...">',
    },{
        name: 'Ralph',
        img: '<img src="./img/mono/Ralph.jpg" class="noselect" alt="...">',
    },{
        name: 'Candace',
        img: '<img src="./img/mono/Candace.jpg" class="noselect" alt="...">',
    },{
        name: 'Eddie',
        img: '<img src="./img/mono/Eddie.jpg" class="noselect" alt="...">',
    },{
        name: 'Matt',
        img: '<img src="./img/mono/Matt.jpg" class="noselect" alt="...">',
    },{
        name: 'Kristy',
        img: '<img src="./img/mono/Kristy.jpg" class="noselect" alt="...">',
    },{
        name: 'James',
        img: '<img src="./img/mono/James.jpg" class="noselect" alt="...">',
    },{
        name: 'Rick',
        img: '<img src="./img/mono/Rick.jpg" class="noselect" alt="...">',
    },
]

const logos = [
    {
        name: '[alt]px',
        img: '<img src="./img/logos/altpx_Logo.png">',
    },{
        name: 'OCD',
        img: '<img src="./img/logos/OCD_Logo.jpg">',
    },{
        name: 'RedDawg',
        img: '<img src="./img/logos/RedDawg_logo.jpg">',
    },
]

const carousel = document.querySelector('.carousel');
const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const upBtn = document.querySelector('#upBtn');
const downBtn = document.querySelector('#downBtn');
const carouselBtn = document.querySelector('#carBtn');

// const logoCarousel = document.querySelector('.logo-carousel');
const logoContainer = document.querySelector('.logo-container');
// const logoPrevBtn = document.querySelector('#logoPrevBtn');
// const logoNextBtn = document.querySelector('#logoNextBtn');
// const logoUpBtn = document.querySelector('#logoUpBtn');
// const logoDownBtn = document.querySelector('#logoDownBtn');
const logoBtn = document.querySelector('#logoBtn');

const lightbox = document.getElementById('lightbox');

let counter = 0;

function next() {
    if (counter == images.length - 1) {
        counter = 0
        carousel.innerHTML = images[counter].img;
    } else {
        counter ++;
        carousel.innerHTML = images[counter].img;
    }
}

function prev() {
    if (counter == 0) {
        counter = images.length - 1;
        carousel.innerHTML = images[counter].img;
    } else {
        counter --;
        carousel.innerHTML = images[counter].img;
    }

}

// function nextLogo() {
//     if (counter == logos.length - 1) {
//         counter = 0
//         logoCarousel.innerHTML = logos[counter].img;
//     } else {
//         counter ++;
//         logoCarousel.innerHTML = logos[counter].img;
//     }
// }

// function prevLogo() {
//     if (counter == 0) {
//         counter = logos.length - 1;
//         logoCarousel.innerHTML = logos[counter].img;
//     } else {
//         counter --;
//         logoCarousel.innerHTML = logos[counter].img;
//     }

// }

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);
upBtn.addEventListener('click', prev);
downBtn.addEventListener('click', next);
// logoNextBtn.addEventListener('click', nextLogo);
// logoPrevBtn.addEventListener('click', prevLogo);
// logoUpBtn.addEventListener('click', prevLogo);
// logoDownBtn.addEventListener('click', nextLogo);

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            prev();
            break;
        case 39:
            next();
            break;
        case 38:
            prev();
            break;
        case 40:
            next();
            break;
    }
};

carouselBtn.addEventListener('click', e => {
    carouselContainer.classList.remove('hide');
    logoContainer.classList.add('hide');
    lightbox.classList.add('active');
})

logoBtn.addEventListener('click', e => {
    carouselContainer.classList.add('hide');
    logoContainer.classList.remove('hide');
    lightbox.classList.add('active');
})

lightbox.addEventListener('click', e => {
    if (e.target == e.currentTarget) 
    return lightbox.classList.remove('active')
})

