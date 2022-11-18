import React, { useState } from 'react'
import "../styles/Navbar.css"
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

    const [showdropdown, setshowdropdown] = useState(false);
    return (
        <>

            <div className=" container navbar_main_parent" >
                <div className='navbar_subparent'>
                    <p className='navbar_brand'>FellowCoders</p>

                    <div className="navbar_linksdiv">

                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>

                    </div>

                    <button type='button' className='btn btn-warning navbar_joinus_button'>Join Us</button>
                    <GiHamburgerMenu className='navbar_ham' onClick={() => { setshowdropdown(!showdropdown) }} />


                </div>
            </div>


            {showdropdown && <div className="navbar_mobile_dropdown_parent">
                <div className="navbar_mobile_dropdown_subparent">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                    <button type='button' className='btn btn-warning navbar_joinus_button'>Join Us</button>

                </div>
            </div>}


        </>
    )
}

export default Navbar