console.log('it works!')

const btn1 = document.querySelector('button')
const btn2 = document.querySelector('.btn-2')

// btn1.onclick = test

function test(color) {
  this.style.background = color
}

//========== call() function.call(context, [arg1, arg2...])
// test.call(btn1, 1, 3)
  // btn2.onclick = function() {
  //   test.call(btn1, 1, 2)
  // }

// test.apply(btn1, [4, 6])

// test.bind(btn1, ...[2, 4])() // надо вызывать

const setRed = test.bind(btn1, 'red')
const setBlue = test.bind(btn2, 'blue')

btn1.onclick = setRed
btn2.onclick = setBlue