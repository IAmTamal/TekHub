import React, { useEffect, useState } from 'react'
import { getUsersproject } from '../../service/ProfileApi';
import "../../styles/Profile.css"
import ProjCommCard from '../ProjCommCard';

const ProfileCommunities = ({ type }) => {

    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        const projectresponse = await getUsersproject()

        if (projectresponse.status === 201) {
            setProjects(projectresponse.data)
        }
    }

    useEffect(() => {



        getProjects();

    }, []);


    const [communities, setCommunities] = useState([
        {
            name: "EddieHub",
            img: "https://i.ibb.co/3zFTCwZ/1.png",
            desc: "Inclusive Opensource community",
            github: "https://github.com/EddieHubCommunity",
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

            <div className="pf_projcomm_mainparent">
                <div className="pf_projcomm_subparent">

                    <div className="pf_projcomm_headerdiv" style={{ marginTop: "3.5rem" }}>
                        <p>Projects</p>
                        {
                            type === "edit" && <button type="button" class="btn pf_projcomm_addbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
                            type === "edit" && <button type="button" class="btn pf_projcomm_addbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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






                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Understood</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfileCommunities