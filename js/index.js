function updatePriceList(category, cost) {
    const categoryCost = document.getElementById(category + '-cost');
    const categoryCostText = parseInt(categoryCost.innerText);
    categoryCost.innerText = cost;
    getTotal();
    priceInDisplay();
}
function getTotal() {
    const getTotal = document.getElementById('total-price');
    const getTotalAmmount = parseInt(getTotal.innerText);
    const bestPrice = document.getElementById('best-price');
    const bestPriceAmount = parseInt(bestPrice.innerText);
    const storage = document.getElementById('storage-cost');
    const storageAmount = parseInt(storage.innerText);
    const memory = document.getElementById('memory-cost');
    const memoryAmount = parseInt(memory.innerText);
    const delivery = document.getElementById('delivery-cost');
    const deliveryAmount = parseInt(delivery.innerText);
    getTotal.innerText = bestPriceAmount + memoryAmount + storageAmount + deliveryAmount;

}


function priceInDisplay() {
    const totalPriceInDisplay = document.getElementById('total-cost');
    const displayTotal = parseInt(totalPriceInDisplay.innerText);
    const totalAmount = document.getElementById('total-price')
    const totalAmountValue = parseInt(totalAmount.innerText);
    totalPriceInDisplay.innerText = totalAmountValue;
}
// for extra memory charge 

document.getElementById('memory-1-button').addEventListener('click', function () {

    updatePriceList('memory', 0);
})
document.getElementById('memory-2-button').addEventListener('click', function () {
    updatePriceList('memory', 180);
})
// for extra storage charge

document.getElementById('storage-1-button').addEventListener('click', function () {
    updatePriceList('storage', 0);
})
document.getElementById('storage-2-button').addEventListener('click', function () {
    updatePriceList('storage', 100);
})
document.getElementById('storage-3-button').addEventListener('click', function () {
    updatePriceList('storage', 180);
})
// for extra delivery charge

document.getElementById('delivery-1-button').addEventListener('click', function () {
    updatePriceList('delivery', 0);
})
document.getElementById('delivery-2-button').addEventListener('click', function () {
    updatePriceList('delivery', 20);
})

// for promo code 

document.getElementById('apply-button').addEventListener('click', function () {
    promocodeApply();
})


// function for promocode 
const usedCoupon = [];
console.log(usedCoupon);
function promocodeApply() {
    const codeInput = document.getElementById('promo-code');
    const promoCode = codeInput.value;
    const totalPriceInDisplay = document.getElementById('total-cost');
    const displayTotal = parseInt(totalPriceInDisplay.innerText);
    console.log(usedCoupon);
    if (usedCoupon.indexOf('stevekaku') !== -1) {
        alert('Do not use Same code')
    }
    else if (promoCode == 'stevekaku') {
        const discountPrice = displayTotal - (displayTotal * 0.2);
        console.log(discountPrice);
        totalPriceInDisplay.innerText = discountPrice;

    }
    else {
        alert('You  Enter wrong Code');
    }
    usedCoupon.push(promoCode);
    codeInput.value = '';
}