`use strict`
class Flat {
    constructor(squаre, repaire, typeOfHouse, rooms, adds) {
        this.squаre = squаre;
        this.repaire = repaire;
        this.typeOfHouse = typeOfHouse;
        this.rooms = rooms;
        this.adds = adds;
        this.basePrice = 10000;
    }
    _getPrice() {
        let totalPrice = 0;
        let totalPriceBase = (this.basePrice * +squаre.value);
        for (const el of repaire) {
            if (el.checked === true) {
                totalPrice = totalPriceBase * +el.value
            };
        }
        for (const el of typeOfHouse) {
            if (el.checked === true) {
                totalPrice = totalPrice * +el.value
            };
        }
        for (const el of rooms) {
            if (el.checked === true) {
                totalPrice = totalPrice * +el.value
            };
        }
        for (const el of adds) {
            if (el.checked === true) {
                totalPrice = totalPrice + ((totalPriceBase * +el.value));
            };
        }

        document.getElementById(`total-price`).textContent = totalPrice.toFixed(0);
    };
}
// Получаем инпут площади квартиры
let squаre = document.getElementById(`square-input`);
let squareRange = document.getElementById(`square-range`)
// Получем кнопки   тип ремонта
let repaire = document.querySelectorAll(`input[name="type"]`);
// Получаем кнопки за тип дома
let typeOfHouse = document.querySelectorAll(`input[name="building"]`);
// Получаем кнопки за кол-во комнат
let rooms = document.querySelectorAll(`input[name="rooms"]`);
// Получаем кнопки доп.опций
let adds = document.querySelectorAll(`div.calc-section .adds`);

//  Cоединяем бегунок и цифры
squаre.addEventListener(`input`, (event) => {
    squareRange.value = squаre.value;
});
squareRange.addEventListener(`input`, (event) => {
    squаre.value = squareRange.value;
})

// Засчет при первой загрузке
window.onload = () => {
    let flet = new Flat(squаre, repaire, typeOfHouse, rooms, adds);
    flet._getPrice();
}

// Отлавливаем любое событие на странице
let inputs = document.querySelectorAll(`input`);
for (const elem of inputs) {
    elem.addEventListener(`input`, (event) => {
        let flet = new Flat(squаre, repaire, typeOfHouse, rooms, adds);
        flet._getPrice();
    })
}





