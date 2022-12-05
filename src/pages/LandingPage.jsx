import React from 'react'
import CommunityBanner from '../components/CommunityBanner'
import HeroBannerDeskop from '../components/HeroBannerDeskop'
import ProjectsBanner from '../components/ProjectsBanner'
import "../styles/LandingPage.css"

const LandingPage = () => {
    return (
        <>

            <div className='HeroBannerDesktop_Parentdiv'>
                <HeroBannerDeskop />

                <CommunityBanner />

                <ProjectsBanner />

                <br />


            </div>
        </>
    )
}

export default LandingPage