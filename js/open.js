const images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lada_%287906720346%29.jpg/1200px-Lada_%287906720346%29.jpg',
    'https://wroom.ru/i/cars2/lada_2106_1.jpg',
    'https://wroom.ru/i/cars2/lada_2108_1.jpg',
    'https://static.wikia.nocookie.net/autopedia/images/c/c4/Autowp.ru_vaz_2109_sputnik_2.jpg/revision/latest?cb=20140310042648&path-prefix=ru'
];

const IMAGE_WIDTH = 575;
const REDC_LENGHT = 80;

let imageContainer = document.getElementById('imageContainer');
let carouselPhotoContainer = document.getElementById('photo-box');
let redContainerElement = document.getElementById('red-container');
let rightTopBox = document.getElementById('right-top-box');
let headName = document.getElementById('header-text-id');
let bucketBut = document.getElementsByName('product-butt');

window.addEventListener('load', renderDescription);

let currentIndex = 0;
renderImages();
const numberId = 0;

function showPrev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    render();
}

function showNext() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    render();
}

function render() {
    const offset = currentIndex * IMAGE_WIDTH;
    imageContainer.style.transform = `translateX(-${offset}px)`;
    const offset2 = currentIndex * REDC_LENGHT + (4 * currentIndex);
    console.log(offset2)
    redContainerElement.style.transform = `translateX(${offset2}px)`;
}

function renderImages() {
    let html = '';
    let photo = '';
    const number = parseInt(localStorage.getItem('pageId'));
    images.unshift(data[number].img);
    for (let image of images) {
        html += `<img class="car-image" src="${image}">`
        photo += `<img class="carousel-photo" src="${image}">`
    }
    imageContainer.innerHTML = html;
    carouselPhotoContainer.innerHTML += photo;
}

function newId(itemId) {;
}

function renderDescription() {
    let html = '';
    const number = parseInt(localStorage.getItem('pageId'));
    console.log(number);
    const product = data[number];
    html += `<div class="product-price"> <span class="product-price-rub"> ${product.price} р. </span> <span class="product-price-dol"> ≈ ${Math.round(product.price/2.42)} $ </span></div>
    <span class="product-description">${product.description}</span>`
    rightTopBox.innerHTML = html;
    headName.innerHTML = `<span class="product-brand">${product.brand}</span>
    <span class="product-model">${product.model}</span>
    <span class="product-generation">${product.generation}</span>`;
    document.getElementById("breadcrumb").innerHTML = `<a class="a-bredC" href="../index.html">Автомобили</a><span class="MaterialBred">arrow_right_alt</span><span class="a-bredC">${product.brand}
    </span><span class="MaterialBred">arrow_right_alt</span><span class="a-bredC">${product.model}
    </span><span class="MaterialBred">arrow_right_alt</span><span class="brandBred">Купить <span class="product-brand">${product.brand}</span>
    <span class="product-model">${product.model}</span>
    <span class="product-generation">${product.generation}</span></span>`;
    bucketBut.innerHTML = `<button class="product-action" onclick="addToBucket(${number})">bookmark_border</button>`
}