import { useState } from "react";

export default function PatientHeader() {
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

  return (
    <div className="flex gap-4 px-10">
        <div className="w-1/3 flex justify-between gap-4 items-center">
      <div>
        {showDoctor ? (
          <div className="flex flex-col">
            <label className="text-slate-400 text-[12px]">Assigned Doctor</label>
            <input
              type="text"
              className="outline-none px-2"
              placeholder="Dr Vikas"
            />
          </div>
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
          <div className="flex flex-col">
            <label className="text-slate-400 text-[12px]">Assigned Nurse</label>
            <input
              type="text"
              className="outline-none px-2"
              placeholder="Mrs Kavita"
            />
          </div>
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
          <div>
            <label className="text-slate-400 text-[12px]">Select Option</label>
            <select className="px-3 bg-white border border-blue-950 outline-none rounded-md">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
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
          className={`${
            selectedOption === "Admit" ? "bg-blue-950" : "bg-slate-400"
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
  );
}
