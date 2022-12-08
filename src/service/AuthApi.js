import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const apiURL = [
    "http://localhost:5000",
];
const API = apiURL[0];


export const UserSignup = async (creds) => {
    try {

        const response = await Axios.post(`${API}/auth/signup`, creds);

        if (response.status === 201) {
            toast.success(response.data.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        return response.data;

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

        if (response.status === 201) {
            console.log(response.data.token)
            toast.success(response.data.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }

        return response.data;

    } catch (error) {
        toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
}
