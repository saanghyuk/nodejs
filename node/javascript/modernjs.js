// @ts-check


const people = [
  {
    age : 20, 
    city: "서울", 
    pet : ['cat', 'dog']
  }, 
  {
    age: 40, 
    city: '부산'
  }, 
  {
    age:30, 
    city: '대구', 
    pet : ['cat', 'dog']
  }, 
  {
    age: 36, 
    city : "서울"
  }, 
  {
    age: 27, 
    city : "부산", 
    pet: "cat"
  }, 
  {
    cat: 24, 
    city: "서울", 
    pet: "dog"
  }
]

// A. 30대 미만이 한명이라도 사는 도시. 


// Solution 1
function solveA(){
  // @type {string[]}
  const cities = []

  for (const person of people){
    if(person.age < 30){
      if (!cities.find(city => person.city == city)){
        cities.push(person.city)
      }
      
    }
  }

  return cities
}

console.log(solveA())


// Solution 2
function solveFunctional(){
  // const allCities = people.filter(person => person.age <30).map((person) => person.city)
  const allCities = people.filter(({age}) => age <30).map(({city}) => city)
  const set = new Set(allCities)

  return Array.from(set)
}
console.log("solveA", solveA())
console.log("solveFunctional", solveFunctional())





// B. 각 도시별로 개와 고양이를 키우는 사람의 수


function solveB(){
  const result = {}
  for (const person of people){
      const {city, pet: petOrPets} = person 

      if (petOrPets) {
        const petsOfCity = result[city] || {}

        if (typeof petOrPets == "string"){
          const pet = petOrPets

          const origNumPetsOfCity = petsOfCity[pet] || 0
          petsOfCity[pet] = origNumPetsOfCity+1
        } else {
          for (const pet of petOrPets){
            const origNumPetsOfCity = petsOfCity[pet] || 0
            petsOfCity[pet] = origNumPetsOfCity+1
        }
      }
        result[city]  = petsOfCity
      }
  }
  return result

}
console.log('solveB', solveB())


function solveBModern(){
  return people.map(({pet:petOrPets, city}) => {
      const pets = (typeof petOrPets === 'string' ? [petOrPets] : petOrPets) || []
      return {
        city,
        pets,
      }
    }).map(({city, pets})=> pets.map(pet => [city, pet])).flat()
    .reduce((result, [city, pet]) => {
      if (!city || !pet){
        result
      }

      return {
        ...result,
        [city] : {
          ...result[city],
          [pet] : (result[city]?.[pet] || 0) + 1
        }
      }
    }, {})
}

console.log(solveBModern())