const bucketElements = document.getElementById('bucketElementContainer')
const numbersId = [];
const shareElement = document.getElementById('share-butt-id');
const productAction = document.getElementsByName('product-action');
const addElement = document.getElementsByName('add-box');

window.addEventListener('load', renderBucket);

function bucketBut(itemId) {
    let count = 0;
    count++;
    if (count % 2) {
        addToBucket(itemId)
        productAction.style.color = 'yellow';
    } else removeFromBucket(itemIndex)
}

function addToBucket(itemId) {
    numbersId.push(Number(itemId));
    console.log(numbersId);
    localStorage.setItem('bucketId', JSON.stringify(numbersId));
    console.log('1111');
    addElement.classList.add('add-animation')
}

function removeFromBucket(itemIndex) {
    const object = JSON.parse(localStorage.getItem('bucketId'));
    object.splice(itemIndex, 1);
    localStorage.setItem('bucketId', JSON.stringify(object));
    renderBucket();
}

function renderBucket() {
    let buckethtml = '';
    const object = JSON.parse(localStorage.getItem('bucketId'));
    console.log(object);
    if (object.length > 0) {
        for (let k = 0; k < object.length; k++) {
            const product = data[object[k]];
            buckethtml += `
        <div class="product-box-ads--">
        <div class="product-img-box--">
            <img class="product-image--" src='${product.img}'>
        </div>
        <div class="product-name-box--">
        <a href="../html/open-page.html" class="name-href" onclick="localStorage.setItem('pageId', ${product.id})">
                <span class="product-brand-ads--">${product.brand}</span>
                <span class="product-model-ads--">${product.model}</span>
                <span class="product-generation-ads--">${product.generation}</span>
                </a>
        </div>
        <div class="product-description-box--">
            <span class="">${product.description}</span>
        </div>
        <div class="product-price"> <span class="product-price-rub"> ${product.price} р. </span> <span class="product-price-dol"> ≈ ${Math.round(product.price/2.42)} $ </span></div>
        <div class="empty"></div>
        <div class="product-butt--">
            <button class="product-action" onclick="removeFromBucket(${k})">delete</button>
        </div>
        </div>`
        }
        shareElement.innerHTML = `
        <div class="share-box">
        <span class="share-icon">share</span>
        <span class="share-text">Поделиться</span>
        </div>`
        bucketElements.innerHTML = buckethtml;
    } else {
        shareElement.innerHTML = '';
        bucketElements.innerHTML = `<h1 class="empty-bucket-h1">У вас нет закладок</h1>
        <span class="empty-buc-span">Добавьте объявление в закладки и вернитесь к нему в любое время. Управляйте закладками на странице объявления или из личного кабинета. Отправляйте закладки другим людям, чтобы узнать их мнение о своем выборе.</span>
        <img src="../bookmarks-empty.svg" alt="" class='img-empty'>`
    }
}