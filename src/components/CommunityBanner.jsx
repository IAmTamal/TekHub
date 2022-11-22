import React from 'react'
import "../styles/CommunityBanner.css"
import { ReactComponent as LeftWing } from '../assets/leftwing.svg';
import { ReactComponent as RightWing } from '../assets/rightwing.svg';

const CommunityBannerDesktop = () => {
    return (
        <>
            <div className="container">
                <div className="cb_main_parent">
                    <div className="cb_heading_div">

                        <div className="cb_heading_div1">
                            <LeftWing className='leftwing' />
                            <p className='cb_heading_div_p1'>Communities give you wings !</p>

                            <RightWing className='rightwing' />
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default CommunityBannerDesktop