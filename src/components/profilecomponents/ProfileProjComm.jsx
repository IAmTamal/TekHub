import React, { useEffect, useState } from 'react'
import { getUsersCommunity, getUsersproject } from '../../service/ProfileApi';
import "../../styles/Profile.css"
import ProjCommCard from '../ProjCommCard';
import ProjCommModal from "../editprofilecomponents/ProjCommModal"


const ProfileCommunities = ({ type }) => {

    const [projects, setProjects] = useState([]);
    const [communities, setCommunities] = useState([]);

    const getProjects = async () => {
        const projectresponse = await getUsersproject()

        if (projectresponse.status === 201) {
            setProjects(projectresponse.data)
        }
    }

    const getCommunities = async () => {
        const communityresponse = await getUsersCommunity()

        if (communityresponse.status === 201) {
            setCommunities(communityresponse.data)
            console.log(communityresponse.data)
        }
    }

    useEffect(() => {



        getProjects();
        getCommunities();

    }, []);

    return (
        <>

            <div className="pf_projcomm_mainparent">
                <div className="pf_projcomm_subparent">

                    <div className="pf_projcomm_headerdiv" style={{ marginTop: "3.5rem" }}>
                        <p>Projects</p>
                        {
                            type === "edit" && <button type="button" class="btn pf_projcomm_addbtn" data-bs-toggle="modal" data-bs-target="#projectmodal">
                                Add a project
                            </button>
                        }

                    </div>

                    <div className="pf_projcomm_projectsdiv">
                        {projects.map((data) => (
                            <div className="user">
                                <ProjCommCard data={data} type="project" />
                            </div>
                        ))}
                    </div>

                    <div className="pf_projcomm_headerdiv" style={{ marginTop: "3.5rem" }}>
                        <p>Communities</p>
                        {
                            type === "edit" && <button type="button" class="btn pf_projcomm_addbtn" data-bs-toggle="modal" data-bs-target="#commmodal">
                                Add your community
                            </button>
                        }
                    </div>

                    <div className="pf_projcomm_projectsdiv">
                        {communities.map((data) => (
                            <div className="user">
                                <ProjCommCard data={data} type="communities" />
                            </div>
                        ))}
                    </div>


                </div>


                <div class="modal fade pf_modal" id="projectmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <ProjCommModal type="project" />
                </div>

                <div class="modal fade pf_modal" id="commmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <ProjCommModal type="community" />
                </div>






            </div>

        </>
    )
}

export default ProfileCommunities