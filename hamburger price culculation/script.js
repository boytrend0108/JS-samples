`use strict`
// Находим все действующие елементы елементы
//Чаевые оф-ту
const inputTips = document.querySelector(`.inputNumber`);
const inputTipsRange = document.querySelector(`.inputRange`);
// Находим Радио кнопки размер
const inputsSize = document.querySelectorAll(`input[name="size"]`);
// Находим Радио кнопки размер
const inputsTopping = document.querySelectorAll(`input[name="topping"]`);
// Находим Чекбокс кнопки размер
const inputsAdditives = document.querySelectorAll(`input[name="additives"]`);
// Находим все input
const inputs = document.querySelectorAll(`input`);
// Находим Итого
const totalPriceEl = document.querySelector(`#totalPrice`);
const totalCallEl = document.querySelector(`#totalCall`);

// Устанавливаем начальную цену
const basePrise = 100;
// создаем функцию которая считает общую стоимость
function culcPrice() {
    // Расчитываем базую цену + чаевые
    let totalPrice = +(basePrise + (basePrise * inputTips.value) / 100);
    // добавляем к стоимости наполнитель
    for (const el of inputsTopping) {
        if (el.checked === true) {
            totalPrice = totalPrice + parseInt(el.dataset.price)
        }
    }
    // добавляем к стоимости добавку
    for (const el of inputsAdditives) {
        if (el.checked === true) {
            totalPrice = totalPrice + parseInt(el.dataset.price)
        }
    }
    // добавляем к стоимости размер бургера
    for (const el of inputsSize) {
        if (el.checked === true) {
            totalPrice = totalPrice * el.value
        }
    }
    return totalPrice;
}

// создаем функцию которая считает общую каллорийность
function culcCall() {
    // Каллорийность по умолчанию
    let totalCall = 300;

    // добавляем к стоимости наполнитель
    for (const el of inputsTopping) {
        if (el.checked === true) {
            totalCall = totalCall + parseInt(el.dataset.call)
        }
    }
    // добавляем к стоимости добавку
    for (const el of inputsAdditives) {
        if (el.checked === true) {
            totalCall = totalCall + parseInt(el.dataset.call)
        }
    }
    // добавляем к расчету размер бургера
    for (const el of inputsSize) {
        if (el.checked === true) {
            totalCall = totalCall * el.value
        }
    }
    return totalCall;
}


// соединяем бегунок и number
inputTips.addEventListener(`input`, (event) => {
    inputTipsRange.value = inputTips.value;
});
inputTipsRange.addEventListener(`input`, (event) => {
    inputTips.value = inputTipsRange.value
});

// Производим первый расчет при загрузке страницы
document.addEventListener(`DOMContentLoaded`, (event) => {
    totalPriceEl.textContent = culcPrice(); // меняем стоимость
    totalCallEl.textContent = culcCall();// меняем калл
});

// Отлавливаем события Input(чтобы пересчитывалось при любом изменинии)
for (const el of inputs) {
    el.addEventListener(`input`, (event) => {
        totalPriceEl.textContent = culcPrice(); // меняем стоимость
        totalCallEl.textContent = culcCall();// меняем калл
    })
}

