import React from 'react'
import "../styles/DeveloperBanner.css";

const DeveloperBanner = () => {
    return (
        <>
            <div className="container dv_parent">

                <div className="dv_subparent">
                    <div className="dv_imgdiv">
                        <img src="https://i.ibb.co/SNZfMdb/DSC-0736-1.jpg" alt="" />
                    </div>
                    <div className="dv_textdiv">
                        <p className='dv_p1'>Geek out with the techies !</p>

                        <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                            <p className='dv_p2'>Learn from people around you about their tech journey, collaborate on projects, explore and grow together !</p>
                        </div>




                    </div>
                </div>
            </div>

        </>
    )
}

export default DeveloperBanner