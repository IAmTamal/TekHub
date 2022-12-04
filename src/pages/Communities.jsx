import React from "react";
import { useState } from "react";
import { ReactComponent as LeftWing } from "../assets/leftwing.svg";
import { ReactComponent as RightWing } from "../assets/rightwing.svg";
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
            <LeftWing />
            <p className="comm_header_p1">
              Communities give you wings
              <span className="comm_header_p2">
                Join some of the best communities from around the world
                belonging to various domains !
              </span>{" "}
            </p>

            <RightWing />
          </div>

          <div className="comm_addbtndiv">
            <p>Communities to join !</p>
            <button className="btn btn-warning">Add your community</button>
          </div>
          <hr />

          <div className="comm_carddiv">{/* map a component 3 times */}</div>
        </div>
      </div>
    </>
  );
};

export default Communities;
