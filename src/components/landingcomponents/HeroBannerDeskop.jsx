import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../styles/HeroBannerDesktop.css"
import Cookies from 'js-cookie'



const HeroBannerDeskop = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="container">
                <div className="hero_main_parent">

                    <div className="hero_subparent1">
                        <p className='heroleftdiv_p2'>Tech, Community, Collaboration</p>
                        <div className='heroleftdiv_mobile_p2div'>
                            <p>Tech</p>
                            <p>Community</p>
                            <p>Collaboration</p>
                        </div>
                        <p className='heroleftdiv_p3'>Join us on our journey to help you connect with other amazing devs, products, content and community ! </p>
                        {!Cookies.get('token') && <button className='heroleftdiv_button' onClick={() => {
                            navigate('/signup')
                        }} >Sign up now !</button>}
                    </div>
                </div>
            </div>





        </>
    )
}

export default HeroBannerDeskop