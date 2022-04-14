import axios from "axios";
const API_URL = "http://localhost:4000/api/movie/";


const getLastMovies = () => {
    return axios.post(API_URL + 'read')
        .then((res) => {
            //console.log(res.data)
            return res.data;
        })
}

const getMoviesByGenre = (genre) => {
    return axios.post(API_URL + 'read', { movie: genre })
        .then((res) => {
            return res.data;
        })

}
const getOneMovie = (movieId) => {
    return axios.get(API_URL + `watch/${movieId}`)
        .then((res) => {
            console.log(res.data)
            return res.data;
        })
}

const addOneMovie = (movie) => {
    return axios.post(API_URL + 'add', { movie })
        .then((res) => {
            return res.data;
        })
}
const editMovie = (movie) => {
    return axios.post(API_URL + 'update', { movie })
        .then((res) => {
            return res.data;
        })
}
const deleteMovie = (id) => {
    return axios.post(API_URL + 'delete', { id })
        .then((res) => {
            return res.data;
        })
}

let MovieService = {
    getLastMovies,
    getMoviesByGenre,
    getOneMovie,
    addOneMovie,
    editMovie,
    deleteMovie
};

export default MovieService;