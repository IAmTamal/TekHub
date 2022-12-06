import React from 'react'
import "../styles/DeveloperBanner.css";

const DeveloperBanner = () => {
    return (
        <>
            <div className="container dv_parent">

                <div className="dv_subparent">

                    <div className="dv_textdiv">
                        <p className='dv_p1'>Geek out with the techies !</p>

                        <div style={{ width: "100%", display: "flex", }}>
                            <p className='dv_p2'>Meet tech enthusiastic folks around you, learn about their tech journey, collaborate on projects, explore and grow together !</p>
                        </div>
                    </div>

                    <div className="dv_imgdiv">
                        <img src="https://i.ibb.co/txTMrbm/FNJQPWl-Vg-AAo-Pa-H-1.jpg" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default DeveloperBanner