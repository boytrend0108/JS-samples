// function sayHelloTo(name) {
//   const msg = 'Hello ' + name

//   return function() {
//     console.log(msg)
//   }
// }

// const helloElena = sayHelloTo('Elena')
// helloElena()
//-------------------------------------------------

// function createFrameworkManager() {
//   const fw = ['Angular', 'React']

//   return {
//     print: function() {
//       console.log(fw.join(' '))
//     },
//     add: function(framework) {
//       fw.push(framework)
//     }
//   }
// }

// const manager = createFrameworkManager()
// // console.log(manager)

// manager.add('Vue')
// manager.print()
//--------------------------------------------------

const fib = [1, 2, 3, 5, 8]

for (var i = 0; i < fib.length ; i++) {
  // (function(n) {
    setTimeout(() => {
      console.log(`fib${i} = ${fib[i]}`)
    }, 3000)
  // })(i)
  
}

