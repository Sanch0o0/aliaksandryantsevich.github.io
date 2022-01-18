data.sort(function(a, b) {
    if (a.brand < b.brand) { return -1; }
    if (a.brand > b.brand) { return 1; }
    return 0;
});

const allBrands = [...new Set(data.map((element) => element.brand))];
const allModel = [...new Set(data.map((element) => element.model))];
const brandsContainerElement = document.querySelector('#brandsContainer');
const topBoxElement = document.querySelector('#topBox');
const adsList = document.querySelector('#ads');


renderBrandsForm()
renderProducts()
counterAds()

function renderBrandsForm() {
    let html = '';
    for (let i = 0; i < allBrands.length; i++) {
        let count = 0;
        let brand = allBrands[i];
        for (let k = 0; k < data.length; k++) {
            if (brand === data[k].brand) count++;
        }
        html += `<div class="brand" id="brandsContainer" onclick="renderNewPage('${brand}')">${brand} <span class="count-span">${count}<span></div>`
        count = 0;
    }
    brandsContainerElement.innerHTML = html;
}



function counterAds() {
    let allCount = 0;
    for (let k = 0; k < data.length; k++) {
        allCount++;
    }
    document.getElementById("allAds").innerHTML = `${allCount}`;
}

function render() {
    const pageItems = getItemsPerPage();
    renderProducts(pageItems);
    drawSelectedPage();
}

function renderAllAds() {
    let html = '';
    topBoxElement.classList.add('top-box-ads')
    for (let i = 0; i < data.length; i++) {
        const product = data[i];
        html += `
            <div class="product-box-ads">
                <div class="product-img-box">
                    <img class="product-image" src='${product.img}'>
                </div>
                <div class="product-name-box">
                <a href="./html/open-page.html" class="name-href" onclick="localStorage.setItem('pageId', ${product.id})">
                        <span class="product-brand-ads">${product.brand}</span>
                        <span class="product-model-ads">${product.model}</span>
                        <span class="product-generation-ads">${product.generation}</span>
                        </a>
                </div>
                <div class="product-description-box">
                    <span class="">${product.description}</span>
                </div>
                <div class="product-price"> <span class="product-price-rub"> ${product.price} р. </span> <span class="product-price-dol"> ≈ ${Math.round(product.price/2.42)} $ </span></div>
                <div class="empty"></div>
                <div class="product-butt">
                    <button class="product-action" onclick=" addToBucket(${i})">bookmark_border</button>
                </div>
            </div>`
    }
    document.getElementById("top").innerHTML = "Объявления";
    topBoxElement.innerHTML = html;
}

function renderProducts() {
    data.sort(function(a, b) {
        if (a.brand < b.brand) { return -1; }
        if (a.brand > b.brand) { return 1; }
        return 0;
    })
    let html = '';
    for (let i = 0; i < 8; i++) {
        const product = data[i];
        html += `  
<div class="product-box">
<div class="product">
<img class="product-image" src='${product.img}'>
<div class="product-bottom">
<div class="product-left">
<div class="product-name">
<a href="./html/open-page.html" class="name-href" onclick="localStorage.setItem('pageId', ${product.id})">
<span class="product-brand">${product.brand}</span>
<span class="product-model">${product.model}</span>
<span class="product-generation">${product.generation}</span>
</a>
</div>
<div class="product-price"> <span class="product-price-rub"> ${product.price} р. </span> <span class="product-price-dol"> ≈ ${Math.round(product.price/2.42)} $ </span></div>
<span class="product-description">${product.description}</span>
</div>
<div class="product-butt">
<button class="product-action" onclick="addToBucket(${product.id})">bookmark_border</button>
</div>
</div>
</div>
</div>`
    }
    document.getElementById("head-name").innerHTML = "Объявления о продаже автомобилей с пробегом в Беларуси";
    document.getElementById("top").innerHTML = "Топ-объявления";
    topBoxElement.innerHTML = html;
}