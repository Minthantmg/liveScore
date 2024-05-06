import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://www.scorebat.com/video-api/v3/",
})