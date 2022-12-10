import React, { useEffect, useState } from 'react'
import "../../styles/Profile.css"
import { getUser, editUser } from '../../service/ProfileApi'
import Cookies from 'js-cookie'
import ProfileProjComm from '../../components/profilecomponents/ProfileProjComm'
import ProfileTechSkills from '../../components/profilecomponents/ProfileTechSkills'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Editprofile = () => {

    const [user, setuser] = useState();
    const [newuser, setnewuser] = useState({ name: "", bio: "", gh_link: "", tw_link: "", li_link: "", pf_link: "" });
    const [tech, settech] = useState([]);
    const navigate = useNavigate()


    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            };
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    const handleImage = async (e) => {
        const base64 = await convertToBase64(e.target.files[0]);
        // setImage({ ...image, avatar: base64 })
        setuser({ ...user, [e.target.name]: base64 })
    }

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


            toast(response.data.message, {
                position: 'top-right',
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                closeButton: false,
                onClose: () => {
                    getuser();
                },
            });
        }

    }


    return (
        <>



            {user !== undefined && <div className="container pf_mainparent">
                <div className="pf_subparent">
                    <ToastContainer
                        position="top-right"
                        autoClose={800}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        closeButton={false}
                        limit={1}
                    />


                    {/* NAME AND DESCRIPTION */}
                    <div className="pf_headerdiv">
                        <div className="textdiv">

                            <div className="namediv">
                                <input type="text" className="form-control ep_name_input" aria-describedby="Fullname" name='name' value={user.name} autoFocus onChange={handleuserchange} />

                                <img src={user.avatar} alt="" />

                            </div>

                            <textarea class="form-control ep_bio_input" id="floatingTextarea" value={user.bio || `Hello there i am ${user.name.split(" ")[0]}, i love tech, communities and collaborations. Glad to meet you all 🚀`} name='bio' onChange={handleuserchange}></textarea>


                        </div>

                        <div className="imgdiv">
                            <div className='ep_div'>
                                <img src={user.avatar} alt="" />
                                <input class="form-control ep_image_input" type="file" id="formFile" accept="image/png, image/gif, image/jpeg" name="avatar" onChange={handleImage} />

                                <button className='ep_savechanges_btn' onClick={handleSave}>Save changes</button>
                            </div>
                        </div>
                    </div>


                    <div className="ep_socials_div">
                        <p>Links</p>

                        <div className='ep_socials_inputdiv'>

                            <input type="text" className="form-control ep_link_input" aria-describedby="Fullname" onChange={handleuserchange} placeholder="Github link" name='gh_link' value={user.gh_link} />

                            <input type="text" className="form-control ep_link_input" aria-describedby="Fullname" onChange={handleuserchange} placeholder="Twitter link" name='tw_link' value={user.tw_link} />

                            <input type="text" className="form-control ep_link_input" aria-describedby="Fullname" onChange={handleuserchange} placeholder="Linkedin link" name='li_link' value={user.li_link} />

                            <input type="text" className="form-control ep_link_input" aria-describedby="Fullname" onChange={handleuserchange} placeholder="Portfolio link" name='pf_link' value={user.pf_link} />

                        </div>
                    </div>


                    {/* TECH STACK */}
                    <div className="pf_projdiv">
                        <ProfileTechSkills type="edit" />
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