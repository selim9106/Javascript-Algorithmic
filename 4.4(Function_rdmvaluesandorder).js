
// Create a function pickLearner(inputAr, n) that takes 2 parameters.

// inputAr : An array of learners (the one you created in exercise 3.0 for example)
// n : A number, that should be greater than 0 and less than the length of inputAr
// The function should return an array of randomly selected learners.


let students = [
    "Anthony",
    "Axel",
    "Benoît",
    "Daniela",
    "Doriano",
    "Dylan",
    "Eddy",
    "Guillaume",
    "Hazem",
    "Julien",
    "Kamilla",
    "Luca",
    "Quentin",
    "Rinaldo",
    "Selim",
    "Sophie",
    "Stéphanie",
    "Titouan",
    "Vicent",
    "Xavier",
  ];

let n;

// * classical array.slice() from 0 to shuffle number btw 0 & array.length (after shuffling the original array)

function pickLearner(arr, n) {
    let shuffledAar = shuffleAar(arr);
    let max = shuffledAar.length;
    n = parseInt(Math.floor(Math.random()*max));
    return shuffledAar.slice(0,n);
}
console.log(pickLearner(students, n));

// * function to shuffle the array content (based on Fisher-Yates Shuffle)

function shuffleAar(arr) {
    let shuffleAar = [...arr];
    let length = shuffleAar.length;
    const getRandomValue = (i,N) => Math.floor(Math.random()*(N-i)+i);
    shuffleAar.forEach((elem, i, array, j = getRandomValue(i, length)) => [array[i], array[j]] = [array[j], array[i]]);
    return shuffleAar;
}

// // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
