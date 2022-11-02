// Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

// Name
// Production year
// Names of the cast members (there can be as much as the user want)
// That function must gather all the data in a single object and return it.

// Create a function randomizeCast(tvSerie) that take the data structure you defined above & return a random (order) list of the cast.

let form = document.getElementById('form');
form.addEventListener('submit',askTvSerie);

let seriename = document.querySelector(".data__title");
let serieyear = document.querySelector(".data__year");
let seriecast = document.querySelector(".data__castmembers");

function askTvSerie(event) {
    let TvSeries = {};
    event.preventDefault();
    const inputData = new FormData(event.target);
    inputData.forEach((value, key) => (TvSeries[key] = value));
    // console.log(TvSeries);
    seriename.innerHTML=TvSeries.seriename;
    serieyear.innerHTML=TvSeries.year;
    // seriecast.innerHTML=TvSeries.castmembers;

    let ordercast = TvSeries.castmembers;
    let castAar = ordercast.split(',');
    let randomCast = randomizeCast(castAar);
    seriecast.innerHTML=randomCast;
}

// tip: object structure
// let TVSeries = {
//     name: '',
//     year: '',
//     castmembers : []
// }

// info: use of built-in browser FormData API (https://stackabuse.com/convert-form-data-to-javascript-object/)


function randomizeCast(tvSerie) {
    let shuffleAar = [...tvSerie];
    let length = shuffleAar.length;
    const getRandomValue = (i,N) => Math.floor(Math.random()*(N-i)+i);
    shuffleAar.forEach((elem, i, array, j = getRandomValue(i, length)) => [array[i], array[j]] = [array[j], array[i]]);
    return shuffleAar;
}