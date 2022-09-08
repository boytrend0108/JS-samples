




'use strict'
const a = 1234567989;
const formater = new Intl.NumberFormat(`ru`); // создаем новый класс и указываем локацию
console.log(formater.format(a));