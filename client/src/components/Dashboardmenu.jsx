import { Link } from "react-router-dom";
import Toggle from "./Toggle.jsx";

const dashmenuitem = [
  { name: 'Specialities', imgsrc: '../../patients.png' },
  { name: 'Diagnoses', imgsrc: '../../patients.png' },
  { name: 'Requests', imgsrc: '../../patients.png' },
  { name: 'Treatments', imgsrc: '../../patients.png' },
  { name: 'Medicines', imgsrc: '../../patients.png' },
  { name: 'Manage Account', imgsrc: '../../patients.png' },
  { name: 'Log Out', imgsrc: '../../logout.png' },
];

const dropdown = [
  { name: 'Patient' },
  { name: 'Doctor' },
  { name: 'Nurse' },
];

export default function Dashboardmenu() {
  return (
    <div className="bg-blue-950 text-white min-h-screen w-auto max-w-xs">
      <Link to="/" className="flex p-4 text-xl">
        <img src="../../Logo2.png" alt="Logo" className="p-2 bg-slate-700 w-[250px]" />
      </Link>

      <div className="flex flex-col">
        <Link to="/" className="flex p-4 text-xl hover:bg-slate-500">
          <img src="../../dashboard.png" alt="Dashboard" className="w-9 p-1" />
          <h1 className="pt-2">Dashboard</h1>
        </Link>

        <Link to="/" className="flex p-4 text-xl hover:bg-slate-500">
          <img src='../../patients.png' alt="Patients" className="w-9 p-1" />
          <Toggle drop={dropdown} />
        </Link>

        {dashmenuitem.map((item, index) => (
          <Link
            to={item.name === "Log Out" ? "/" : item.name === "Users" ? '/patient' : null}
            key={index}
            className="flex p-4 text-xl hover:bg-slate-500"
            onClick={() => { localStorage.removeItem("token") }}
          >
            <img src={item.imgsrc} alt={item.name} className="w-9 p-1 bg-[#091733] rounded-md" />
            <h1 className="cursor-pointer">{item.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
