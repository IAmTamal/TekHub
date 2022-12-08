import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom'



const apiURL = [
    "http://localhost:5000",
];
const API = apiURL[0];



export const UserSignup = async (creds) => {
    try {

        const response = await Axios.post(`${API}/auth/signup`, creds);
        return response;

    } catch (error) {
        console.log(error)
        if (error.response.status === 409) {
            toast.error(error.response.data.message, {
                position: toast.POSITION.TOP_RIGHT,

            });
        }
    }
};



export const UserLogin = async (creds) => {

    try {

        const response = await Axios.post(`${API}/auth/login`, creds);
        return response;

    } catch (error) {
        toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
}
