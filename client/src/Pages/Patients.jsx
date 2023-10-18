import { AuthGuard } from '../authentication/authGuard.jsx'
import Layout from './Layout.jsx'
import { Link} from "react-router-dom"
import Patient_detail from './Patient_detail.jsx'

function Patients(){
  return (
   <Layout>
        <div className='flex flex-col'>
          <div className='flex mb-2'>
            <button className='p-1 rounded-md border border-b-slate-300 bg-slate-50'>Basic Detail</button>
            <button className='p-1 rounded-md border border-b-slate-300 bg-slate-200'>Care Plan</button>
            <button className='p-1 rounded-md border border-b-slate-300 bg-slate-50'>Appointments</button>
          </div>
            <Patient_detail/>
        </div>
       
   </Layout>
  )
}

export default AuthGuard(Patients)
