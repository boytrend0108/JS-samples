const result = []

for(var i = 0; i < 5 ; i++) {

  (function() {
    let n = i
    result.push(function() {
      console.log(n)
    })
  })()
 
}

result[3]()