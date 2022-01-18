const dropDownElement = document.getElementById('dropdown');
const dropDowmElementModel = document.getElementsByName('dropdownmodel');
const dropdownInput = document.getElementById('dropdownInput');
const dropDownModel = document.getElementById('dropdownmodel');
const dropdowmInputModel = document.getElementsByName('dropdownInputModel');

renderBrandsDrop()

if (dropdownInput) {
    dropdownInput.addEventListener('focus', openDropdown)
    dropdownInput.addEventListener('blur', closeDropdown)
}

if (dropDownElement) {
    dropDownElement.addEventListener('mousedown', selectItem)
}

if (dropdowmInputModel) {
    dropdowmInputModel.addEventListener('focus', openDropdownModel)
    dropdowmInputModel.addEventListener('blur', closeDropdownModel)
}

if (dropDowmElementModel) {
    dropDowmElementModel.addEventListener('mosedown', selectItemModel)
}

function renderBrandsDrop() {
    let html = '';
    for (let i = 0; i < allBrands.length; i++) {
        let brand = allBrands[i];
        html += `<div><a>${brand}</a></div>`
    }
    dropDownElement.innerHTML = html;
}

function openDropdown() {
    console.log('focus');
    dropDownElement.classList.add('opened')
}

function closeDropdown() {
    console.log('blur');
    dropDownElement.classList.remove('opened')
}

function openDropdownModel() {
    console.log('focus');
    dropDowmElementModel.classList.add('opened')
}

function closeDropdownModel() {
    console.log('blur');
    dropDowmElementModel.classList.remove('opened')
}



function selectItem(event) {
    console.log('mousedown');
    const prevSelectedItem = dropDownElement.querySelector('.dropdown-item.selected');
    if (prevSelectedItem) {
        prevSelectedItem.classList.remove('selected');
    }
    event.target.classList.add('selected');
    dropdownInput.value = event.target.textContent;
    let selectBrand = dropdownInput.value;
    renderModelDrop(selectBrand);
}

function renderModelDrop(selectBrand) {
    let html = '';
    for (let i = 0; i < allBrands.length; i++) {
        if (selectBrand === allBrands[i]) {
            let model = allModel[i];
            html += `<div><a>${model}</a></div>`
        }
    }
    dropDownModel.innerHTML = html;
}