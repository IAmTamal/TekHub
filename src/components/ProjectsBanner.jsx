import React from 'react'
import "../styles/ProjectsBanner.css";
const ProjectsBanner = () => {
    return (
        <>

            <div className="container pr_main_parent">
                <div className="pr_subparent">
                    <p className='pr_p1'>Explore all the amazing projects !</p>
                    <div className="pr_p2div">
                        <p className='pr_p2'>Staring from WEB2, Android, all the way to WEB3 we have a bunch of amazing Opensource projects for the community, by the community !</p>
                    </div>
                    <div className="btn btn-warning pr_explorebtn">Explore more projects </div>
                </div>
            </div>

        </>
    )
}

export default ProjectsBanner