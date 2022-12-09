import React, { useEffect, useState } from 'react'
import "../../styles/Profile.css"
import { getUser } from '../../service/ProfileApi'
import Cookies from 'js-cookie'
import ProfileProjComm from '../../components/profilecomponents/ProfileProjComm'
import ProfileTechSkills from '../../components/profilecomponents/ProfileTechSkills'


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


    const [communities, setCommunities] = useState([
        {
            name: "EddieHub",
            img: "https://i.ibb.co/3zFTCwZ/1.png",
            desc: "Inclusive Opensource community",
            github: "https://github.com/EddieHubCommunity",
            youtube: "https://www.youtube.com/@eddiejaoude",
        },
        {
            name: "4C",
            img: "https://i.ibb.co/NWh4S9Z/2.png",
            desc: "A cool community of Content creators",
            discord: "https://discord.com/invite/TcmA2kbJeA",
            github: "https://github.com/FrancescoXX/4c-site",
            twitter: "https://twitter.com/4ccommunityhq",
            youtube: "https://www.youtube.com/@francescociulla",
        },
        {
            name: "We make Devs",
            img: "https://i.ibb.co/vPdcpX1/3.png",
            desc: "A place where we all become better devs",
            discord: "https://discord.gg/wemakedevs",
            github: "https://github.com/WeMakeDevs",
            twitter: "https://twitter.com/WeMakeDevs",
            youtube: "https://www.youtube.com/@KunalKushwaha",
        },

    ]);

    const tech = ["Web development", "MERN Stack", "UI/UX", "ExpressJS", "NextJS", "ReactJS", "GraphQL"]



    return (
        <>

            {user !== undefined && <div className="container pf_mainparent">
                <div className="pf_subparent">


                    {/* NAME AND DESCRIPTION */}
                    <div className="pf_headerdiv">
                        <div className="textdiv">
                            <h1>{user.name}</h1>
                            <p>Hello i'm Tamal, a Fullstack Web Developer passionate about developing production-ready web applications while building and working with teams of Software Developers ! </p>
                        </div>

                        <div className="imgdiv">
                            <img src="https://i.ibb.co/THzBrFQ/Untitled-design-1.png" alt="" />
                        </div>
                    </div>


                    {/* TECH STACK */}
                    <div className="pf_projdiv">
                        <ProfileTechSkills tech={tech} />
                    </div>


                    {/* PROJECTS AND COMMUNITIES */}
                    <div className="pf_projdiv">
                        <ProfileProjComm communities={communities} />
                    </div>

                </div>
            </div>}

        </>
    )
}

export default Profile