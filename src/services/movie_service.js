import axios from "./axios";
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
const getOneMovie = (userId, movieId) => {
    return axios.post(API_URL + `watch/${movieId}`, { userId: userId, movieId: movieId })
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
const getOneMovieToEdit = (movieId) => {
    return axios.post(API_URL + `edit/${movieId}`, { movieId: movieId })
        .then((res) => {
            console.log(res.data)
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

const getMyMovies = (userId) => {
    return axios.get(API_URL + `list/${userId}`, { userId })
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
    deleteMovie,
    getMyMovies,
    getOneMovieToEdit
};

export default MovieService;