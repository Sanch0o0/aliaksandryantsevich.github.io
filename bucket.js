const bucketItems = [];
const bucketContainerElement = document.querySelector('#bucketContainer')

function addToBucket(itemIndex) {
    const product = getItemsPerPage()[itemIndex]
    bucketItems.push(product);
    renderBucket();
}

function removeFromBucket(itemIndex) {
    bucketItems.splice(itemIndex , 1);
    renderBucket();
}

function toggleBucket() {
    bucketContainerElement.classList.toggle('opened');
}

function renderBucket() {
    let html = '';
    for (let i = 0; i < bucketItems.length; i++) {
        const product = bucketItems[i];
        html += `
<div class="product">
    <h3 class="product-title">${product.title}</h3>
    <span class="product-price">${product.price}</span>
    <button class="product-action" onclick="removeFromBucket(${i})">Удалить</button>
</div>`
    }
    bucketContainerElement.innerHTML = html;
}