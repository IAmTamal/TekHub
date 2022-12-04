import React from "react";
import { BsDiscord, BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";
import "../styles/CommunityCard.css";

const CommunityCard = ({ comms }) => {
    return (
        <>
            <div className="commcard_main_parent">
                <div className="commcard_card">


                    <div className="commcard_card_imgdiv">
                        <img src={comms.img} alt="" />
                    </div>


                    <div className="commcard_card_textdiv">
                        <h3>{comms.name}</h3>
                        <p>{comms.desc}</p>

                        <div className="commcard_card_textdiv_socials">
                            <BsDiscord className="card_socials card_socials_discord" />
                            <BsGithub className="card_socials card_socials_github" />
                            <BsTwitter className="card_socials card_socials_twitter" />
                            <BsYoutube className="card_socials card_socials_youtube" />


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommunityCard;
