import React, { useEffect, useRef, useState } from 'react'
import "../styles/CommunityBanner.css"
import { ReactComponent as LeftWing } from '../assets/leftwing.svg';
import { ReactComponent as RightWing } from '../assets/rightwing.svg';
import CarouselItem from './CarouselItem';
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
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
            <div className="container">
                <div className="cb_main_parent">
                    <div className="cb_heading_div">

                        <div className="cb_heading_div1">
                            <LeftWing className='leftwing' />
                            <p className='cb_heading_div_p1'>Communities give you wings !</p>

                            <RightWing className='rightwing' />
                        </div>

                        <Carousel

                            ref={carouselRef}
                            breakPoints={breakPoints}
                            // enableAutoPlay
                            // enableAutoPlay={autoPlay}
                            isRTL={false}
                            showButton={true}
                            showArrows={true}
                            pagination={false}
                            autoPlaySpeed={2000}
                            onNextEnd={handleEnd}
                        >
                            <CarouselItem
                                phot="https://i.ibb.co/ZLkD8qr/6.png"
                                name="DaD codes T-shirt"
                                price="$ 35"
                                link="https://shopcoders.com/product/red-linux-t-shirt/"
                            />
                            <CarouselItem
                                phot="https://i.ibb.co/LZX0F8G/7.png"
                                name="Google-It T-shirt"
                                price="$ 35"
                                link="https://shopcoders.com/product/red-linux-t-shirt/"
                            />
                            <CarouselItem
                                phot="https://i.ibb.co/drVKMRK/1.png"
                                name="Developer T-shirt"
                                price="$ 35"
                                link="https://shopcoders.com/product/red-linux-t-shirt/"
                            />
                            <CarouselItem
                                phot="https://i.ibb.co/Kb3vpLB/2.png"
                                name="ESCR T-shirt"
                                price="$ 35"
                                link="https://shopcoders.com/product/red-linux-t-shirt/"
                            />
                            <CarouselItem
                                phot="https://i.ibb.co/JmJ0JCL/3.png"
                                name="Python T-shirt"
                                price="$ 35"
                                link="https://shopcoders.com/product/red-linux-t-shirt/"
                            />
                            <CarouselItem
                                phot="https://i.ibb.co/LPkPf5j/4.png"
                                name="Black Linux T-shirt"
                                price="$ 35"
                                link="https://shopcoders.com/product/red-linux-t-shirt/"
                            />
                            <CarouselItem
                                phot="https://i.ibb.co/0sHTS8d/5.png"
                                name="Sudo T-shirt"
                                price="$ 35"
                                link="https://shopcoders.com/product/red-linux-t-shirt/"
                            />
                            <CarouselItem
                                phot="https://i.ibb.co/ZLkD8qr/6.png"
                                name="Red Linux T-shirt"
                                price="$ 35"
                                link="https://shopcoders.com/product/red-linux-t-shirt/"
                            />

                        </Carousel>


                    </div>
                </div>
            </div>

        </>
    )
}

export default CommunityBannerDesktop