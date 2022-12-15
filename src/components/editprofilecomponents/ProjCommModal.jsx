import React, { useState } from 'react'
import "../../styles/Profile.css"
import { addProject, addUsersCommunity } from '../../service/ProfileApi';

const ProjCommModal = ({ type }) => {

    // const [user, setuser] = useState();
    const [data, setdata] = useState({ name: "", desc: "", pic: "", gh_link: "", yt_link: "", pj_link: "", tw_link: "", dc_link: "" });


    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            };
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    const handleImage = async (e) => {
        const base64 = await convertToBase64(e.target.files[0]);
        setdata({ ...data, [e.target.name]: base64 })
    }

    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const dataUpload = async (e) => {
        e.preventDefault();
        console.log(data);
        if (type === "project") {
            const response = await addProject(data);

            if (response.status === 201) {
                alert("Project added successfully");
                setdata({ name: "", desc: "", pic: "", gh_link: "", yt_link: "", pj_link: "" })
            }
        }

        if (type === "community") {
            const response = await addUsersCommunity(data);

            if (response.status === 201) {
                alert("Community added successfully");
                setdata({ name: "", desc: "", pic: "", gh_link: "", yt_link: "", pj_link: "", tw_link: "", dc_link: "" })
            }
        }
    }


    return (
        <>

            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        {type === "project" ? <h1 className="modal-title ap_header1" id="staticBackdropLabel">Add a project</h1> : <h1 className="modal-title ap_header1" id="staticBackdropLabel">Add your community</h1>}
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                            setdata({ name: "", desc: "", pic: "", gh_link: "", yt_link: "", pj_link: "" })
                        }}></button>
                    </div>
                    <div className="modal-body ap_modal_body">
                        <div className='ap_inputdiv1'>
                            <div>
                                <div>
                                    <label for="nameofproject" class="form-label ap_input_label">{type === "project" ? "Project name" : "Community name"}</label>
                                    <input autoFocus type="text" class="form-control ap_input" id="nameofproject" aria-describedby="emailHelp" style={{ marginRight: "8rem" }} name="name" value={data.name} onChange={handleChange} />
                                </div>
                                <div>

                                    <label for="floatingTextarea " className='ap_input_label' style={{ marginTop: "1rem" }}>{type === "project" ? "Project description" : "Community description"}</label>
                                    <textarea class="form-control ap_textarea" id="floatingTextarea" name="desc" value={data.desc} onChange={handleChange} ></textarea>

                                </div>
                            </div>

                            <div className='ap_img_inptdiv'>
                                <img src={data.pic || "https://i.ibb.co/3zFTCwZ/1.png"} alt="" />
                                <input type="file" className='ap_input_file' accept="image/png, image/gif, image/jpeg" onChange={handleImage} name="pic" />
                            </div>

                        </div>




                        <div className="ap_inputdiv2">
                            <div>
                                <label for="nameofproject" class="form-label ap_input_label">GitHub link</label>
                                <input type="text" class="form-control ap_input" id="nameofproject" aria-describedby="emailHelp" name="gh_link" value={data.gh_link} onChange={handleChange} />
                            </div>
                            <div>
                                <label for="nameofproject" class="form-label ap_input_label">{type === "project" ? "Deployed link" : "Community website"} </label>
                                <input type="text" class="form-control ap_input" id="nameofproject" aria-describedby="emailHelp" name="pj_link" value={data.pj_link} onChange={handleChange} />
                            </div>
                            <div>
                                <label for="nameofproject" class="form-label ap_input_label">Youtube link</label>
                                <input type="text" class="form-control ap_input" id="nameofproject" aria-describedby="emailHelp" name="yt_link" value={data.yt_link} onChange={handleChange} />
                            </div>
                            {type !== "project" && <>
                                <div>
                                    <label for="nameofproject" class="form-label ap_input_label">Discord link</label>
                                    <input type="text" class="form-control ap_input" id="nameofproject" aria-describedby="emailHelp" name="dc_link" value={data.dc_link} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="nameofproject" class="form-label ap_input_label">Twitter link</label>
                                    <input type="text" class="form-control ap_input" id="nameofproject" aria-describedby="emailHelp" name="tw_link" value={data.tw_link} onChange={handleChange} />
                                </div>
                            </>}

                        </div>

                    </div>
                    <div className="modal-footer">

                        <button type="button" className="btn ap_uploadbtn" data-bs-dismiss="modal" onClick={(e) => { dataUpload(e) }}>Upload</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProjCommModal