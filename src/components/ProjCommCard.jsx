import React from "react";
import { BsDiscord, BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";
import "../styles/ProjCommCard.css";

const ProjCommCard = ({ data, type }) => {
    return (
        <>
            <div className="commcard_main_parent">
                <div className="commcard_card">


                    <div className="commcard_card_imgdiv">
                        <img src={data.img} alt="" />
                    </div>


                    <div className="commcard_card_textdiv">
                        <h3>{data.name}</h3>
                        <p>{data.desc}</p>

                        <div className="commcard_card_textdiv_socials">

                            {type === "project" ? <>
                                <BsGithub className="card_socials card_socials_github" />
                                <BsYoutube className="card_socials card_socials_youtube" />
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
