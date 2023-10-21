import { useState } from "react"
import { Doctor, Admit} from "./Patient3AssignButtons.jsx"

export default function Patient_detail() {

    const [inputType, setinput] = useState('text')
    
  return (
    <div className="flex flex-col pl-3">
            <div className="flex relative justify-center items-center">
                
                    <Doctor/>
                    <img src="../../patient-user.png"></img>
                    <Admit/>
            </div>
           
            <div className="flex gap-4 flex-wrap mb-3">
            {/* form - 1 */}
                <div className="bg-white p-14 form-radi overflow-hidden">
                    <div className="flex flex-col">
                        <div className="flex gap-4 mt-5">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Name</label>
                            <input type="text" className="border-2 border-slate-300 p-2 outline-none" placeholder="John Doe"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">Patient ID</label>
                            <input type="text" className="border-2 border-slate-300 p-2 outline-none" placeholder="245EYT657"></input>
                            </div>
                        </div>
                        
                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Email</label>
                            <input type="email" className="border-2 border-slate-300 p-2 outline-none" placeholder="JohnDoe@gmail.com"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">Mobile Number</label>
                            <input type="number" className="border-2 border-slate-300 p-2 outline-none" placeholder="8101231432"></input>
                            </div>
                        </div>

                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Gender</label>
                            <input type="text" className="border-2 border-slate-300 p-2 outline-none" placeholder="Male"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">DOB</label>
                            <input type={inputType} className="border-2 border-slate-300 p-2 w-[192px] outline-none"  onFocus={() => setinput('date')}
                                    onBlur={() => setinput('text')} placeholder="24/07/2000"></input>
                            </div>
                        </div>

                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Pincode</label>
                            <input type="email" className="border-2 border-slate-300 p-2 outline-none" placeholder="302046"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">City</label>
                            <input type="text" className="border-2 border-slate-300 p-2 outline-none" placeholder="Jaipur"></input>
                            </div>
                        </div>

                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Blood Group</label>
                            <input type="email" className="border-2 border-slate-300 p-2 outline-none" placeholder="B+"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">Martial Status</label>
                            <input type="text" className="border-2 border-slate-300 p-2 outline-none" placeholder="Married"></input>
                            </div>
                        </div>

                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Height</label>
                            <input type="email" className="border-2 border-slate-300 p-2 outline-none" placeholder="175 cm"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">Weight</label>
                            <input type="text" className="border-2 border-slate-300 p-2 outline-none" placeholder="80 kg"></input>
                            </div>
                        </div>
                             <label className="text-slate-500 mt-3">BMI</label>
                            <input type="text" className="border-2 border-slate-300 p-2 outline-none" placeholder="20 kg/m2"></input>
                    </div>
                </div>

            {/* form - 2  */}

            <div className="bg-white p-14 form-radi overflow-hidden">
                    <div className="flex flex-col">
                        <div className="flex justify-between mt-5">
                          <div className="flex flex-col">
                            <h3 className="text-slate-500">Alcohol Consumption</h3>
                            <select className="border border-slate-400 px-1 outline-none w-[60px]">
                                 <option value="yes">Yes</option>
                                 <option value="no">No</option>
                            </select>
                          </div>


                          <div className="flex flex-col">
                            <h3 className="text-slate-500">Cigrette Consumption</h3>
                            <select className="border border-slate-400 px-1 outline-none w-[60px]">
                                 <option value="yes">Yes</option>
                                 <option value="no">No</option>
                            </select>
                          </div>
                        </div>
                       
                        <div className="flex justify-between mt-3">
                                <div className="flex flex-col">
                                    <h3 className="text-slate-500">Food Preference</h3>
                                    <select className="border border-slate-400 px-1 outline-none w-[60px]">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                
                                    <div className="flex flex-col">
                                        <h3 className="text-slate-500">Tobacco Consumption</h3>
                                        <select className="border border-slate-400 px-1 outline-none w-[60px]">
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                        </div>
       
                            <div className="flex flex-col mt-2">
                            <h3 className="text-slate-500">Select Symtoms</h3>
                            <input type="text" className="border-2 border-slate-300 p-2 w-full outline-none" placeholder="High fever, cold"></input>
                            </div>
                        
                            <div className="flex flex-col mt-1">
                            <label className="text-slate-500">Family History</label>
                            <input type="email" className="border-2 border-slate-300 p-2 w-full outline-none" placeholder="fever, cold"></input>
                            </div>

                            <div className="flex flex-col mt-1">
                            <label className="text-slate-500">Allergies (If Any)</label>
                            <input type="email" className="border-2 border-slate-300 p-2 w-full outline-none" placeholder="fever, cold"></input>
                            </div>
                        
                            <div className="flex flex-col mt-1">
                            <label className="text-slate-500">Any other Symtoms</label>
                            <input type="email" className="border-2 border-slate-300 p-2 w-full outline-none" placeholder="Insomnia"></input>
                            </div>
 
                            <div className="flex flex-col mt-1">
                            <label className="text-slate-500">Travel Information (If Any)</label>
                            <input type="email" className="border-2 border-slate-300 p-2 w-full outline-none" placeholder="175 cm"></input>
                            </div>

                            
                                    <div className="flex flex-col mt-6">
                                        <h3 className="text-slate-500">Tobacco Consumption</h3>
                                        <select className="border border-slate-400 px-1 outline-none w-[60px] ">
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                    </div>
                </div>
        </div>
    </div>
  )
}
