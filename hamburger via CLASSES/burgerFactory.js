
// 
class Param {
    constructor(element) { // element это НТМЛ выбранного импута 
        this.name = element.value;
        this.price = +element.dataset['price'];
        this.calories = +element.dataset['calories'];
    }
}
// Класс бургер состоит из размера, добавки, и топинга. Каждый из этих параметров
// будет тоже собираться с помощью класса Param
class Burger {
    constructor(size, add, topping) {
        this.size = new Param(this._select(size));
        console.log(this.size); // это будет класс Param {name: 'Big', price: 100, calories: 40}
        this.add = new Param(this._select(add));
        console.log(this.add);
        this.toppings = this._getToppings(topping);
        console.log(this.toppings);
    }

    _select(name) {
        console.log(document.querySelector(`input[name="${name}"]:checked`))
        return document.querySelector(`input[name="${name}"]:checked`);
        // получаем element HTML, который мы выбрали c нужными нам атрибутами name,price,callories

    }

    _getToppings(name) {
        let result = [];
        this._selectAll(name).forEach(el => result.push(new Param(el)));
        return result;
    }

    _selectAll(name) {
        console.log([...document.querySelectorAll(`input[name="${name}"]:checked`)]);
        return [...document.querySelectorAll(`input[name="${name}"]:checked`)];
    }
    // считаем стоимость собранного бургера
    _sumPrice() {
        let result = this.size.price + this.add.price; // складываем стоимость размера и начинки
        this.toppings.forEach(topping => result += topping.price); // добавляем стоимость всех топингов
        return result;
    }

    _sumCalories() {
        let result = this.size.calories + this.add.calories;
        this.toppings.forEach(topping => result += topping.calories);
        return result;
    }

    showSum(price, calories) {
        document.querySelector(price).textContent = this._sumPrice();
        document.querySelector(calories).textContent = this._sumCalories();
    }
}
