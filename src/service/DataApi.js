import Axios from "axios";


const API = import.meta.env.VITE_SERVER_API;


export const getallprojects = async () => {
    try {
        const response = await Axios.get(`${API}/data/getallprojects`);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const getallcommunities = async () => {
    try {

        const response = await Axios.get(`${API}/data/getallcommunities`);
        return response;

    } catch (error) {
        console.log(error)
    }
}