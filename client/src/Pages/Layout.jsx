import { useState } from 'react';
import Navbar from '../components/Nav.jsx'
import Dash from './DashboardPage.jsx'
import Patients from './Patients.jsx'
import Doctor from './Doctor.jsx'
import Nurse from './Nurse.jsx'
import { useNavigate } from 'react-router-dom';
import { AuthGuard } from '../authentication/authGuard.jsx';

// eslint-disable-next-line react/prop-types
function Layout() {
  let navigate = useNavigate()

  const [option, setoption] = useState('dashboard');

  const HandleLink = (prop) => {
    setoption(prop)
  }

  const renderComponent = () => {
    switch (option) {
      case 'dashboard':
        return <Dash />

      case 'Patients':
        return <Patients />

      case 'Doctor':
        return <Doctor />

      case 'Nurse':
        return <Nurse />

      default:
        return <Dash />
    }
  };

  return (
    <div className='flex'>
      <div className="bg-blue-950 text-white min-h-screen w-auto max-w-xs">
        <div className="flex p-4 text-xl">
          <img src="../../Logo2.png" alt="Logo" className="p-2 bg-slate-700 w-[250px]" />
        </div>

        <div className="flex flex-col">
          {/* Dashborad-Menu-items */}

          <div className="flex p-4 text-xl hover:bg-slate-500" onClick={() => HandleLink('dashboard')}>
            <img src="../../dashboard.png" alt="Dashboard" className="w-9 p-1" />
            <h1 className="pt-2">Dashboard</h1>
          </div>

          <div className="flex p-4 text-xl hover:bg-slate-500 bg-blue-950">
            <img src='../../patients.png' alt="Patients" className="w-9 p-1" />
            <select className="outline-none bg-blue-950 hover:bg-slate-500" value={option}
              onChange={(e) => HandleLink(e.target.value)}>

              <option value={'Patients'} >Patient</option>
              <option value={'Doctor'} >Doctor</option>
              <option value={'Nurse'} >Nurse</option>

            </select>
          </div>

          <div className="flex p-4 text-xl hover:bg-slate-500">
            <img src='../../patients.png' alt="Specialities" className="w-9 p-1 bg-[#091733] rounded-md" />
            <h1 className="cursor-pointer">Specialities</h1>
          </div>

          <div className="flex p-4 text-xl hover:bg-slate-500">
            <img src='../../patients.png' alt="Specialities" className="w-9 p-1 bg-[#091733] rounded-md" />
            <h1 className="cursor-pointer">Diagnoses</h1>
          </div>

          <div className="flex p-4 text-xl hover:bg-slate-500">
            <img src='../../patients.png' alt="Specialities" className="w-9 p-1 bg-[#091733] rounded-md" />
            <h1 className="cursor-pointer">Requests</h1>
          </div>

          <div className="flex p-4 text-xl hover:bg-slate-500">
            <img src='../../patients.png' alt="Specialities" className="w-9 p-1 bg-[#091733] rounded-md" />
            <h1 className="cursor-pointer">Treatments</h1>
          </div>

          <div className="flex p-4 text-xl hover:bg-slate-500">
            <img src='../../patients.png' alt="Specialities" className="w-9 p-1 bg-[#091733] rounded-md" />
            <h1 className="cursor-pointer">Medicines</h1>
          </div>

          <div className="flex p-4 text-xl hover:bg-slate-500">
            <img src='../../patients.png' alt="Specialities" className="w-9 p-1 bg-[#091733] rounded-md" />
            <h1 className="cursor-pointer">Manage Account</h1>
          </div>

          <div
            className="flex p-4 text-xl hover:bg-slate-500"
            onClick={() => {

              localStorage.removeItem("token")
              navigate("/")
            }}
          >
            <img src='../../logout.png' alt="Log Out" className="w-9 p-1 bg-[#091733] rounded-md" />
            <h1 className="cursor-pointer">Log Out</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <Navbar />
        <div>
          {/* content here */}
          {renderComponent()}
        </div>
      </div>
    </div>
  )
}


export default AuthGuard(Layout)