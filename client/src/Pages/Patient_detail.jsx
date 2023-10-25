import { useState } from "react";

export default function Patient_detail() {

    // functions for the above buttons

    const [showDoctor, setShowDoctor] = useState(false);
    const [showNurse, setShowNurse] = useState(false);
    const [showSelect, setShowSelect] = useState(false);

    const [selectedOption, setSelectedOption] = useState("Admit");

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const showDoctorForm = () => {
        setShowDoctor(true);
    };



    const showNurseForm = () => {
        setShowNurse(true);
    };

    const showSelectForm = () => {
        setShowSelect(true);
    };
    // END OF FUNCTIONS FOR BUTTONS

    // FUNCTIONS FOR FORM

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
    console.log(data)

    const handleChange = (e, field) => {
        const value = e.target.value;

        setData((prevData) => ({ ...prevData, [field]: value }));

        if (field === 'height' || field === 'weight') {
            if (!isNaN(value) && value !== "") {
                calculateBMI(value, field);
            } else {

                setData((prevData) => ({ ...prevData, bmi: "" }));
            }
        }
    };

    const calculateBMI = () => {
        const heightInMeters = data.height / 100;
        const weight = parseFloat(data.weight);
        const bmi = weight / (heightInMeters ** 2);
        setData((prevData) => ({ ...prevData, bmi: bmi.toFixed(2) }));

    };

    // END OF FORM FUNCTIONS

    return (
        <div className="flex flex-col">
            {/* Above buttons doctor nurse */}

            <div className="flex gap-4 px-10">
                <div className="w-1/3 flex justify-between gap-4 items-center">
                    <div>
                        {showDoctor ? (

                            <select>
                                <option>How may doctor</option>
                                <option>which one </option>
                                <option>i dont know</option>
                            </select>

                        ) : (
                            <button
                                className="px-3 bg-blue-950 text-white rounded-md"
                                onClick={showDoctorForm}
                            >
                                Doctor
                            </button>
                        )}
                    </div>

                    <div>
                        {showNurse ? (

                            <select>
                                <option>How may nurse</option>
                                <option>which one </option>
                                <option>i dont know</option>
                            </select>

                        ) : (
                            <button
                                className="px-3 bg-blue-950 text-white rounded-md"
                                onClick={showNurseForm}
                            >
                                Nurse
                            </button>
                        )}
                    </div>

                    <div>
                        {showSelect ? (

                            <select className="px-3 bg-white border border-blue-950 outline-none rounded-md">
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>

                        ) : (
                            <button
                                className="px-3 bg-blue-950 text-white rounded-md"
                                onClick={showSelectForm}
                            >
                                Select
                            </button>
                        )}
                    </div>
                </div>
                <div className="image-container w-1/3">
                    <img
                        src="../../patient-user.png"
                        alt="Patient"
                        className="mx-auto"
                    />
                </div>

                <div className="flex justify-between items-center gap-4 w-1/3">
                    <select
                        className={`${selectedOption === "Admit" ? "bg-blue-950" : "bg-slate-400"
                            } px-2 rounded-md text-white`}
                        onChange={handleSelectChange}
                    >
                        <option className="bg-white text-black">Admit</option>
                        <option className="bg-white text-black">Admitted</option>
                    </select>

                    <select className="border-2 border-blue-950">
                        <option>PreOperative</option>
                        <option>Surgery</option>
                        <option>Severe</option>
                    </select>
                </div>
            </div>
            {/* END of above buttons  */}

            {/* Below Form for patient Details */}

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
                                    placeholder={"TX"}
                                    defaultValue={localStorage.getItem("name").split(" ").map(x => x[0]).join("")}
                                    disabled={true}
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

                                <select className="border p-2 outline-none min-w-[210px] text-slate-400"
                                    value={data.gender}
                                    onChange={(e) => handleChange(e, "gender")} >
                                    <option className="text-slate-600">Male</option>
                                    <option className="text-slate-600">Female</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-slate-500">DOB</label>
                                <input
                                    type="date"
                                    className="border p-2 outline-none text-slate-400"
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
                                <select className="border p-2 outline-none min-w-[210px] text-slate-400"
                                    value={data.bloodGroup}
                                    onChange={(e) => handleChange(e, "bloodGroup")} >

                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>

                            </div>

                            <div className="flex flex-col">
                                <label className="text-slate-500">Martial Status</label>

                                <select className="border p-2 outline-none min-w-[210px] text-slate-400"
                                    value={data.maritalStatus}
                                    onChange={(e) => handleChange(e, "maritalStatus")}>
                                    <option>Married</option>
                                    <option>Single</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col">
                                <label className="text-slate-500">Height</label>
                                <input
                                    type="number"
                                    className="border p-2 outline-none text-slate-400"
                                    placeholder="175cm"
                                    value={data.height}
                                    onChange={(e) => handleChange(e, "height")}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-slate-500">Weight</label>
                                <input
                                    type="number"
                                    className="border p-2 outline-none text-slate-400"
                                    placeholder="80 kg"
                                    value={data.weight}
                                    onChange={(e) => handleChange(e, "weight")}
                                />
                            </div>
                        </div>

                        <label className="text-slate-500 mt-3">BMI</label>
                        <div
                            className="border p-2 outline-none text-slate-400"
                            value={data.bmi}
                            onChange={(e) => handleChange(e, "bmi")}
                        >{data.bmi ? data.bmi : "20 kg/m2"}</div>
                    </div>
                </div>

                <div className="bg-white p-14 form-radi overflow-hidden form-section">
                    <div className="flex flex-col">
                        <div className="flex justify-between mt-4">
                            <div className="flex flex-col">
                                <h3 className="text-slate-500">Alcohol Consumption</h3>
                                <select
                                    className="border p-2 outline-none w-[6rem] text-slate-400"
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
                                    className="border p-2 outline-none w-[6rem] text-slate-400"
                                    value={data.cigaretteConsumption}
                                    onChange={(e) => handleChange(e, "cigaretteConsumption")}
                                >
                                    <option value="false">False</option>
                                    <option value="true">True</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-between mt-2">
                            <div className="flex flex-col">
                                <h3 className="text-slate-500">Food Preference</h3>
                                <select
                                    className="border p-2 outline-none w-[6rem] text-slate-400"
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
                                    className="border p-2 outline-none w-[6rem] text-slate-400"
                                    value={data.tobaccoConsumption}
                                    onChange={(e) => handleChange(e, "tobaccoConsumption")}
                                >
                                    <option value="false">False</option>
                                    <option value="true">True</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col mt-1">
                            <h3 className="text-slate-500">Select Symptoms (separate with commas)</h3>
                            <input
                                type="text"
                                className="border p-2 w-full outline-none"
                                placeholder="High fever,  Cold"
                                defaultValue={""}
                                onChange={(e) => handleChange(e, "selectSymptoms")}
                            />
                        </div>

                        <div className="flex flex-col mt-1">
                            <label className="text-slate-500">Family History</label>
                            <input
                                type="text"
                                className="border p-2 w-full outline-none"
                                placeholder="High Fever, Cold"
                                value={data.familyHistory}
                                onChange={(e) => handleChange(e, "familyHistory")}
                            />
                        </div>

                        <div className="flex flex-col mt-1">
                            <label className="text-slate-500">Any Other Symptoms</label>
                            <select
                                className="border p-2 w-full outline-none text-slate-400"
                                value={data.otherSymptoms}
                                onChange={(e) => handleChange(e, "otherSymptoms")}
                            >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>

                        <div className="flex flex-col mt-1">
                            <label className="text-slate-500">Allergies (If Any)</label>
                            <select
                                className="border p-2 w-full outline-none text-slate-400"
                                value={data.allergies}
                                onChange={(e) => handleChange(e, "allergies")}
                            >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
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

                        <div className="flex flex-col mt-1">
                            <label className="text-slate-500">Ongoing Medications</label>
                            <select
                                className="border p-2 w-full outline-none text-slate-400"
                                value={data.ongoingMedications}
                                onChange={(e) => handleChange(e, "ongoingMedications")}
                            >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
            {/* End of form */}
        </div>
    )
}
