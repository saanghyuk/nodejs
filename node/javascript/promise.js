


function returnPromiseForTimeout(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random())
      console.log('After resolve')
    }, 1000)
  })
}
returnPromiseForTimeout()
  .then((value) => {
    console.log(value, '1')
    return returnPromiseForTimeout()
}).then((value) => {
    console.log(value, '2')
    return returnPromiseForTimeout()
}).then((value) => {
    console.log(value, '3')
    return returnPromiseForTimeout()
}).then((value) => {
  console.log(value, '4')
  return returnPromiseForTimeout()
})

returnPromiseForTimeout()