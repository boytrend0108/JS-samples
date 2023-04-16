//null, undefined, boolean, number, string, object, symbol

// console.log(typeof 0) //number
// console.log(typeof true) //
// console.log(typeof "JS") //
// console.log(typeof undefined) //
// console.log(typeof {}) //
// console.log(typeof Symbol(";")) //
// console.log(typeof null) //object !!!!
// console.log(typeof function() {}) // function !!!
// console.log(typeof NaN)// number !!!!

// Приведение типов
// const language = "JavaScript"
// console.log('The best language is ' + language)

// console.log(Boolean('')) //false
// console.log(Boolean(' ')) //true
// console.log(Boolean(false))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))
// console.log(Boolean(null)) //false
// console.log(Boolean(0)) //false
// console.log(Boolean('0')) //true +++++!!!
// console.log(Boolean([])) //true +++++!!!
// console.log(Boolean({})) //true +++++!!!
// console.log(Boolean(function() {})) //true +++++!!!

// String and Number
// console.log(1 + '2') //'12'
// console.log('' + 1 + 0) // '10'
// console.log('' - 1 + 0) // -1
// console.log('3' * "8") // 24
// console.log(4 + 10 + 'px') // '14px'
// console.log('px' + 5 + 10) // 'px510'
// console.log('42' - 40) // 2
// console.log('42px' - 2) // NaN
// console.log(null + 2) // 2
// console.log(undefined + 2) // NaN

// == vs ===
// console.log(2 == '2') //true
// console.log(2 === '2') //false
// console.log(undefined == null) //true
// console.log(undefined === null) //false
// console.log('0' == false) // true
// console.log('0' === false) // false

// console.log(false == '') // true
// console.log(false === '') // true

// console.log(false == []) // true +++
// console.log(false == {}) // false +++


// console.log('' == 0 ) // true
// console.log([] == 0 ) // true
// console.log({} == 0 ) // false

// console.log('' == 0 ) // true
// console.log([] == 0 ) // true
// console.log(null == 0 ) // false +++

