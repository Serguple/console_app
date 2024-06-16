"use strict";

const numberOfFilms = +prompt("how many films have you watched?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: false
};

const userFilmName = prompt("One of the films you previosly watched?"),
    userFilmRating = +prompt("Please, rate it");

personalMovieDB.movies[userFilmName] = userFilmRating;

console.log(personalMovieDB);