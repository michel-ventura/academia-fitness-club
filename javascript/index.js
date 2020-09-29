let images = document.querySelectorAll('.img-banner');
let currentImgIndex = 0;

window.addEventListener('load', start);

function nextImage(){
    images[currentImgIndex].classList.remove('selected');

    currentImgIndex++;

    if(currentImgIndex >= images.length) currentImgIndex = 0;

    images[currentImgIndex].classList.add('selected');
}

function start(){
    images[currentImgIndex].classList.add('selected');

    setInterval(() => {
        nextImage();
    }, 5000);
}