// Given an age, calculate how old someone would be on:

// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years

// info: for example if someone is 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old.


// todo: Create a function spaceAge that takes two arguments, a number of seconds and a planet. The function should return your space age on that planet.

function spaceAge(age, planet){
    let agetoseconds = convertAgeToSeconds(age);
    switch(planet) {
        case "Earth" : age =  agetoseconds/31557600;
        break
        case "Venus" : age = agetoseconds/(31557600*0.61519726);
        break
        case "Mercury" : age = agetoseconds/(31557600*0.2408467);
        break
        case "Mars" : age = agetoseconds/(31557600*1.8808158);
        break
        case "Jupiter" : age = agetoseconds/(31557600*11.862615);
        break
        case "Saturn" : age = agetoseconds/(31557600*29.447498);
        break
        case "Uranus" : age = agetoseconds/(31557600*84.016846);
        break
        case "Neptune" : age = agetoseconds/(31557600*164.79132);
        break
        default: age = "undifined since you didn't enter any planet"
    }
    return "your age on " + planet + " is " + age

}

console.log(spaceAge(31,"Earth"));//Output "your age on Earth is 31"
console.log(spaceAge(31,"Mars"));//Output "your age on Mars is 16.48220947527132"

function convertAgeToSeconds(age) {
    return age * 365.25 * 24 * 60 * 60;
}