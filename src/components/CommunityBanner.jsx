import React, { useEffect, useRef, useState } from 'react'
import "../styles/CommunityBanner.css";
import Carousel from "react-elastic-carousel";
import { ReactComponent as EddieFeat } from '../assets/EddieHub_feat.svg';
import { ReactComponent as FourCFeat } from '../assets/4c_feat.svg';
import { ReactComponent as WmdFeat } from '../assets/wmd_feat.svg';
import { Navigate, useNavigate } from 'react-router-dom';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
];


const CommunityBannerDesktop = () => {


    const carouselRef = useRef(null);
    const [autoPlay, setAutoPlay] = useState(true);
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

    const navigate = useNavigate();


    return (
        <>





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
                            <p className='cb_rightdiv_p2'>You can explore and join some awesome tech communities around the globe OR add your community for others to join !</p>
                        </div>

                        {/* <button className='cb_rightdiv_btn' onClick={() => {
                            navigate("/communities")
                        }}>See more communities</button> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default CommunityBannerDesktop