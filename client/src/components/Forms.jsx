import { useState } from "react";

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
    });

    console.log(data);

    const handleChange = (e, field) => {
        setData({ ...data, [field]: e.target.value });
    };

    return (
        <div className="container">
            <div className="bg-white p-14 form-radi overflow-hidden form-section">
                <div className="flex flex-col">
                    <div className="flex gap-4 mt-5">
                        <div className="flex flex-col">
                            <label className="text-slate-500">Name</label>
                            <input
                                type="text"
                                className="border p-2 outline-none"
                                placeholder="John Doe"
                                value={data.name}
                                onChange={(e) => handleChange(e, "name")}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-slate-500">Patient ID</label>
                            <input
                                type="text"
                                className="border p-2 outline-none"
                                placeholder="245EYT657"
                            />
                        </div>
                    </div>

                    <div className="flex mt-3 gap-4">
                        <div className="flex flex-col">
                            <label className="text-slate-500">Email</label>
                            <input
                                type="email"
                                className="border p-2 outline-none"
                                placeholder="JohnDoe@gmail.com"
                                value={data.email}
                                onChange={(e) => handleChange(e, "email")}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-slate-500">Mobile Number</label>
                            <input
                                type="number"
                                className="border p-2 outline-none"
                                placeholder="8101231432"
                                value={data.mobileNumber}
                                onChange={(e) => handleChange(e, "mobileNumber")}
                            />
                        </div>
                    </div>

                    <div className="flex mt-3 gap-4">
                        <div className="flex flex-col">
                            <label className="text-slate-500">Gender</label>
                            <input
                                type="text"
                                className="border p-2 outline-none"
                                placeholder="Male"
                                value={data.gender}
                                onChange={(e) => handleChange(e, "gender")}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-slate-500">DOB</label>
                            <input
                                type="date"
                                className="border p-2 outline-none"
                                placeholder="24/07/2000"
                                value={data.dateOfBirth}
                                onChange={(e) => handleChange(e, "dateOfBirth")}
                            />
                        </div>
                    </div>

                    <div className="flex mt-3 gap-4">
                        <div className="flex flex-col">
                            <label className="text-slate-500">Pincode</label>
                            <input
                                type="number"
                                className="border p-2 outline-none"
                                placeholder="302046"
                                value={data.pinCode}
                                onChange={(e) => handleChange(e, "pinCode")}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-slate-500">City</label>
                            <input
                                type="text"
                                className="border p-2 outline-none"
                                placeholder="Jaipur"
                                value={data.city}
                                onChange={(e) => handleChange(e, "city")}
                            />
                        </div>
                    </div>

                    <div className="flex mt-3 gap-4">
                        <div className="flex flex-col">
                            <label className="text-slate-500">Blood Group</label>
                            <input
                                type="text"
                                className="border p-2 outline-none"
                                placeholder="B+"
                                value={data.bloodGroup}
                                onChange={(e) => handleChange(e, "bloodGroup")}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-slate-500">Martial Status</label>
                            <input
                                type="text"
                                className="border p-2 outline-none"
                                placeholder="Married"
                                value={data.maritalStatus}
                                onChange={(e) => handleChange(e, "maritalStatus")}
                            />
                        </div>
                    </div>

                    <div className="flex mt-3 gap-4">
                        <div className="flex flex-col">
                            <label className="text-slate-500">Height</label>
                            <input
                                type="text"
                                className="border p-2 outline-none"
                                placeholder="175cm"
                                value={data.height}
                                onChange={(e) => handleChange(e, "height")}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-slate-500">Weight</label>
                            <input
                                type="text"
                                className="border p-2 outline-none"
                                placeholder="80 kg"
                                value={data.weight}
                                onChange={(e) => handleChange(e, "weight")}
                            />
                        </div>
                    </div>

                    <label className="text-slate-500 mt-3">BMI</label>
                    <input
                        type="text"
                        className="border p-2 outline-none"
                        placeholder="20 kg/m2"
                        value={data.bmi}
                        onChange={(e) => handleChange(e, "bmi")}
                    />
                </div>
            </div>

            <div className="bg-white p-14 form-radi overflow-hidden form-section">
                <div className="flex flex-col">
                    <div className="flex justify-between mt-5">
                        <div className="flex flex-col">
                            <h3 className="text-slate-500">Alcohol Consumption</h3>
                            <select
                                className="border p-2 outline-none w-[6rem]"
                                value={data.alcoholConsumption}
                                onChange={(e) => handleChange(e, "alcoholConsumption")}
                            >
                                <option value="false">False</option>
                                <option value="true">True</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-slate-500">Cigarette Consumption</h3>
                            <select
                                className="border p-2 outline-none w-[6rem]"
                                value={data.cigaretteConsumption}
                                onChange={(e) => handleChange(e, "cigaretteConsumption")}
                            >
                                <option value="false">False</option>
                                <option value="true">True</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-between mt-3">
                        <div className="flex flex-col">
                            <h3 className="text-slate-500">Food Preference</h3>
                            <select
                                className="border p-2 outline-none w-[6rem]"
                                value={data.foodPreference}
                                onChange={(e) => handleChange(e, "foodPreference")}
                            >
                                <option value="Veg">Veg</option>
                                <option value="Non-Veg">Non-Veg</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-slate-500">Tobacco Consumption</h3>
                            <select
                                className="border p-2 outline-none w-[6rem]"
                                value={data.tobaccoConsumption}
                                onChange={(e) => handleChange(e, "tobaccoConsumption")}
                            >
                                <option value="false">False</option>
                                <option value="true">True</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col mt-2">
                        <h3 className="text-slate-500">Select Symptoms (separate with commas)</h3>
                        <input
                            type="text"
                            className="border p-2 w-full outline-none"
                            placeholder="High fever, cold"
                            value={data.selectSymptoms.join(',')}
                            onChange={(e) => handleChange(e, "selectSymptoms")}
                        />
                    </div>

                    <div className="flex flex-col mt-1">
                        <label className="text-slate-500">Family History</label>
                        <input
                            type="text"
                            className="border p-2 w-full outline-none"
                            placeholder="fever, cold"
                            value={data.familyHistory}
                            onChange={(e) => handleChange(e, "familyHistory")}
                        />
                    </div>

                    <div className="flex flex-col mt-1">
                        <label className="text-slate-500">Allergies (If Any)</label>
                        <input
                            type="text"
                            className="border p-2 w-full outline-none"
                            placeholder="fever, cold"
                            value={data.allergies}
                            onChange={(e) => handleChange(e, "allergies")}
                        />
                    </div>

                    <div className="flex flex-col mt-1">
                        <label className="text-slate-500">Travel Information (If Any)</label>
                        <input
                            type="text"
                            className="border p-2 w-full outline-none"
                            placeholder="175 cm"
                            value={data.travelInformation}
                            onChange={(e) => handleChange(e, "travelInformation")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
