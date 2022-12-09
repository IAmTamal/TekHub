import React, { useEffect, useState } from 'react'
import "../../styles/Profile.css"
import { getUser } from '../../service/ProfileApi'
import Cookies from 'js-cookie'


const Profile = () => {

    const [user, setuser] = useState();

    const getuser = async () => {
        const response = await getUser();
        console.log(response.data);
        setuser(response.data);
    }


    useEffect(() => {
        getuser();
    }, []);
    return (
        <>

            {user !== undefined && <div className="container pf_mainparent">
                <div className="pf_subparent">
                    <h1>Welcome, {user.name}</h1>
                    <hr className='pf_hr1' />
                </div>
            </div>}

        </>
    )
}

export default Profile