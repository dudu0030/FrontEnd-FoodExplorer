import axios from 'axios';

export const api = axios.create({
    baseURL: "https://foodexplorer-api-mx3g.onrender.com/"
});
