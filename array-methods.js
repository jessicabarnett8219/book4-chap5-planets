// Use the forEach method to add the name of each planet to a section element in your HTML with an id of "planets". Use string templates to construct the DOM elements.

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

const planetContainer = document.querySelector("#planets")

planets.forEach(planet => {
  planetContainer.innerHTML += `
    <p>${planet}</p>
  `
})


// Use the map method to create a new array where the first letter of each planet is capitalized. Use the toUpperCase() method on strings.

const capitalizedPlanets = planets.map( (planet) => {
    return planet.charAt(0).toUpperCase() + planet.slice(1)
  }
)
console.log(capitalizedPlanets)


// Use the filter method to create a new array that contains planets with the letter 'e'. Use the `includes() method on strings.

const planetsWithE = planets.filter( planet => {
  return planet.includes("e")
})

console.log(planetsWithE)


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

let sentence = words.reduce( (a, b) => {
  return `${a} ${b}`
})

console.log(sentence)
