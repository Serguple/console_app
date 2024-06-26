"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [], 
    privat: false,
    start: function() {
        numberOfFilms = +prompt("how many films have you watched?");

        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("how many films have you watched?");
        }
        personalMovieDB.count = numberOfFilms;
    },
    showMyDB: function(privat) {
        if (!privat) {
            console.log(personalMovieDB);
        }
    },
    rememberMyFilms: function() {
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
    },
    writeMyGenres: function() {
        for (let i = 0; i < 1; i++) {
            const userGenres = prompt("Запишіть ваші улюбленні жанри через кому");
            if (userGenres === "" || userGenres === null) {
                i--;
            } else {
                personalMovieDB.genres = userGenres.split(", ");
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр #${i+1} - це ${item}`);
        })        
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
            alert('Преглянуто достатньо мало фільмів');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Ви класичний глядач");
        } else if (personalMovieDB.count >= 30) {
            alert("Ви кіноман");
        } else {
            alert("Відбулася помилка");
        }        
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};


personalMovieDB.start();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.rememberMyFilms();

personalMovieDB.writeMyGenres();

personalMovieDB.detectPersonalLevel();




