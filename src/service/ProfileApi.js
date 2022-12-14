import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const API = import.meta.env.VITE_SERVER_API;

export const getUser = async () => {
    try {
        const response = await Axios.get(`${API}/profile/`, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
        });


        return response;
    } catch (error) {
        console.log(error)
    }
}

export const editUser = async (creds) => {
    try {
        const response = await Axios.put(`${API}/profile/edit`, creds, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
        });
        return response;

    } catch (error) {
        console.log(error)
    }
}


export const addtech = async (creds) => {
    try {
        console.log(creds)
        const response = await Axios.put(`${API}/profile/addtech`, creds, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
        });
        return response;

    } catch (error) {
        console.log(error)
    }
}

export const addProject = async (creds) => {
    try {
        const response = await Axios.post(`${API}/profile/addproject`, creds, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
        });
        return response;

    } catch (error) {
        console.log(error)
    }
}

export const getUsersproject = async () => {
    try {
        const response = await Axios.get(`${API}/profile/getusersproject`, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
        });
        return response;
    } catch (error) {
        console.log(error)
    }
}
