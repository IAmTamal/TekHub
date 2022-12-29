import React, { useContext } from "react";
import { BsDiscord, BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";
import "../styles/ProjCommCard.css";
import { ReactComponent as Del } from "../assets/workable/delete.svg"
import { deleteProjComm } from "../service/ProfileApi";
import TekContext from "../context/TekContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProjCommCard = ({ data, type }) => {


    const { getProjects, getCommunities } = useContext(TekContext);

    const handleDelete = async (id) => {
        const response = await deleteProjComm(id)

        console.log(response)

        if (response.status === 201) {
            toast(response.data.message, {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                closeButton: false,
            });
            getProjects()
            getCommunities()
        }
    }

    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={1000}
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


            <div className="commcard_main_parent">
                <div className={type === "project" ? "commcard_card" : "commcard_card2"}>


                    <div className="commcard_card_imgdiv">
                        <img src={data.pic} alt="" />
                    </div>


                    <div className={type === "project" ? "commcard_card_textdiv" : "commcard_card_textdiv2"}>
                        <h3>{data.name}</h3>

                        {type === "project" && <div className="commcard_usernamediv">
                            <img src="https://i.ibb.co/5BSd278/Userimg.png" className="commcard_userimg" alt="" />
                            <p className="commcard_username">{data.user_name}</p>
                        </div>}


                        <p className="commcard_desc">{data.desc}</p>
                        {/* 190 max */}

                        <div className="commcard_card_textdiv_socials">

                            {type === "project" ? <div>
                                {data.gh_link && <BsGithub className="card_socials card_socials_github" onClick={() => {
                                    window.open(data.gh_link);
                                }} />}

                                {data.yt_link && <BsYoutube className="card_socials card_socials_youtube" />}

                                {
                                    window.location.pathname.includes("editprofile") && (<>
                                        <Del className="pf_techskills_del" style={{ height: "20px" }}
                                            onClick={() => { handleDelete(data._id) }} />
                                    </>)
                                }

                            </div>
                                :
                                <div style={{ display: "flex", justifyContent: "space-between", }}>

                                    <div>
                                        <BsYoutube className="card_socials card_socials_youtube" />
                                        <BsGithub className="card_socials card_socials_github" />
                                        <BsDiscord className="card_socials card_socials_discord" />
                                        <BsTwitter className="card_socials card_socials_twitter" />
                                    </div>

                                    {
                                        window.location.pathname.includes("editprofile") && (<>
                                            <Del className="pf_techskills_del" style={{ height: "20px", }} onClick={() => { handleDelete(data._id) }} />
                                        </>)
                                    }


                                </div>

                            }





                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjCommCard;
