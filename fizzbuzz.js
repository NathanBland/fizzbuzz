function fizzbuzz(max){
  for (var i=1; i<max+1; i++){
    var str = ''
    if (i % 3 === 0){
      str+= 'Fizz'
    }
    if (i % 5 === 0){
      str+= 'Buzz'
    }
    if (str === ''){
      str = i
    }
    console.log(str)
  }
}
fizzbuzz(100)
