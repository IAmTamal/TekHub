import React from 'react'
import CommunityBanner from '../components/CommunityBanner'
import DeveloperBanner from '../components/DeveloperBanner'
import Footer from '../components/Footer'
import HeroBannerDeskop from '../components/HeroBannerDeskop'
import ProjectsBanner from '../components/ProjectsBanner'
import "../styles/LandingPage.css"
import { useAuth0 } from '@auth0/auth0-react';


const LandingPage = () => {

    const { logout } = useAuth0();
    return (
        <>




            <div className='HeroBannerDesktop_Parentdiv'>
                <HeroBannerDeskop />
                <DeveloperBanner />
                <CommunityBanner />
                <ProjectsBanner />

                <button className='btn btn-info' onClick={() => { logout() }}>Logout</button>
                <Footer />
            </div>
        </>
    )
}

export default LandingPage