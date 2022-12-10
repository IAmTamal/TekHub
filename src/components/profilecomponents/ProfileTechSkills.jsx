import React, { useEffect, useState } from 'react'
import "../../styles/Profile.css"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addtech, getUser } from '../../service/ProfileApi'

const ProfileTechSkills = ({ type }) => {

    const [user, setuser] = useState();
    const [techs, settechs] = useState([]);
    const [techinput, settechinput] = useState('');

    const getuser = async () => {
        const response = await getUser();
        console.log(response.data);
        setuser(response.data);
    }


    useEffect(() => {
        getuser();
    }, []);

    const handleTechinput = (e) => {
        settechinput(e.target.value);
    }


    const handleAddtech = async (e) => {
        e.preventDefault();

        if (techinput.trim() === '' || techinput.length < 2 || techinput === null || techinput === undefined || techinput === ' ') {
            toast.error("Please enter valid tech");
            settechinput('');
            return;
        }

        techs.push(techinput);

        settechs(techs);
        const response = await addtech(techs);


        if (response.status === 201) {

            settechinput('');
            settechs([])
            getuser();

        }
    }


    return (
        <>
            {user && <div className="pf_techskills_mainparent">
                <div className="pf_techskills_subparent">

                    <div className="pf_techskills_headerdiv">
                        <p>Tech, Skills</p>
                    </div>

                    <div className="pf_techskills_techdiv">
                        {type === "edit" && <div className='ep_tech_inputdiv'>
                            <input type="text" className='form-control ep_tech_input' placeholder='Ex: React' name='techinput' value={techinput} onChange={handleTechinput} />
                            {/* <AddIcon  /> */}
                            <img src="https://i.ibb.co/QbtWbDR/Add-1.png" alt="" className="ep_tech_addicon" onClick={(e) => { handleAddtech(e) }} />
                        </div>}
                        {user.tech.map((data) => (
                            <div className="pf_techskills_techs">
                                <p>{data}</p>
                            </div>
                        ))}
                    </div>




                </div>
            </div>}

        </>
    )
}

export default ProfileTechSkills