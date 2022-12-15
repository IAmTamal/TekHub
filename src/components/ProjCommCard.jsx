import React from "react";
import { BsDiscord, BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";
import "../styles/ProjCommCard.css";

const ProjCommCard = ({ data, type }) => {
    return (
        <>
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

                            {type === "project" ? <>
                                {data.gh_link && <BsGithub className="card_socials card_socials_github" onClick={() => {
                                    window.open(data.gh_link);
                                }} />}

                                {data.yt_link && <BsYoutube className="card_socials card_socials_youtube" onClick={() => {
                                    window.open(data.yt_link);
                                }} />}
                            </> : <>

                                <BsYoutube className="card_socials card_socials_youtube" />
                                <BsGithub className="card_socials card_socials_github" />
                                <BsDiscord className="card_socials card_socials_discord" />
                                <BsTwitter className="card_socials card_socials_twitter" />
                            </>}




                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjCommCard;
