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
    }, 3000);
}


// ----------------------------------------------------------------------

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


// ----------------------------------------------------------------------

//  Animations

const data1 = document.querySelector('[data-animation="1"]');
const data2 = document.querySelector('[data-animation="2"]');
const data3 = document.querySelector('[data-animation="3"]');
const data4 = document.querySelector('[data-animation="4"]');
const data5 = document.querySelectorAll('[data-animation="5"]');
const data6 = document.querySelectorAll('[data-animation="6"]');
const data7 = document.querySelectorAll('[data-animation="7"]');
const data8 = document.querySelector('[data-animation="8"]');
const data9 = document.querySelector('[data-animation="9"]');
const data10 = document.querySelector('[data-animation="10"]');
const data11 = document.querySelector('[data-animation="11"]');
const data12 = document.querySelector('[data-animation="12"]');

//  Event
window.addEventListener('scroll', debounce(function(){
    animations();
}, 100));

//  Animation Function
function animations(){
    const fadeAnimation = document.querySelectorAll('.fade-in');
    const topHeight = window.innerHeight * 0.75;

    fadeAnimation.forEach(function(element, index){
        if(element.getBoundingClientRect().top - topHeight < 0){
            switch(index){
                case 0:
                    gsap.to(data1, { duration: 1, x: 0, opacity: 1 });
                    gsap.to(data2, { duration: 1, x: 0, opacity: 1 });
                    break;
                case 1:
                    gsap.to(data3, { duration: 1, x: 0, opacity: 1 });
                    gsap.to(data4, { duration: 1, x: 0, opacity: 1 });
                    break;
                case 2:
                    const timeLine = gsap.timeline();

                    timeLine
                        .to(data5, { duration: 1, x: 0, opacity: 1 })
                        .to(data6, { duration: .5, x: 0, opacity: 1 });
                    gsap.to(data7, { duration: 1, y: 0, opacity: 1 });
                    break;
                case 3:
                    gsap.to(data8, { duration: 1, y: 0, opacity: 1 });
                    break;
                case 4:
                    if(window.pageXOffset + window.innerWidth <= 1280){
                        gsap.to(data10, { duration: 1, y: 0, opacity: 1 });
                    }else{
                        gsap.to(data10, { duration: 1, y: -30, opacity: 1 });
                    }
    
                    gsap.to(data9, { duration: 1, x: 0, opacity: 1 });
                    gsap.to(data11, { duration: 1, x: 0, opacity: 1 });
                    gsap.to(data12, { duration: 1.5, y: 0, opacity: 1 });
            }
        }
    });
}

animations();

//  efeito scroll section
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

//  date
document.querySelector('.year').innerHTML = new Date().getFullYear();