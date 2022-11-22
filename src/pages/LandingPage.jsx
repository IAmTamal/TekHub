import React from 'react'
import CommunityBanner from '../components/CommunityBanner'
import HeroBannerDeskop from '../components/HeroBannerDeskop'
import "../styles/LandingPage.css"

const LandingPage = () => {
    return (
        <>

            <div className='HeroBannerDesktop_Parentdiv'>
                <HeroBannerDeskop />



                <CommunityBanner />
            </div>
        </>
    )
}

export default LandingPage