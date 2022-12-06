import React from 'react'
import CommunityBanner from '../components/CommunityBanner'
import DeveloperBanner from '../components/DeveloperBanner'
import Footer from '../components/Footer'
import HeroBannerDeskop from '../components/HeroBannerDeskop'
import ProjectsBanner from '../components/ProjectsBanner'
import "../styles/LandingPage.css"

const LandingPage = () => {
    return (
        <>

            <div className='HeroBannerDesktop_Parentdiv'>
                <HeroBannerDeskop />
                <DeveloperBanner />
                <CommunityBanner />
                <ProjectsBanner />

                <Footer />
            </div>
        </>
    )
}

export default LandingPage