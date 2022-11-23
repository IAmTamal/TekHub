import React, { useEffect, useRef, useState } from 'react'
import "../styles/CommunityBanner.css"
import { ReactComponent as LeftWing } from '../assets/leftwing.svg';
import { ReactComponent as RightWing } from '../assets/rightwing.svg';
import CarouselItem from './CarouselItem';
import Carousel from "react-elastic-carousel";
import { ReactComponent as HeyBannerMobile } from '../assets/heymobile.svg';
import { ReactComponent as HeyBannerDesktop } from '../assets/heydesktop.svg';
import { ReactComponent as EddieFeat } from '../assets/EddieHub_feat.svg';
import { ReactComponent as FourCFeat } from '../assets/4c_feat.svg';
import { ReactComponent as WmdFeat } from '../assets/wmd_feat.svg';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
];


const CommunityBannerDesktop = () => {


    const carouselRef = useRef(null);
    const [autoPlay, setAutoPlay] = useState(true);

    const [win, setwin] = useState();
    const [creds, setcreds] = useState({ email: "" });
    let resetTimeout;

    const handleMouse1 = () => {
        clearTimeout(resetTimeout);

        setAutoPlay(false);
    };

    const handleMouse2 = () => {
        setAutoPlay(true);


    };

    const handleEnd = () => {
        clearTimeout(resetTimeout);

        resetTimeout = setTimeout(() => {
            carouselRef?.current?.goTo(0);
        }, 2500);
    };


    useEffect(() => {
        // window is accessible here.

        setwin(window.innerHeight);
    }, []);
    return (
        <>
            {/* <div className="container">
                <div className="cb_main_parent">
                    <div className="cb_heading_div">

                        <div className="cb_heading_div1">
                            <LeftWing className='leftwing' />
                            <p className='cb_heading_div_p1'>Communities give you wings !</p>

                            <RightWing className='rightwing' />
                        </div>




                    </div>
                </div>
            </div> */}

            <div className=" container cb_main_parent">

                <div className="cb_subparent1">

                    <div className="cb_leftdiv">

                        <Carousel

                            ref={carouselRef}
                            breakPoints={breakPoints}
                            // enableAutoPlay
                            enableAutoPlay={autoPlay}
                            isRTL={false}
                            showButton={false}
                            showArrows={false}
                            pagination={false}
                            autoPlaySpeed={2000}
                            onNextEnd={handleEnd}
                        >
                            <EddieFeat className="Feat_img" />
                            <FourCFeat className="Feat_img" />
                            <WmdFeat className="Feat_img" />




                        </Carousel>
                    </div>

                    <div className="cb_rightdiv">

                        <p className='cb_rightdiv_p1'>Communities are fun !</p>




                        <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                            <p className='cb_rightdiv_p2'>Explore and join the awesome tech communities around the globe OR add your community for others to join !</p>
                        </div>
                        <button className='cb_rightdiv_btn'>Explore</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default CommunityBannerDesktop