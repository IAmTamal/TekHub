import React, { useEffect, useState } from 'react'
import "../../styles/Profile.css"
import { getUser } from '../../service/ProfileApi'
import Cookies from 'js-cookie'
import ProfileProjComm from '../../components/profilecomponents/ProfileProjComm'
import ProfileTechSkills from '../../components/profilecomponents/ProfileTechSkills'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Gh } from "../../assets/gh.svg"
import { ReactComponent as Tw } from "../../assets/tw.svg"
import { ReactComponent as Li } from "../../assets/li.svg"
import { ReactComponent as Pf } from "../../assets/pf.svg"



const Profile = () => {

    const [user, setuser] = useState();
    const navigate = useNavigate()

    const getuser = async () => {
        const response = await getUser();
        console.log(response.data.avatar);
        setuser(response.data);
    }


    useEffect(() => {
        getuser();
    }, []);





    return (
        <>

            {user !== undefined && <div className="container pf_mainparent">
                <div className="pf_subparent">


                    {/* NAME AND DESCRIPTION */}
                    <div className="pf_headerdiv">
                        <div className="textdiv">

                            <div className="namediv">
                                <h1>{user.name}</h1>
                                <img src={user.avatar} alt="" />
                            </div>

                            <div className='biodiv'>
                                <p>{user.bio || `Hello there i am ${user.name.split(" ")[0]}, i love tech, communities and collaborations. Glad to meet you all 🚀`}  </p>

                                <div className="pf_socialdiv">
                                    {user.gh_link && <a href={user.gh_link}>
                                        <Gh className="pf_socialicons" style={{ borderRadius: "50%" }} />
                                    </a>}

                                    {user.tw_link && <a href={user.tw_link}>
                                        <Tw className="pf_socialicons" style={{ borderRadius: "50%" }} />
                                    </a>}

                                    {user.li_link && <a href={user.li_link}>
                                        <Li className="pf_socialicons" style={{ borderRadius: "50%" }} />
                                    </a>}

                                    {user.pf_link && <a href={user.pf_link}>
                                        <Pf className="pf_socialicons" style={{ borderRadius: "50%" }} />
                                    </a>}




                                </div>
                            </div>

                        </div>

                        <div className="imgdiv">
                            <div>
                                <img src={user.avatar} alt="" />
                                <button className='pf_editbtn' onClick={() => { navigate("/editprofile") }}>Edit profile</button>
                            </div>
                        </div>
                    </div>


                    {/* TECH STACK */}
                    <div className="pf_projdiv">
                        <ProfileTechSkills tech={user.tech} />
                    </div>


                    {/* PROJECTS AND COMMUNITIES */}
                    <div className="pf_projdiv">
                        <ProfileProjComm type="profile" />
                    </div>

                </div>
            </div>}

        </>
    )
}

export default Profile