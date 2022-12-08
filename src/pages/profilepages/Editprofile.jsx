import React, { useContext } from 'react'
import TekContext from '../../context/TekContext'

const Editprofile = () => {
    const { drawerOpen, setDrawerOpen, anchor, state, setState } = useContext(TekContext);
    return (
        <div className="container">
            <div className="ep_subparent">
                <div>{anchor}</div>
            </div>
        </div>
    )
}

export default Editprofile