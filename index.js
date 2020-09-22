"use strict"

let numberOfFilms;
let countSwitch;
start();
let personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
rememberMyFilms();
writeYourGenres();
detectPersonalLevel();
showMyDb();

function start() {
    numberOfFilms = prompt('Skolko filmov posmotreli', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Skolko filmov posmotreli', '');
    }
    return numberOfFilms;
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastFilm1 = prompt('kakoi posledniy film posmotreli?', '');
        let ocencaLastFilm1 = prompt('kakaya ego ocenka?', '');
        if (lastFilm1 != null && ocencaLastFilm1 != null && lastFilm1 != '' && ocencaLastFilm1 != '' && lastFilm1.length < 50) {
            personalMovieDB.movies[lastFilm1] = ocencaLastFilm1;
        } else {
            i--;
            console.log('promt error');
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('malo filmov');
    } else if (personalMovieDB.count <= 30) {
        console.log('klassike');
    } else if (30 < personalMovieDB.count) {
        console.log('kinoman');
    } else {
        console.log('oshibka');
    }
}

function showMyDb() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i < personalMovieDB.count + 1; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres[i - 1] = genre;

    }
}