import React from 'react'
import "../styles/Signup.css"
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="container signup_main_parent">

                <div className="signup_subparent">
                    <img src="https://i.ibb.co/jWvwqsK/heydesktop2.png" alt="" className='signup_img' />

                    <div className="signup_textdiv">
                        <p className='signup_textdiv_p1'>Continue your journey with us !</p>
                        <form className='signup_form'>
                            {window.innerWidth > 430 ? <div class="mb-4">
                                <label for="exampleInputEmail1" class="form-label" >Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoFocus />

                            </div> : (<div class="mb-4">
                                <label for="exampleInputEmail1" class="form-label" >Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>)}

                            <div class="mb-4">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>


                            <p className='signup_textdiv_p2'>Don't have an account ? <span className='signup_textdiv_span2' onClick={() => { navigate("/signup") }} >Sign up</span></p>

                            <div className="signup_btndiv">
                                <button type="submit" class="btn  signup_btn">Login</button>
                            </div>

                            <div className='signup_continuewithdiv'>
                                <hr className='signup_hr' />
                                <p>Or continue with</p>
                                <hr className='signup_hr' />
                            </div>

                            <div className='signup_social_iconsdiv'>
                                <div>
                                    <img src="https://i.ibb.co/dWNXKj2/g1.png" alt="" className='signup_social_icons' />
                                    <img src="https://i.ibb.co/2NZZfmC/git1.png" alt="" className='signup_social_icons' style={{ backgroundColor: "white", borderRadius: "50%" }} />
                                    <img src="https://i.ibb.co/4N6NK5T/t1.png" alt="" className='signup_social_icons' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login