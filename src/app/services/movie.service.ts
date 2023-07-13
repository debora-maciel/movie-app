import { MovieDetail } from "../movie/models/movie-detail.model";
import { Credit } from "../movie/models/credit.model";
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

async function getMovieDetail(id: number | string): Promise<MovieDetail> {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

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
            let result: MovieDetail = response.data;

            getCredits(id)
                .then((res) => {
                    result.crew = res.crew;
                    result.cast = res.cast;
                    resolve(result);
                });

        }).catch((error) => {
            reject(error)
        })
    })
}

async function getCredits(id: number | string): Promise<Credit> {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;

    const config = {
        url: url,
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWRiZGFhMmRkNzRjZDI1MzhkZDhkZjY3YmU3NjMxZiIsInN1YiI6IjY0YWY2NDU1YTQxMGM4MDBhZjZhNGU3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zo_6DpYOU8ESxX74R6xYxFtTt8smR27nZz6jdpcJ1cQ'
        }
    }

    return new Promise((resolve, reject) => {
        axios(config)
            .then((response) => {
                let result: Credit = response.data;
                resolve(result);
            }).catch((error) => {
                reject(error)
            })
    })
}

const movieService = {
    getMovies,
    getCredits,
    getMovieDetail,
}

export default movieService;