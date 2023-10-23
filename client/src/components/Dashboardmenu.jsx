import { Link } from "react-router-dom";
import Toggle from "./Toggle.jsx";
import Card from '../components/Cards.jsx'
import Patients from "../Pages/Patients.jsx";



// eslint-disable-next-line react/prop-types
const Dashboardmenu = ({ onRouteChange }) => {

  // const [route, setroute] = useState(null);

  const dropdown = [
    { name: 'Patient' },
    { name: 'Doctor' },
    { name: 'Nurse' },
  ];

  // const Handleclick = (component) => {
  //     setroute(component)
  // }

  return (
    <div className="bg-blue-950 text-white min-h-screen w-auto max-w-xs">
      <Link to="/dashboard" className="flex p-4 text-xl">
        <img src="../../Logo2.png" alt="Logo" className="p-2 bg-slate-700 w-[250px]" />
      </Link>

      <div className="flex flex-col">
        <Link className="flex p-4 text-xl hover:bg-slate-500" onClick={() => onRouteChange(<Card/>)}>
          <img src="../../dashboard.png" alt="Dashboard" className="w-9 p-1" />
          <h1 className="pt-2">Dashboard</h1>
        </Link>

        <Link className="flex p-4 text-xl hover:bg-slate-500" onClick={() => onRouteChange(<Patients/>)}>
          <img src='../../patients.png' alt="Patients" className="w-9 p-1" />
          <Toggle drop={dropdown} />
        </Link>

        <Link to="/" className="flex p-4 text-xl hover:bg-slate-500">
          <img src='../../patients.png' alt="Specialities" className="w-9 p-1 bg-[#091733] rounded-md" />
          <h1 className="cursor-pointer">Specialities</h1>
        </Link>

        <Link to="/" className="flex p-4 text-xl hover:bg-slate-500">
          <img src='../../patients.png' alt="Specialities" className="w-9 p-1 bg-[#091733] rounded-md" />
          <h1 className="cursor-pointer">Diagnoses</h1>
        </Link>
        
        <Link to="/" className="flex p-4 text-xl hover:bg-slate-500">
          <img src='../../patients.png' alt="Specialities" className="w-9 p-1 bg-[#091733] rounded-md" />
          <h1 className="cursor-pointer">Requests</h1>
        </Link>
        
        <Link to="/" className="flex p-4 text-xl hover:bg-slate-500">
          <img src='../../patients.png' alt="Specialities" className="w-9 p-1 bg-[#091733] rounded-md" />
          <h1 className="cursor-pointer">Treatments</h1>
        </Link>

        <Link to="/" className="flex p-4 text-xl hover:bg-slate-500">
          <img src='../../patients.png' alt="Specialities" className="w-9 p-1 bg-[#091733] rounded-md" />
          <h1 className="cursor-pointer">Medicines</h1>
        </Link>

        <Link to="/" className="flex p-4 text-xl hover:bg-slate-500">
          <img src='../../patients.png' alt="Specialities" className="w-9 p-1 bg-[#091733] rounded-md" />
          <h1 className="cursor-pointer">Manage Account</h1>
        </Link>
        
        <Link
          to="/"
          className="flex p-4 text-xl hover:bg-slate-500"
          onClick={() => { localStorage.removeItem("token") }}
        >
          <img src='../../logout.png' alt="Log Out" className="w-9 p-1 bg-[#091733] rounded-md" />
          <h1 className="cursor-pointer">Log Out</h1>
        </Link>
      </div>
    </div>
  );
};

export default Dashboardmenu;