function renderNewPage(brand) {
    console.log(brand);
    let html = '';
    let count = 0;
    topBoxElement.classList.add('top-box-ads')
    for (let i = 0; i < data.length; i++) {
        const product = data[i];
        if (data[i].brand === brand) {
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
                    <button class="product-action" onclick="addToBucket(${i})">bookmark_border</button>
                </div>
            </div>`
            count++;
        }
    }
    document.getElementById("head-name").innerHTML = `Продажа автомобилей ${brand} в Беларуси`;
    document.getElementById("breadcrumb").innerHTML = `<a class="a-bredC" href="./index.html">Автомобили</a><span class="MaterialBred">arrow_right_alt</span><span class="brandBred">${brand}
    </span>`;
    document.getElementById("top").innerHTML = `Найдено ${count} объявления`;
    topBoxElement.innerHTML = html;
}

function renderAds() {
    console.log(brand);
    let html = '';
    let count = 0;
    topBoxElement.classList.add('top-box-ads')
    for (let i = 0; i < data.length; i++) {
        const product = data[i];
        if (data[i].brand === brand) {
            html += `
            <div class="product-box-ads">
                <div class="product-img-box">
                    <img class="product-image" src='${product.img}'>
                </div>
                <div class="product-name-box" >
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
                    <button class="product-action" onclick="addToBucket(${i})">bookmark_border</button>
                </div>
            </div>`
            count++;
        }
    }
    document.getElementById("head-name").innerHTML = `Продажа автомобилей ${brand} в Беларуси`;
    document.getElementById("breadcrumb").innerHTML = `<a class="a-bredC" href="./main.html">Автомобили</a><span class="MaterialBred">arrow_right_alt</span><span class="brandBred">${brand}
    </span>`;
    document.getElementById("top").innerHTML = `Найдено ${count} объявления`;
    topBoxElement.innerHTML = html;
}