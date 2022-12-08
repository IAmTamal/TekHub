import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API = import.meta.env.VITE_SERVER_API;

export const getUser = async (id) => {
    try {
        const response = await Axios.get(`${API}/profile/user/${id}`);
        return response;
    } catch (error) {
        console.log(error)
    }
}