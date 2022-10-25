

const { resolveConfig } = require('prettier')

require('core-js')

const complicatedArray = [1, [2, 3,]]
const flattenedArray = complicatedArray.flat()

console.log(flattenedArray)


const original = 'abcabc123'
const changed = original.replaceAll('abc', '123')

console.log(changed)


function sleep(duration){
  return new Promise((resolve) => {
    console.log('sleep start')
    setTimeout(() => {
      resolve()
      console.log('sleep done', duration)
    }, duration)
})}

function alwaysReject(){
  return new Promise((resolve, reject) => {
    reject()
  })
}
Promise.allSettled(
  [
    sleep(2000), 
    sleep(3500), 
    sleep(4000), 
    alwaysRejected()
  ]
).then(() => {
  console.log('Promise.all done')
})

