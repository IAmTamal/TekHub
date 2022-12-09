import React, { useState } from 'react'
import "../../styles/Profile.css"
import ProjCommCard from '../ProjCommCard';

const ProfileCommunities = ({ communities }) => {




    return (
        <>

            <div className="pf_projcomm_mainparent">
                <div className="pf_projcomm_subparent">

                    <div className="pf_projcomm_headerdiv" style={{ marginTop: "3.5rem" }}>
                        <p>Projects</p>
                    </div>

                    <div className="pf_projcomm_projectsdiv">
                        {communities.map((data) => (
                            <div className="user">
                                <ProjCommCard data={data} type="project" />
                            </div>
                        ))}
                    </div>

                    <div className="pf_projcomm_headerdiv" style={{ marginTop: "3.5rem" }}>
                        <p>Communities</p>
                    </div>

                    <div className="pf_projcomm_projectsdiv">
                        {communities.map((data) => (
                            <div className="user">
                                <ProjCommCard data={data} type="communities" />
                            </div>
                        ))}
                    </div>


                </div>
            </div>

        </>
    )
}

export default ProfileCommunities