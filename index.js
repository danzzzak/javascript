"use strict"
let countSwitch;
const numberOfFilms = +prompt('Skolko filmov posmotreli', '');
let personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

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
if (personalMovieDB.count < 10) {
    console.log('malo filmov');
} else if (personalMovieDB.count <= 30) {
    console.log('klassike');
} else if (30 < personalMovieDB.count) {
    console.log('kinoman');
} else {
    console.log('oshibka');
}

console.log(personalMovieDB);