const menu = document.querySelector("nav ul");
const toggle = document.querySelector('#toggle');
toggle.onclick = () => {
    menu.classList.toggle('active');
    toggle.querySelector('i').classList.toggle('fa-bars');
    toggle.querySelector('i').classList.toggle('fa-x');
}

const images = document.querySelectorAll("#home .home-photo");
let index = 0

const nextSlide = () => {
    images.forEach(image => image.classList.remove('active'))
    images[index].classList.add('active');
    index = (index + 1) % images.length
}

const prevSlide = () => {
    images.forEach(image => image.classList.remove('active'))
    images[index].classList.add('active');
    index = (index - 1 + images.length) % images.length
}

const nextBtn = document.querySelector("#next");
nextBtn.onclick = () => nextSlide()

const prevBtn = document.querySelector("#prev");
prevBtn.onclick = () => prevSlide()

setInterval(nextSlide, 5000);