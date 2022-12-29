import react, { useEffect, useState } from "react";
import TekContext from "./TekContext";
import Cookies from "js-cookie";
import { getUsersCommunity, getUsersproject } from "../service/ProfileApi";

const TekState = (props) => {


    const [user, setuser] = react.useState();
    // var profileroute = "";
    const [username, setusername] = react.useState("");
    const [profileroute, setprofileroute] = react.useState("/profile/default");

    const [update, setupdate] = react.useState(false);

    const [projects, setProjects] = useState([]);
    const [communities, setCommunities] = useState([]);

    const getProjects = async () => {
        const projectresponse = await getUsersproject()

        if (projectresponse.status === 201) {
            setProjects(projectresponse.data)
            console.log(projectresponse.data)
        }
    }

    const getCommunities = async () => {
        const communityresponse = await getUsersCommunity()

        if (communityresponse.status === 201) {
            setCommunities(communityresponse.data)

        }
    }



    return (
        <TekContext.Provider
            value={{
                user, setuser, profileroute, setprofileroute,
                projects, setProjects,
                communities, setCommunities, getProjects, getCommunities,
            }}
        >
            {props.children}
        </TekContext.Provider>
    );
};

export default TekState;