//  Slider

let images = document.querySelectorAll('.img-banner');
let currentImgIndex = 0;

images[currentImgIndex].classList.add('selected');

window.addEventListener('load', start);

function nextImage(){
    images[currentImgIndex].classList.remove('selected');
    
    currentImgIndex++;
    
    if(currentImgIndex >= images.length) currentImgIndex = 0;
    
    images[currentImgIndex].classList.add('selected');
}

function start(){
    setInterval(() => {
        nextImage();
    }, 5000);
}

// ----------------------------------------------------------------

//  Menu Toggle

const navbarOpen = document.querySelector('.btn-toggle');
const navbarClose = document.querySelector('.fa-times');
const navbarLinks = document.querySelector('.navbar-links');

navbarOpen.addEventListener('click', function(){
    navbarLinks.classList.toggle('open');
}, false);

navbarClose.addEventListener('click', function(){
    navbarLinks.classList.toggle('open');
}, false);