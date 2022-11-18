import React from 'react'
import { ReactComponent as HeyBannerMobile } from '../assets/heymobile.svg';
import { ReactComponent as HeyBannerDesktop } from '../assets/heydesktop.svg';
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

                            <HeyBannerDesktop className="heroright_img_mobile" />


                            <p className='heroleftdiv_p3'>To help you connect with other amazing developers, products, content and community around the globe !</p>
                            <button className='heroleftdiv_button'>Get started now</button>
                        </div>
                        <HeyBannerMobile className="heroright_img" />
                    </div>
                </div>
            </div>



        </>
    )
}

export default HeroBannerDeskop