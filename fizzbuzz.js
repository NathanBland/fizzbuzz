const fizzbuzz = (max) => {
  for (let i = 1; i < max + 1; i++) {
    let str = ''
    i % 3 === 0 ? str += 'Fizz' : ''
    i % 5 === 0 ? str += 'Buzz' : ''
    str === '' ? str = i : ''
    console.log(str)
  }
}
fizzbuzz(parseInt(process.argv[2]) || 100)
