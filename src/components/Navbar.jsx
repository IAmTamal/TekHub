import React, { useState } from 'react'
import "../styles/Navbar.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [showdropdown, setshowdropdown] = useState(false);
    return (
        <>

            <div className=" container navbar_main_parent sticky-top" >
                <div className='navbar_subparent'>

                    <Link to='/' className='navbar_brand'>FellowCoders</Link>

                    <div className="navbar_linksdiv">

                        <Link to='/' className='navbar_links'>Home</Link>
                        <Link to='/about' className='navbar_links'>About</Link>
                        <Link to='/communities' className='navbar_links'>Communities</Link>
                        <Link to='/projects' className='navbar_links'>Projects</Link>




                    </div>

                    <button type='button' className='btn btn-warning navbar_joinus_button'>Sign up</button>
                    <GiHamburgerMenu className='navbar_ham' onClick={() => { setshowdropdown(!showdropdown) }} />


                </div>
            </div>


            {showdropdown && <div className="navbar_mobile_dropdown_parent">
                <div className="navbar_mobile_dropdown_subparent">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                    <button type='button' className='btn btn-warning navbar_joinus_button'>Sign up</button>

                </div>
            </div>}


        </>
    )
}

export default Navbar