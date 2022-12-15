import React, { useEffect, useState } from 'react'
import ProjCommCard from '../components/ProjCommCard';
import { getallprojects } from '../service/DataApi';

const Projects = () => {

    const [projects, setprojects] = useState([]);

    const getAllprojects = async () => {
        const response = await getallprojects()

        if (response.status === 201) {
            setprojects(response.data)
        }
    }

    useEffect(() => {
        getAllprojects()

    }, []);


    return (
        <>

            <div className="container">
                <div className="comm_main_parent ">
                    <div className="comm_subparent">
                        <div className="comm_header">

                            <p className="comm_header_p1">
                                More projects, more fun !
                                {" "}
                            </p>

                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <p className="comm_header_p2">
                                    Check out, contribute, collaborate some of the best project ideas from around the world.
                                </p>
                            </div>


                        </div>

                        {/* <div className="comm_addbtndiv">
                            <p>Communities to join !</p>
                            <button className="btn btn-warning">Add your community</button>
                        </div>
                        <hr className="comm_hr" /> */}

                        <div className="comm_carddiv">
                            {projects.map((data) => (
                                <div className="user">
                                    <ProjCommCard data={data} type="project" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Projects