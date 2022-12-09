import React from 'react'
import "../../styles/Profile.css"

const ProfileTechSkills = ({ tech }) => {

    return (
        <>

            <div className="pf_techskills_mainparent">
                <div className="pf_techskills_subparent">

                    <div className="pf_techskills_headerdiv">
                        <p>Tech, Skills</p>
                    </div>

                    <div className="pf_techskills_techdiv">
                        {tech.map((data) => (
                            <div className="pf_techskills_techs">
                                <p>{data}</p>
                            </div>
                        ))}
                    </div>




                </div>
            </div>

        </>
    )
}

export default ProfileTechSkills