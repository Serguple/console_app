"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("how many films have you watched?");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("how many films have you watched?");
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: false
};

function showMyDB(privat) {
    if (privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);



function rememberMyFilms() {
    let i = 0;

    do {
        const userFilmName = prompt("One of the films you previosly watched?"),
            userFilmRating = +prompt("Please, rate it");
        if (userFilmName === null || userFilmName.length > 50 || userFilmName === "") {
            i--;
        } else {
            personalMovieDB.movies[userFilmName] = userFilmRating;
        }
        i++;
    } while (i < 2)
}

rememberMyFilms();

function writeMyGenres() {
    for (let i = 0; i < 3; i++) {
        const userGenre = prompt(`Ваш олюбленний жанр під номером ${i+1}`);
        personalMovieDB.genres[i] = userGenre;
    }
}

writeMyGenres();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
        alert('Преглянуто достатньо мало фільмів');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Ви класичний глядач");
    } else if (personalMovieDB.count >= 30) {
        alert("Ви кіноман");
    } else {
        alert("Відбулася помилка");
    }    
}

detectPersonalLevel();


