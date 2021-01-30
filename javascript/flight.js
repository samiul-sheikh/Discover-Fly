function priceUpdate(classType, isIncrease) {
    const numberInput = document.getElementById(classType + '-number');
    const numberCount = parseInt(numberInput.value);
    let countNewNumber = numberCount;
    if (isIncrease == true) {
        countNewNumber = numberCount + 1;
    }
    if (isIncrease == false && countNewNumber > 0) {
        countNewNumber = numberCount - 1;
    }
    numberInput.value = countNewNumber;

    let priceTotal = 0;
    if (classType == 'first') {
        priceTotal = countNewNumber * 150;
    }
    if (classType == 'economy') {
        priceTotal = countNewNumber * 100;
    }
    document.getElementById(classType + 'Price').innerText = priceTotal;
    calculatePrice()
}
function calculatePrice() {

    const countFirst = getInputValue('first');
    const countEconomy = getInputValue('economy');
    const subTotal = countFirst * 150 + countEconomy * 100;
    document.getElementById('cost').innerText = subTotal;
    const addTax = Math.round(subTotal * 0.1);
    document.getElementById('vat').innerText = addTax;

    const total = subTotal + addTax;
    document.getElementById('total').innerText = total;
}
function getInputValue(classType) {
    const ClassCount = document.getElementById(classType + '-number');
    const countClass = parseInt(ClassCount.value);
    return countClass;
}