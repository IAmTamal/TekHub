import react from "react";
import TekContext from "./TekContext";

const TekState = (props) => {
    const [drawerOpen, setDrawerOpen] = react.useState(true);
    const anchor = "left";
    const [state, setState] = react.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    return (
        <TekContext.Provider
            value={{
                drawerOpen,
                setDrawerOpen,
                anchor,
                state,
                setState,
            }}
        >
            {props.children}
        </TekContext.Provider>
    );
};

export default TekState;