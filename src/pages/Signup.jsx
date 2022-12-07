import React from 'react'
import "../styles/Signup.css"
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="container signup_main_parent">

                <div className="signup_subparent">
                    <img src="https://i.ibb.co/jWvwqsK/heydesktop2.png" alt="" className='signup_img' />

                    <div className="signup_textdiv">
                        <p className='signup_textdiv_p1'>Start your journey with us !</p>
                        <form className='signup_form'>


                            {window.innerWidth > 430 ? <div class="mb-4">
                                <label for="exampleInputEmail1" class="form-label" >Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoFocus />

                            </div> : (<div class="mb-4">
                                <label for="exampleInputEmail1" class="form-label" >Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>)}



                            <div class="mb-4">
                                <label for="exampleInputPassword1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" />
                            </div>


                            <div class="mb-4">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>


                            <p className='signup_textdiv_p2'>Already have an account ? <span className='signup_textdiv_span2' onClick={() => { navigate("/login") }}>Log in</span></p>

                            <div className="signup_btndiv">
                                <button type="submit" class="btn  signup_btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup