import axios from "axios";

async function getMovies() {
    const url = 'https://api.themoviedb.org/3/movie/changes?page=1';

    const config = {
        url: url,
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer 4f298a53e552283bee957836a529baec'
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