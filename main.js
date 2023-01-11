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
    personalMovieDB.movies[oneOfMovies] = filmRate
    personalMovieDB.genres.push(genre)
}

console.log(personalMovieDB);
