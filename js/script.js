"use strict";

const numberOfFilms = +prompt("how many films have you watched?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: false
};

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

if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
    alert('Преглянуто достатньо мало фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Ви класичний глядач");
} else if (personalMovieDB.count >= 30) {
    alert("Ви кіноман");
} else {
    alert("Відбулася помилка");
}

console.log(personalMovieDB);