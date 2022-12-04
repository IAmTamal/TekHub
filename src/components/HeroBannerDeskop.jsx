import React from 'react'
import { ReactComponent as HeyBannerMobile } from '../assets/heymobile.svg';
import { ReactComponent as HeyBannerDesktop } from '../assets/heydesktop.svg';
// import { ReactComponent as HeyBannerDesktop2 } from '../assets/heydesktop2.png';
// import { ReactComponent as HeyBanner } from '../assets/heydesktop.png';
import "../styles/HeroBannerDesktop.css"



const HeroBannerDeskop = () => {
    return (
        <>
            <div className="container">
                <div className="hero_main_parent">

                    <div className="hero_subparent1">
                        <div className="hero_image_leftdiv">
                            <p className='heroleftdiv_p1'>Social is POWER</p>
                            <p className='heroleftdiv_p2'>Join us on our Journey !</p>

                            <p className='heroleftdiv_p3'>To help you connect with other amazing developers, products, content and community </p>
                            <button className='heroleftdiv_button'>Get started now</button>
                        </div>
                        {/* <HeyBannerDesktop2 className="heroright_img" /> */}
                        <img src="https://i.ibb.co/jWvwqsK/heydesktop2.png" alt="" />
                    </div>
                </div>
            </div>





        </>
    )
}

export default HeroBannerDeskop