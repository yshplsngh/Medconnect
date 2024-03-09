import React, { useEffect, useState, useRef } from 'react';
import useAuth from '../hooks/useAuth';
import signUp from '../img/signup.png';
import axios from 'axios'
import Loading from '../components/Loading.jsx'
import { useNavigate, Link, Route } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DoctorRegistrationForm() {
    const navigate = useNavigate();
    const { disLogin, setDisLogin ,loading ,setLoading} = useAuth();


    useEffect(() => {
        if (disLogin) {
            navigate("/homeDoc");
        }
    })

    // const [boardFile, setBoardFile] = useState('');
    // const [profilePicture, setProfilePicture] = useState('');
    const [result, setresult] = useState('');
    // const [userLocation, setUserLocation] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        // middleName: '',
        lastName: '',
        password: '',
        gender: '',
        contactNumber: '',
        emailAddress: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        licenseNumber: '',
        // medicalSchool: '',
        // graduationYear: '',
        specialization: '',
        yearsOfPractice: '',
        // hospitalAffiliation: '',
        // previousWork: '',
    });


    // Handle form field changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const toastOptions = {
        position: "bottom-right",
        autoClose: 2000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    const toastOptions2 = {
        position: "top-right",
        autoClose: 2000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    };

    const handleValidation = () => {
        const { firstName, lastName, password, gender, contactNumber, emailAddress, streetAddress, city, state, zipCode } = formData;
        if (!firstName || !lastName) {
            toast.error("Username should be filled properly ", toastOptions);
            return false;
        }
        if (password.length < 8) {
            toast.error("Password should be equal or greater than 8 characters.", toastOptions)
            return false;
        }

        if (!gender) {
            toast.error("Please selct any one gender", toastOptions);
            return false;
        }
        if (contactNumber.length !== 10) {
            toast.error("Enter valid contact number", toastOptions);
            return false;
        }
        if (emailAddress === "") {
            toast.error("Enter valid Email", toastOptions);
            return false;
        }
        if (!streetAddress || !state || !city) {
            toast.error("Enter valid Address", toastOptions);
            return false;
        }
        if (zipCode.length !== 6) {
            toast.error("invalid zip code", toastOptions);
            return false;
        }
        // if (!boardFile) {
        //     toast.error("please upload certificate", toastOptions);
        //     return false;
        // }
        // if (boardFile.type !== 'image/png' && boardFile.type !== 'image/jpeg') {
        //     toast.error("upload PNG and JPEG images only", toastOptions);
        //     return false;
        // } if (!profilePicture) {
        //     toast.error("please upload profile picture", toastOptions);
        //     return false;
        // }
        // if (profilePicture.type !== 'image/png' && profilePicture.type !== 'image/jpeg') {
        //     toast.error("upload PNG and JPEG images only", toastOptions);
        //     return false;
        // }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        if (handleValidation()) {
            const { firstName, lastName, password, gender, contactNumber, emailAddress, streetAddress, city, state, zipCode, yearsOfPractice, licenseNumber, specialization } = formData;
            // const boarddata = new FormData();
            // boarddata.append("name", boardFile.name);
            // boarddata.append("file", boardFile);

            // const profiledta = new FormData();
            // profiledta.append("name", profilePicture.name);
            // profiledta.append("file", profilePicture);
            // console.log(boarddta);
            // console.log(profiledta);
            // toast.info("fetching your location", toastOptions);

            // if ("geolocation" in navigator) {
            //     navigator.geolocation.getCurrentPosition(
            //         (position) => {
            //             const newLatitude = position.coords.latitude;
            //             const newLongitude = position.coords.longitude;
            //             setUserLocation({ latitude: newLatitude, longitude: newLongitude });
            //             toast.success("Location fetched successfully", toastOptions);
            //         },
            //         (error) => {
            //             setUserLocation(null);
            //             if (error.code === 1) {
            //                 toast.error("error! while getting your location", toastOptions);
            //             }
            //         }
            //     );
            // }
            // console.log(userLocation);
            const response = await axios.post('http://localhost:5000/api/auth/doctorregister', {
                firstName, lastName, password, gender, contactNumber, emailAddress, streetAddress, city, state, zipCode, yearsOfPractice, licenseNumber, specialization
            });


            console.log(response);

            // boarddata.append("docid",response.data.docid)
            // const resboardcertificate = await axios.post('http://localhost:5000/upload/boardCertificate',boarddata);

            // console.log(resboardcertificate);

            // console.log(resboardcertificate);
            if (response.data.status === false) {
                toast.error(response.data.msg, toastOptions);
                return;
            }
            else if (response.data.status === true) {
                localStorage.setItem('authToken', response.data.authToken);
                toast.success("Successfully created", toastOptions2);
                setDisLogin(true);
                setLoading(false);
                navigate("/homeDoc");
            }
        }
    };

    // const uploadFile = async (data)=>{
    //     try {
    //       const response = await axios.post(`http://localhost:5000/upload`,data);
    //       return response.data;
    //     } catch (error) {
    //       console.log('Error while calling API',error.message);
    //     }
    //   }

    // useEffect(() => {
    //     const getImage = async () => {
    //         if (file) {
    //             console.log(file)
    //             if (file.type === 'image/png' || file.type === 'image/jpeg') {
    //                 const data = new FormData();
    //                 data.append("name", file.name);
    //                 data.append("file", file);

    //                 let response = await uploadFile(data);
    //                 console.log(response);
    //                 // setresult(response.path);
    //             } else {
    //                 console.log("please upload png/jpg images");
    //             }
    //         }
    //     }
    //     getImage();
    // }, [file])


    // Add your validation logic here (e.g., required fields, format checks)

    // Render the form
    return (
        <>
            <div>
                {loading ? <Loading /> : (
                    <div className="container mx-auto md:flex items-center">
                        <div className="md:w-3/5">
                            <div className="border p-8 m-12 rounded-lg">
                                <h2 className="custom-color text-4xl">Sign Up</h2>
                                <p className="my-4">
                                    And enjoy life during the time you just saved!
                                </p>
                                <form className="" onSubmit={handleSubmit}>


                                    <div className="md:flex justify-between md:py-3 md:mb-1">
                                        <div className="mb-4 md:w-1/2 md:mr-2">
                                            <input
                                                className="w-full border-b rounded py-2 pl-4"
                                                type="text"
                                                placeholder="Firstname"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                        <div className="mb-4 md:w-1/2 md:mr-2">
                                            <input
                                                className="w-full border-b rounded py-2 pl-4"
                                                type="text"
                                                placeholder="Lastname"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            className="w-full border-b rounded py-2 pl-4"
                                            type="text"
                                            placeholder="Password"
                                            name="password"
                                            value={formData.password}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div className="md:flex justify-between md:py-3 md:mb-1">
                                        <div className="mb-4 md:w-1/3 md:mr-2">
                                            <select
                                                id="gender"
                                                name="gender"
                                                value={formData.gender}
                                                onChange={(e) => handleChange(e)}
                                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className="mb-4 md:w-1/3 md:mr-2">
                                            <input
                                                className="w-full border-b rounded py-2 pl-4"
                                                type="number"
                                                placeholder="Contact No."
                                                name="contactNumber"
                                                value={formData.contactNumber}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>

                                        <div className="mb-4 md:w-1/3 md:mr-2">
                                            <input
                                                className="w-full border-b rounded py-2 pl-4"
                                                type="email"
                                                placeholder="Email"
                                                name="emailAddress"
                                                value={formData.emailAddress}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            className="w-full border-b rounded py-2 pl-4"
                                            type="text"
                                            placeholder="street Address"
                                            name="streetAddress"
                                            value={formData.streetAddress}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div className="md:flex justify-between md:py-3 md:mb-1">
                                        <div className="mb-4 md:w-1/3 md:mr-2">
                                            <select
                                                id="state"
                                                name="state"
                                                value={formData.state}
                                                onChange={(e) => handleChange(e)}
                                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
                                            >
                                                <option value="">Select State</option>
                                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                <option value="Assam">Assam</option>
                                                <option value="Bihar">Bihar</option>
                                                <option value="Chhattisgarh">Chhattisgarh</option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gujarat">Gujarat</option>
                                                <option value="Haryana">Haryana</option>
                                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                <option value="Jharkhand">Jharkhand</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Kerala">Kerala</option>
                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Manipur">Manipur</option>
                                                <option value="Meghalaya">Meghalaya</option>
                                                <option value="Mizoram">Mizoram</option>
                                                <option value="Nagaland">Nagaland</option>
                                                <option value="Odisha">Odisha</option>
                                                <option value="Punjab">Punjab</option>
                                                <option value="Rajasthan">Rajasthan</option>
                                                <option value="Sikkim">Sikkim</option>
                                                <option value="Tamil Nadu">Tamil Nadu</option>
                                                <option value="Telangana">Telangana</option>
                                                <option value="Tripura">Tripura</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                <option value="Uttarakhand">Uttarakhand</option>
                                                <option value="West Bengal">West Bengal</option>
                                            </select>
                                        </div>

                                        <div className="mb-4 md:w-1/3 md:mr-2">
                                            <input
                                                className="w-full border-b rounded py-2 pl-4"
                                                type="text"
                                                placeholder="City"
                                                name="city"
                                                value={formData.city}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>

                                        <div className="mb-4 md:w-1/3 md:mr-2">
                                            <input
                                                className="w-full border-b rounded py-2 pl-4"
                                                type="number"
                                                placeholder="zipCode"
                                                name="zipCode"
                                                value={formData.zipCode}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <input
                                            className="w-full border-b rounded py-2 pl-4"
                                            type="text"
                                            placeholder="license Number"
                                            name="licenseNumber"
                                            value={formData.licenseNumber}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>

                                    <div className="md:flex justify-between md:py-3 md:mb-1">
                                        {/* <div className="mb-4 md:w-2/3 md:mr-2">
                                        <input
                                            className="w-full border-b rounded py-2 pl-4"
                                            type="text"
                                            placeholder="specialization"
                                            name="specialization"
                                            value={formData.specialization}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div> */}
                                        <div className="mb-4 md:w-1/2 md:mr-2">
                                            <select
                                                id="gender"
                                                name="specialization"
                                                value={formData.specialization}
                                                onChange={(e) => handleChange(e)}
                                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
                                            >
                                                <option value="">Select Speciality</option>
                                                <option value="General Physician">General Physician</option>
                                                <option value="Pediatrics">Pediatrics</option>
                                                <option value="Dental">Dental</option>
                                                <option value="Cold and Fever">Cold and Fever</option>
                                                <option value="Dermatology">Dermatology</option>
                                                <option value="Gynecology">Gynecology</option>
                                                <option value="Lab Report Analysis">Lab Report Analysis</option>
                                                <option value="General Surgery">General Surgery</option>
                                                <option value="Gastroentelogy">Gastroentelogy</option>
                                                <option value="Orthopadics">Orthopadics</option>
                                                <option value="Pragnency Issues">Pragnency Issues</option>
                                                <option value="Ear Nose and Throat">Ear Nose and Throat</option>
                                                <option value="Neurology">Neurology</option>
                                                <option value="Cardiology">Cardiology</option>
                                                <option value="Psychology">Psychology</option>
                                                <option value="Psychiatry">Psychiatry</option>
                                                <option value="Hair Scalp Care">Hair Scalp Care</option>
                                                <option value="Diabetes Consult">Diabetes Consult</option>
                                                <option value="Opthalmology">Opthalmology</option>
                                                <option value="Pulmonology">Pulmonology</option>
                                                <option value="Nephrology">Nephrology</option>
                                                <option value="Physiotherapist">Physiotherapist</option>
                                                <option value="Oncology">Oncology</option>
                                                <option value="Infertility">Infertility</option>
                                                <option value="Lactation Consultation">Lactation Consultation</option>
                                                <option value="Weight Management">Weight Management</option>
                                                <option value="Urology">Urology</option>
                                                <option value="Endocrinology">Endocrinology</option>
                                                <option value="Haematology">Haematology</option>
                                                <option value="Rheumatology">Rheumatology</option>
                                                <option value="Gariatric Medicine">Gariatric Medicine</option>
                                                <option value="I do not know">I do not know</option>
                                            </select>
                                        </div>
                                        <div className="mb-4 md:w-1/2 md:mr-2">
                                            <input
                                                className="w-full border-b rounded py-2 pl-4"
                                                type="text"
                                                placeholder="years of Practice"
                                                name="yearsOfPractice"
                                                value={formData.yearsOfPractice}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                    </div>

                                    {/* document upload */}

                                    {/* <div className='md:flex justify-between md:py-3 md:mb-1'>
                                    <label htmlFor="boardcertificate">Upload Board Certificate</label>
                                    <input type="file" id='boardFile' name='boardFile' className=' mx-2' onChange={(e) => { setBoardFile(e.target.files[0]) }} />
                                </div>

                                <div className='md:flex justify-between md:py-3 md:mb-1'>
                                    <label htmlFor="profilePicture">Upload profile Picture</label>
                                    <input type="file" id='profilePicture' name='profilePicture' className=' mx-2' onChange={(e) => { setProfilePicture(e.target.files[0]) }} />
                                </div> */}


                                    {/* ///// */}
                                    <div>
                                        Creating an account means you are okay with our
                                        Terms of Service and Privacy Policy
                                    </div>
                                    <div>
                                        <button
                                            className="py-3 px-5 text-xl md:text-2xl border w-full mt-5 rounded"
                                            type="submit"
                                        >
                                            Create an Account
                                        </button>
                                    </div>
                                </form>
                                <h2 className="my-8 text-xl text-center md:text-left">
                                    Already have an account ?{' '}
                                    <Link
                                        className="primary-color font-bold"
                                        to="/login"
                                    >
                                        Sign In
                                    </Link>
                                </h2>
                            </div>
                        </div>
                        <div className="w-2/5 hidden md:block">
                            <img src={signUp} alt="" />
                        </div>
                    </div>
                )}
                <ToastContainer />
            </div>
        </>
    );
}
