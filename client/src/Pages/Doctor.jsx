
import { useState } from "react"
import { AuthGuard } from "../authentication/authGuard"
import axios from 'axios'

function Doctor() {

    let [data, setData] = useState({
        firstName: '',
        lastName: '',
        specialty: [],
        licenseNumber: '',
        contact: {
            email: '',
            phone: '',
        },
        address: {
            street: '',
            city: '',
            state: '',
            zipcode: '',
        }
    })
    console.log(data)

    const sendData = async () => {
        let response = await axios.post("http://localhost:4000/hospital/create-doctor", data, {
            headers: {
                token: localStorage.getItem("token")
            }
        })
        if (response.data.message) {
            alert(response.data.message)
        }
    }

    let specialities = [
        "Anesthesiology",
        "Cardiology",
        "Dermatology",
        "Emergency Medicine",
        "Endocrinology",
        "Family Medicine",
        "Gastroenterology",
        "General Surgery",
        "Hematology",
        "Infectious Disease",
        "Internal Medicine",
        "Neurology",
        "Obstetrics and Gynecology",
        "Oncology",
        "Ophthalmology",
        "Orthopedic Surgery",
        "Otolaryngology (ENT)",
        "Pediatrics",
        "Psychiatry",
        "Pulmonology",
        "Radiology",
        "Rheumatology",
        "Urology",
    ]
    return (

        <div className="p-5 flex flex-col gap-5">
            <h1 className="text-3xl text-center text-slate-500">Doctor Details</h1>
            <div className=" bg-white rounded-lg p-3 gap-4">
                <div className="flex  gap-10 bg-white p-3">
                    <div>
                        <label className="text-slate-400 ">First Name</label>
                        <input
                            type="text"
                            className="outline-none text-slate-500 p-1 border" onChange={(e) => setData({ ...data, firstName: e.target.value })} />
                        <label className="text-slate-400 mt-1">Mobile Number</label>
                        <input
                            type="number"
                            className="outline-none text-slate-500 p-1 border"
                            onChange={(e) => setData({
                                ...data, contact: {
                                    ...data.contact,
                                    phone: e.target.value
                                }
                            })} />
                        <label className="text-slate-400 mt-2">State</label>
                        <input
                            type="text"
                            className="outline-none text-slate-500 p-1 border" onChange={(e) => setData({
                                ...data, address: {
                                    ...data.address,
                                    state: e.target.value
                                }
                            })} />


                        <label className="text-slate-400 mt-2">Street</label>
                        <input
                            type="text"
                            className="outline-none text-slate-500 p-1 border"
                            onChange={(e) => setData({
                                ...data, address: {
                                    ...data.address,
                                    street: e.target.value
                                }
                            })} />
                        <label className="text-slate-400 mt-2">License Number</label>
                        <input
                            type="text"
                            className="outline-none text-slate-500 p-1 border" onChange={(e) => setData({
                                ...data, licenseNumber: e.target.value
                            })} />

                    </div>
                    <div>
                        <label className="text-slate-400 mt-2">Last Name</label>
                        <input
                            type="text"
                            className="outline-none text-slate-500 p-1 border"
                            onChange={(e) => setData({
                                ...data, lastName: e.target.value
                            })} />

                        <label className="text-slate-400 mt-2">Email</label>
                        <input
                            type="email"
                            className="outline-none text-slate-500 p-1 border" onChange={(e) => setData({
                                ...data, contact: {
                                    ...data.contact,
                                    email: e.target.value
                                }
                            })} />

                        <label className="text-slate-400 mt-2">City</label>
                        <input
                            type="text"
                            className="outline-none text-slate-500 p-1 border" onChange={(e) => setData({
                                ...data, address: {
                                    ...data.address,
                                    city: e.target.value
                                }
                            })} />
                        <label className="text-slate-400 mt-10">Zip Code</label>
                        <input
                            type="text"
                            className="outline-none text-slate-500 p-1 border" onChange={(e) => setData({
                                ...data, address: {
                                    ...data.address,
                                    zipcode: e.target.value
                                }
                            })} />
                        <label className="text-slate-400 mt-2">Speciality</label>
                        <select className="outline-none text-slate-500 p-1.5 border" onChange={(e) => setData({
                            ...data, specialty: [...data.specialty, e.target.value]
                        })}>
                            {specialities.map((x, index) => {
                                return (
                                    <option key={index}>
                                        {x}
                                    </option>
                                )
                            })}
                        </select>
                    </div>

                </div>
                <div className="flex justify-end mt-5 ">
                    <button className="p-2 px-6 bg-blue-950 text-white rounded-xl" onClick={sendData}>Submit</button>
                </div>
            </div>
        </div>
    )
}


export default AuthGuard(Doctor)