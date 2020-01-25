import axios from 'axios';

export default axios.create({
    baseURL: "https://audd.tech/",
    headers:{
        'Access-Control-Allow-Origin':'*'
    }
});