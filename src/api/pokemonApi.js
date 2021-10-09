import axios from 'axios';

const pokApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export default pokApi;
