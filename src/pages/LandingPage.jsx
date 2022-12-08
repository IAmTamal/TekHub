import React from 'react'
import CommunityBanner from '../components/landingcomponents/CommunityBanner'
import DeveloperBanner from '../components/landingcomponents/DeveloperBanner'
import Footer from '../components/Footer'
import HeroBannerDeskop from '../components/landingcomponents/HeroBannerDeskop'
import ProjectsBanner from '../components/landingcomponents/ProjectsBanner'
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