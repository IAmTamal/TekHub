import React, { useEffect, useState } from 'react'
import "../../styles/Profile.css"
import { getUser, editUser } from '../../service/ProfileApi'
import Cookies from 'js-cookie'
import ProfileProjComm from '../../components/profilecomponents/ProfileProjComm'
import ProfileTechSkills from '../../components/profilecomponents/ProfileTechSkills'
import { useNavigate } from 'react-router-dom'



const Editprofile = () => {

    const [user, setuser] = useState();
    const [newuser, setnewuser] = useState({ name: "", bio: "", gh_link: "", tw_link: "", li_link: "", pf_link: "" });
    const [tech, settech] = useState([]);
    const navigate = useNavigate()

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

    const handleuserchange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSave = async (e) => {
        e.preventDefault();
        console.log(user);
        const response = await editUser(user);

        if (response.status === 201) {
            alert("Profile updated successfully");
        }

    }


    return (
        <>

            {user !== undefined && <div className="container pf_mainparent">
                <div className="pf_subparent">


                    {/* NAME AND DESCRIPTION */}
                    <div className="pf_headerdiv">
                        <div className="textdiv">

                            <div className="namediv">
                                <input type="text" className="form-control ep_name_input" aria-describedby="Fullname" name='name' value={user.name} autoFocus onChange={handleuserchange} />

                                <img src="https://i.ibb.co/THzBrFQ/Untitled-design-1.png" alt="" />

                            </div>

                            <textarea class="form-control ep_bio_input" placeholder="Leave a comment here" id="floatingTextarea" value={user.bio} name='bio' onChange={handleuserchange}></textarea>


                        </div>

                        <div className="imgdiv">
                            <div>
                                <img src="https://i.ibb.co/THzBrFQ/Untitled-design-1.png" alt="" />
                                <button className='pf_editbtn' onClick={handleSave}>Save changes</button>
                            </div>
                        </div>
                    </div>


                    <div className="ep_socials_div">
                        <p>Links</p>

                        <div className='ep_socials_inputdiv'>

                            <input type="text" className="form-control ep_link_input" aria-describedby="Fullname" onChange={handleuserchange} placeholder="Github link" />

                            <input type="text" className="form-control ep_link_input" aria-describedby="Fullname" onChange={handleuserchange} placeholder="Twitter link" />

                            <input type="text" className="form-control ep_link_input" aria-describedby="Fullname" onChange={handleuserchange} placeholder="Linkedin link" />

                            <input type="text" className="form-control ep_link_input" aria-describedby="Fullname" onChange={handleuserchange} placeholder="Portfolio link" />

                        </div>
                    </div>


                    {/* TECH STACK */}
                    <div className="pf_projdiv">
                        <ProfileTechSkills tech={user.tech} />
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

export default Editprofile