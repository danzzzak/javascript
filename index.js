"use strict"

const numberOfFilms = +prompt('Skolko filmov posmotreli', '');
let personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let lastFilm1 = prompt('kakoi posledniy film posmotreli?', '');
let ocencaLastFilm1 = prompt('kakaya ego ocenka?', '');
let lastFilm2 = prompt('kakoi posledniy film posmotreli?', '');
let ocencaLastFilm2 = prompt('kakaya ego ocenka?', '');
personalMovieDB.movies[lastFilm1] = ocencaLastFilm1;
personalMovieDB.movies[lastFilm2] = ocencaLastFilm2;
console.log(personalMovieDB);