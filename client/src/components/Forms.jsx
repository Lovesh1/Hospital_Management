import { useState } from "react"

export default function Forms() {

    const [data, setData] = useState({
        name: "",
        email: "",
        mobileNumber: "",
        gender: "Male",
        dateOfBirth: "",
        pinCode: "",
        city: "",
        bloodGroup: "",
        maritalStatus: "Single",
        height: "",
        weight: "",
        bmi: "",
        alcoholConsumption: false,
        cigaretteConsumption: false,
        tobaccoConsumption: false,
        foodPreference: "Veg",
        selectSymptoms: [],
        familyHistory: "",
        otherSymptoms: "",
        allergies: "",
        travelInformation: "",
        ongoingMedications: "",
        activeStatus: false,
        status: "pending",
    })
    console.log(data)
    return (
        <div className="container">
            {/* form - 1 */}
            <div className="bg-white p-14 form-radi overflow-hidden form-section">
                <div className="flex flex-col">
                    <div className="flex gap-4 mt-5">
                        <div className="flex flex-col">
                            <label className="text-slate-500">Name</label>
                            <input type="text" className="border-2 border-slate-300 p-2 outline-none" placeholder="John Doe" onChange={(e) => setData({ ...data, name: e.target.value })} defaultValue={data.name}></input>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-slate-500">Patient ID</label>
                            <input type="text" className="border-2 border-slate-300 p-2 outline-none" placeholder="245EYT657" defaultValue={null}></input>
                        </div>
                    </div>

                    <div className="flex mt-3 gap-4">
                        <div className="flex flex-col">
                            <label className="text-slate-500">Email</label>
                            <input type="email" className="border-2 border-slate-300 p-2 outline-none" placeholder="JohnDoe@gmail.com" onChange={(e) => setData({ ...data, email: e.target.value })} defaultValue={data.email}></input>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-slate-500">Mobile Number</label>
                            <input type="number" className="border-2 border-slate-300 p-2 outline-none" placeholder="8101231432" onChange={(e) => setData({ ...data, mobileNumber: e.target.value })} defaultValue={data.mobileNumber}></input>
                        </div>
                    </div>

                    <div className="flex mt-3 gap-4">
                        <div className="flex flex-col">
                            <label className="text-slate-500">Gender</label>
                            <input type="text" className="border-2 border-slate-300 p-2 outline-none" placeholder="Male" onChange={(e) => setData({ ...data, gender: e.target.value })} defaultValue={data.gender}></input>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-slate-500">DOB</label>
                            <input type="date" className="border-2 border-slate-300 p-2 outline-none" placeholder="24/07/2000" onChange={(e) => setData({ ...data, dateOfBirth: e.target.value })} defaultValue={data.dateOfBirth}></input>
                        </div>
                    </div>

                    <div className="flex mt-3 gap-4">
                        <div className="flex flex-col">
                            <label className="text-slate-500">Pincode</label>
                            <input type="email" className="border-2 border-slate-300 p-2 outline-none" placeholder="302046" onChange={(e) => setData({ ...data, pinCode: e.target.value })} defaultValue={data.pinCode}></input>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-slate-500">City</label>
                            <input type="text" className="border-2 border-slate-300 p-2 outline-none" placeholder="Jaipur" onChange={(e) => setData({ ...data, city: e.target.value })} defaultValue={data.city}></input>
                        </div>
                    </div>

                    <div className="flex mt-3 gap-4">
                        <div className="flex flex-col">
                            <label className="text-slate-500">Blood Group</label>
                            <input type="text" className="border-2 border-slate-300 p-2 outline-none" placeholder="B+" onChange={(e) => setData({ ...data, bloodGroup: e.target.value })} defaultValue={data.bloodGroup}></input>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-slate-500">Martial Status</label>
                            <input type="text" className="border-2 border-slate-300 p-2 outline-none" placeholder="Married" onChange={(e) => setData({ ...data, maritalStatus: e.target.value })} defaultValue={data.maritalStatus}></input>
                        </div>
                    </div>

                    <div className="flex mt-3 gap-4">
                        <div className="flex flex-col">
                            <label className="text-slate-500">Height</label>
                            <input type="email" className="border-2 border-slate-300 p-2 outline-none" placeholder="175cm" onChange={(e) => setData({ ...data, height: e.target.value })} defaultValue={data.height}></input>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-slate-500">Weight</label>
                            <input type="text" className="border-2 border-slate-300 p-2 outline-none" placeholder="80 kg" onChange={(e) => setData({ ...data, weight: e.target.value })} defaultValue={data.weight}></input>
                        </div>
                    </div>
                    <label className="text-slate-500 mt-3">BMI</label>
                    <input type="text" className="border-2 border-slate-300 p-2 outline-none" placeholder="20 kg/m2" onChange={(e) => setData({ ...data, bmi: e.target.value })} defaultValue={data.bmi}></input>
                </div>
            </div>

            {/* form - 2  */}

            <div className="bg-white p-14 form-radi overflow-hidden form-section">
                <div className="flex flex-col">
                    <div className="flex justify-between mt-5">
                        <div className="flex flex-col">
                            <h3 className="text-slate-500">Alcohol Consumption</h3>
                            <select className="border border-slate-400 px-1 outline-none w-[6rem]" onChange={(e) => setData({ ...data, alcoholConsumption: e.target.value })} defaultValue={data.alcoholConsumption}>
                                <option defaultValue="false">False</option>
                                <option defaultValue="true">True</option>
                            </select>
                        </div>


                        <div className="flex flex-col">
                            <h3 className="text-slate-500">Cigrette Consumption</h3>
                            <select className="border border-slate-400 px-1 outline-none w-[6rem]" onChange={(e) => setData({ ...data, cigaretteConsumption: e.target.value })} defaultValue={data.cigaretteConsumption}>
                                <option defaultValue="false">False</option>
                                <option defaultValue="true">True</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-between mt-3">
                        <div className="flex flex-col">
                            <h3 className="text-slate-500">Food Preference</h3>
                            <select className="border border-slate-400 px-1 outline-none w-[6rem]" onChange={(e) => setData({ ...data, foodPreference: e.target.value })} defaultValue={data.foodPreference}>
                                <option defaultValue="false">Veg</option>
                                <option defaultValue="true">Non-Veg</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-slate-500">Tobacco Consumption</h3>
                            <select className="border border-slate-400 px-1 outline-none w-[6rem]" defaultValue={data.tobaccoConsumption}>
                                <option defaultValue="false">False</option>
                                <option defaultValue="true">True</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col mt-2">
                        <h3 className="text-slate-500">Select Symtoms(seperate with commas)</h3>
                        <input type="text" className="border-2 border-slate-300 p-2 w-full outline-none" placeholder="High fever, cold" onChange={(e) => setData({ ...data, selectSymptoms: e.target.value.split(",") })} defaultValue={data.selectSymptoms}></input>
                    </div>

                    <div className="flex flex-col mt-1">
                        <label className="text-slate-500">Family History</label>
                        <input type="email" className="border-2 border-slate-300 p-2 w-full outline-none" placeholder="fever, cold" onChange={(e) => setData({ ...data, familyHistory: e.target.value })} defaultValue={data.familyHistory}></input>
                    </div>

                    <div className="flex flex-col mt-1">
                        <label className="text-slate-500">Allergies (If Any)</label>
                        <input type="email" className="border-2 border-slate-300 p-2 w-full outline-none" placeholder="fever, cold" onChange={(e) => setData({ ...data, allergies: e.target.value })} defaultValue={data.allergies}></input>
                    </div>

                    {/* <div className="flex flex-col mt-1">
                        <label className="text-slate-500">Any other Symtoms</label>
                        <input type="email" className="border-2 border-slate-300 p-2 w-full outline-none" placeholder="Insomnia" onChange={(e) => setData({ ...data, : e.target.value })}></input>
                    </div> */}

                    <div className="flex flex-col mt-1">
                        <label className="text-slate-500">Travel Information (If Any)</label>
                        <input type="text" className="border-2 border-slate-300 p-2 w-full outline-none" placeholder="175 cm" defaultValue={data.travelInformation} onChange={(e) => setData({ ...data, travelInformation: e.target.value })}></input>
                    </div>


                </div>
            </div>
        </div >
    )
}
