import { Doctor, Admit} from "./Patient3AssignButtons.jsx"
import FormDetails from '../components/Forms.jsx'

export default function Patient_detail() {

  return (
    <div className="flex flex-col pl-3">
            <div className="flex relative justify-center items-center">
                
                    <Doctor/>
                    <img src="../../patient-user.png"></img>
                    <Admit/>
            </div>
           
            <div className="flex gap-4 flex-wrap mb-3">
            <FormDetails/>
        </div>
    </div>
  )
}
