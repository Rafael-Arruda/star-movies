import axios from 'axios';

//Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=dc8d1f407a1bd3c7756a115230fc20e7

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;