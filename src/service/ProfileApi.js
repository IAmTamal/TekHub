import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const API = import.meta.env.VITE_SERVER_API;

export const getUser = async () => {
    try {

        console.log(Cookies.get("token"));

        const response = await Axios.get(`${API}/profile/`, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
        });

        console.log("Here is the response")
        console.log(response);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const editUser = async (creds) => {
    try {
        const response = await authAxios.put(`${API}/profile/edit`, creds);
        return response;

    } catch (error) {
        console.log(error)
    }
}