import React from "react";
import { useState } from "react";
import ProjCommCard from "../components/ProjCommCard";
import "../styles/Communities.css";

const Communities = () => {
    const [communities, setCommunities] = useState([
        {
            name: "EddieHub",
            img: "https://i.ibb.co/3zFTCwZ/1.png",
            desc: "Inclusive Opensource community",
            discord: "https://discord.gg/gFQCRvkpqS",
            github: "https://github.com/EddieHubCommunity",
            twitter: "https://twitter.com/eddiejaoude",
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
    return (
        <>
            <div className="comm_main_parent container">
                <div className="comm_subparent">
                    <div className="comm_header">

                        <p className="comm_header_p1">
                            Communities give you wings !
                            {" "}
                        </p>

                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <p className="comm_header_p2">
                                Join some of the best communities from around the world
                                belonging to various domains.
                            </p>
                        </div>


                    </div>

                    <div className="comm_addbtndiv">
                        <p>Communities to join !</p>
                        <button className="btn btn-warning">Add your community</button>
                    </div>
                    <hr className="comm_hr" />

                    <div className="comm_carddiv">
                        {communities.map((data) => (
                            <div className="user">
                                <ProjCommCard data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Communities;
