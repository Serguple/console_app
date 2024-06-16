"use strict";

const numberOfFilms = +prompt("how many films have you watched?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: false
};

const userFilmName1 = prompt("One of the films you previosly watched?"),
      userFilmRating1 = +prompt("Please, rate it"),
      userFilmName2 = prompt("One of the films you previosly watched?"),
      userFilmRating2 = +prompt("Please, rate it");

personalMovieDB.movies[userFilmName1] = userFilmRating1;
personalMovieDB.movies[userFilmName2] = userFilmRating2;

console.log(personalMovieDB);