import React, { useState } from 'react'
import "../styles/Signup.css"
import { useNavigate } from 'react-router-dom'
import { UserSignup } from "../service/AuthApi.js"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
    const navigate = useNavigate()
    const [creds, setCreds] = useState({ name: "", email: "", password: "" })

    const handleChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await UserSignup(creds);


        if (response.status === 201) {
            toast(response.data.message, {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                closeButton: false,
                onClose: () => {
                    navigate('/login');
                },
            });
        }


    }


    return (
        <>


            <div className="container signup_main_parent">

                <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    closeButton={false}
                    limit={1}
                />

                <div className="signup_subparent">
                    <img src="https://i.ibb.co/jWvwqsK/heydesktop2.png" alt="" className='signup_img' />

                    <div className="signup_textdiv">
                        <p className='signup_textdiv_p1'>Start your journey with us !</p>
                        <form className='signup_form'>


                            {window.innerWidth > 430 ? <div class="mb-4">
                                <label for="exampleInputPassword1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" autoFocus name='name' value={creds.name} onChange={handleChange} />
                            </div> : <div class="mb-4">
                                <label for="exampleInputPassword1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" name='name' value={creds.name} onChange={handleChange} />
                            </div>}


                            <div class="mb-4">


                                <label for="exampleInputEmail1" class="form-label" >Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={creds.email} onChange={handleChange} />

                            </div>




                            <div class="mb-4">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={creds.password} onChange={handleChange} />
                            </div>


                            <p className='signup_textdiv_p2'>Already have an account ? <span className='signup_textdiv_span2' onClick={() => { navigate("/login") }}>Log in</span></p>




                            <div className="signup_btndiv">
                                <button type="submit" class="btn  signup_btn" onClick={handleSubmit}>Signup</button>
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

export default Signup