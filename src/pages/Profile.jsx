import React, { useEffect } from 'react'
import "../styles/Profile.css"
import { getUser } from '../service/ProfileApi'
import Cookies from 'js-cookie'


const Profile = () => {

    // const getuser = async () => {

    //     const token = Cookies.get('token');



    //     const response = await getUser();
    //     console.log(response);
    // }


    // useEffect(() => {

    // }, []);
    return (
        <>

            <div className="container pf_mainparent">
                <div className="pf_subparent">
                    <h1>Welcome to your profile</h1>
                    <hr className='pf_hr1' />
                </div>
            </div>

        </>
    )
}

export default Profile