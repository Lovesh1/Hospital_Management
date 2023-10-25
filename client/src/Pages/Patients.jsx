import { useState } from 'react'
import Patient_detail from './Patient_detail.jsx'
import CarePlan from './Careplandetail.jsx'
import Appointment from './Appointdetail.jsx'

export default function Patients(){

  const [activeTab, setActiveTab] = useState('basic'); 

  let activeContent;

  switch (activeTab) {
    case 'basic':
      activeContent = <Patient_detail />;
      break;
    case 'care':
      activeContent = <CarePlan />;
      break;
    case 'appointments':
      activeContent = <Appointment/>
      break;
    default:
      activeContent = <Patient_detail />;
  }

  return (
    <div className='flex flex-col'>
      <div className='flex mb-2'>
        <button
          className={`p-1 rounded-md border ${
            activeTab === 'basic' ? 'bg-slate-400 text-white border border-black' : 'bg-slate-50 border-b-slate-300'
          }`}
          onClick={() => setActiveTab('basic')}
        >
          Basic Detail
        </button>
        <button
          className={`p-1 rounded-md border ${
            activeTab === 'care' ? 'bg-slate-400 text-white border border-black' : 'bg-slate-50 border-b-slate-300'
          }`}
          onClick={() => setActiveTab('care')}
        >
          Care Plan
        </button>
        <button
          className={`p-1 rounded-md border ${
            activeTab === 'appointments' ? 'bg-slate-400 text-white border border-black' : 'bg-slate-50 border-b-slate-300'
          }`}
          onClick={() => setActiveTab('appointments')}
        >
          Appointments
        </button>
      </div>
      {activeContent}
    </div>
  )
}


