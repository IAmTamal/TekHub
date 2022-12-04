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
                            <BsDiscord />
                            <BsGithub />
                            <BsTwitter />
                            <BsYoutube />


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommunityCard;
