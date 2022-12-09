import react, { useEffect } from "react";
import TekContext from "./TekContext";
import Cookies from "js-cookie";

const TekState = (props) => {
    const [drawerOpen, setDrawerOpen] = react.useState(true);
    const anchor = "left";
    const [state, setState] = react.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });



    const [user, setuser] = react.useState();
    // var profileroute = "";
    const [username, setusername] = react.useState("");
    const [profileroute, setprofileroute] = react.useState("/profile/default");

    // useEffect(() => {
    //     if (Cookies.get('token') !== undefined && Cookies.get('token') !== null && Cookies.get('token') !== "" && Cookies.get('token') !== "undefined" && Cookies.get('token') !== "null" && Cookies.get('token') !== " ") {
    //         const username = user?.name.split(' ');
    //         setprofileroute(`/profile/${username}`);

    //     }
    // }, [Cookies.get('token')]);


    // var profileroute = ""

    return (
        <TekContext.Provider
            value={{
                drawerOpen,
                setDrawerOpen,
                anchor,
                state,
                setState,
                user, setuser, profileroute, setprofileroute
            }}
        >
            {props.children}
        </TekContext.Provider>
    );
};

export default TekState;