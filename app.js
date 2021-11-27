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

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const lightbox = document.getElementById('lightbox');
const carouselBtn = document.querySelector('#carBtn');
const mobileImg = document.querySelector('#mobileImages');

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

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            prev();
            break;
        case 39:
            next();
            break;
    }
};

carouselBtn.addEventListener('click', e => {
    lightbox.classList.add('active');
})

lightbox.addEventListener('click', e => {
    if (e.target == e.currentTarget) 
    return lightbox.classList.remove('active')
})

// for (let i = 0; i < images.length; i++) {
//     mobileImg.insertAdjacentHTML('afterend', images[i].img);
// }