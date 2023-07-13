import axios from "axios";

async function getMovies() {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

    const config = {
        url: url,
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWRiZGFhMmRkNzRjZDI1MzhkZDhkZjY3YmU3NjMxZiIsInN1YiI6IjY0YWY2NDU1YTQxMGM4MDBhZjZhNGU3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zo_6DpYOU8ESxX74R6xYxFtTt8smR27nZz6jdpcJ1cQ'
        }
    }

    return new Promise((resolve, reject) => {
        axios(config).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error)
        })
    })
}

const movieService = {
    getMovies
}

export default movieService;