import axios from "axios";

const instance = axios.create({
    // API (cloud function) URL
    baseURL : 'http://localhost:5001/challenge-3742b/us-central1/api',
});

export default instance;