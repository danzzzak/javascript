"use strict"

let countSwitch;
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Skolko filmov posmotreli', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Skolko filmov posmotreli', '');
        }
        return personalMovieDB.count;
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('malo filmov');
        } else if (personalMovieDB.count <= 30) {
            console.log('klassike');
        } else if (30 < personalMovieDB.count) {
            console.log('kinoman');
        } else {
            console.log('oshibka');
        }
    },
    showMyDb: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB); // personalMovieDB.privat == false
        }
    },
    toogleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genre != null && genre != '') {
                personalMovieDB.genres[i - 1] = genre;
            } else {
                i--;
                console.log('necorectno');
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Lub ganr ${i + 1} - eto ${item}`);
        });
    },
};