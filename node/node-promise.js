const fs = require('fs');
const { resolve } = require('path');

function readFilePromise(filename){
  return new Promise ((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (error, value) => {
      if (error) {
        reject(error)
      }
      resolve(value)
    })
  })
}


readFilePromise('package.json').then((value) => console.log(value))
fs.promises.readFile('package.json').then((value) => console.log(value))


async function sleep(duration){
  return new Promise(resolve => {
    setTimeout(() =>{
      resolve()
    }, 1000)
  }) 
}


async function main(){
  await sleep(1000)
  await sleep(1000)
  await sleep(1000)
  await sleep(1000)
  await sleep(1000)
}