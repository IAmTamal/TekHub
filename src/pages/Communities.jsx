import React from 'react'
import { ReactComponent as LeftWing } from '../assets/leftwing.svg';
import { ReactComponent as RightWing } from '../assets/rightwing.svg';
import "../styles/Communities.css";

const Communities = () => {
    return (
        <>
            <div className="comm_main_parent container">
                <div className="comm_subparent">

                    <div className="comm_header">
                        <LeftWing />
                        <p className='comm_header_p1'>Communities give you wings
                            <span className='comm_header_p2'>Join some of the best communities from around the world belonging to various domains !</span> </p>

                        <RightWing />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Communities