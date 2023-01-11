const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let index = 0; index < numberOfFilms; index++) {
    const oneOfMovies = prompt('Один из последних просмотренных фильмов?', '') 
    const filmRate = prompt('На сколько оцените его?', '')
    const genre = prompt('А жанр?')
    if (oneOfMovies != null && filmRate != null && genre != null && oneOfMovies != '' && filmRate != '' && genre !='' && oneOfMovies.length < 50) {
        personalMovieDB.movies[oneOfMovies] = filmRate
        personalMovieDB.genres.push(genre)
        console.log('done');
    } else {
        console.log('error');
        index--;
    }
}
if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов")
} else if (10 <= personalMovieDB.count <= 30) {
    alert("Вы классический зритель")
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман")
} else {
    alert("Произошла ошибка")
}

console.log(personalMovieDB);
