import { useState } from "react"

export default function Patient_detail() {
    const [option, setoption] = useState(false);

    const toggle = () => {
        setoption(!option)
    }
  return (
    <div className="flex flex-col pl-3">
            <div className="flex gap-4">
                <button className="px-2 py-0 bg-blue-950 text-white rounded">Assign Doctor</button>
                <button className="p-1 bg-blue-950 text-white rounded">Assign CareTaker</button>
                <button className="p-1 border border-b-blue-950 bg-white">Assign Tags</button>
                <button className="p-3 bg-blue-950 text-white rounded">Admit</button>
                <button className="p-2 border border-b-950 bg-white" onClick={toggle}>PreOperative</button>
            </div>

            <div className="flex justify-between mt-4 form mb-4 flex-wrap px-2">
            {/* form - 1 */}
                <div className="bg-white form-radi  p-10">
                    <div className="flex flex-col">
                        <div className="flex gap-4 mt-5">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Name</label>
                            <input type="text" className="border-2 border-slate-300 p-2 " placeholder="John Doe"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">Patient ID</label>
                            <input type="text" className="border-2 border-slate-300 p-2 " placeholder="245EYT657"></input>
                            </div>
                        </div>
                        
                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Email</label>
                            <input type="email" className="border-2 border-slate-300 p-2 " placeholder="JohnDoe@gmail.com"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">Mobile Number</label>
                            <input type="number" className="border-2 border-slate-300 p-2 " placeholder="8101231432"></input>
                            </div>
                        </div>

                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Gender</label>
                            <input type="text" className="border-2 border-slate-300 p-2 " placeholder="Male"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">DOB</label>
                            <input type="date" className="border-2 border-slate-300 p-2 " placeholder="24/07/2000"></input>
                            </div>
                        </div>

                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Pincode</label>
                            <input type="email" className="border-2 border-slate-300 p-2 " placeholder="302046"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">City</label>
                            <input type="number" className="border-2 border-slate-300 p-2 " placeholder="Jaipur"></input>
                            </div>
                        </div>

                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Blood Group</label>
                            <input type="email" className="border-2 border-slate-300 p-2 " placeholder="B+"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">Martial Status</label>
                            <input type="number" className="border-2 border-slate-300 p-2 " placeholder="Married"></input>
                            </div>
                        </div>

                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Height</label>
                            <input type="email" className="border-2 border-slate-300 p-2 " placeholder="175 cm"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">Weight</label>
                            <input type="number" className="border-2 border-slate-300 p-2 " placeholder="80 kg"></input>
                            </div>
                        </div>
                             <label className="text-slate-500 mt-3">Weight</label>
                            <input type="number" className="border-2 border-slate-300 p-2 min-w-full" placeholder="80 kg"></input>
                    </div>
                </div>

            {/* form - 2  */}

            <div className="bg-white form-radi  p-10">
                    <div className="flex flex-col">
                        <div className="flex gap-4 mt-5">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Name</label>
                            <input type="text" className="border-2 border-slate-300 p-2 " placeholder="John Doe"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">Patient ID</label>
                            <input type="text" className="border-2 border-slate-300 p-2 " placeholder="245EYT657"></input>
                            </div>
                        </div>
                        
                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Email</label>
                            <input type="email" className="border-2 border-slate-300 p-2 " placeholder="JohnDoe@gmail.com"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">Mobile Number</label>
                            <input type="number" className="border-2 border-slate-300 p-2 " placeholder="8101231432"></input>
                            </div>
                        </div>

                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Gender</label>
                            <input type="text" className="border-2 border-slate-300 p-2 " placeholder="Male"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">DOB</label>
                            <input type="date" className="border-2 border-slate-300 p-2 " placeholder="24/07/2000"></input>
                            </div>
                        </div>

                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Pincode</label>
                            <input type="email" className="border-2 border-slate-300 p-2 " placeholder="302046"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">City</label>
                            <input type="number" className="border-2 border-slate-300 p-2 " placeholder="Jaipur"></input>
                            </div>
                        </div>

                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Blood Group</label>
                            <input type="email" className="border-2 border-slate-300 p-2 " placeholder="B+"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">Martial Status</label>
                            <input type="number" className="border-2 border-slate-300 p-2 " placeholder="Married"></input>
                            </div>
                        </div>

                        <div className="flex mt-3 gap-4">
                            <div className="flex flex-col">
                            <label className="text-slate-500">Height</label>
                            <input type="email" className="border-2 border-slate-300 p-2 " placeholder="175 cm"></input>
                            </div>

                            <div className="flex flex-col">
                            <label className="text-slate-500">Weight</label>
                            <input type="number" className="border-2 border-slate-300 p-2 " placeholder="80 kg"></input>
                            </div>
                        </div>
                             <label className="text-slate-500 mt-3">Weight</label>
                            <input type="number" className="border-2 border-slate-300 p-2 min-w-full" placeholder="80 kg"></input>
                    </div>
                </div>
        </div>
    </div>
  )
}
