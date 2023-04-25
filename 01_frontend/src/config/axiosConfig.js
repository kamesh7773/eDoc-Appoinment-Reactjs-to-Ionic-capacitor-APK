import axios from "axios";

const api = axios.create({
 baseURL: "https://elegant-tan-goldfish.cyclic.app",
});

export default api;