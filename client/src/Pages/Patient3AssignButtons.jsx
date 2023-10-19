import { useState } from "react"
import Dropmenu from '../components/Dropdown.jsx'

export function Doctor() {
    const [doc, setdoc] = useState(false)
    const [taker, settaker] = useState(false)
    const [tag, settag] = useState(false)

    const doclick = () => {
        setdoc(!doc)
    }
    const careclick = () => {
        settaker(!taker)
    }
    const tagclick = () => {
        settag(!tag)
    }

  return (
    <div className="flex gap-4 absolute left-10 flex-wrap">
        {doc ? (
            <div className="w-32">
                <label className="text-slate-400 text-[12px]">Assign Doctor</label>
                <input type="text" className="outline-none px-2" placeholder="Dr Vikas"></input>
            </div>
        ):(
            <div>
            <button className="px-3 bg-blue-950 text-white rounded-md" onClick={doclick}>Assign Doctor</button>
            </div>
        )}
        
        {taker ? (
            <div className="w-32">
                <label className="text-slate-400 text-[12px]">Assigned caretaker</label>
                <input type="text" className="outline-none px-2" placeholder="Mrs Kavita"></input>
            </div>
        ):(
            <div >
            <button className="px-3 bg-blue-950 text-white rounded-md" onClick={careclick}>Assign Doctor</button>
            </div>
        )}
        
    
    {tag ? (
            <button className="px-5 bg-pink-300 text-blue-950 font-semibold rounded-md my-5">Normal</button>
        ):(
            <div>
            <button className="px-3 border-2 border-blue-950 bg-white rounded-md" onClick={tagclick}>Add Tags</button>
            </div>
        )}

    </div>
  )
}

export function Admit(){
        const [click, setclick] = useState(false);

        const handleclick = () => {
            setclick(!click)
        }
    return(

        <div className="flex gap-4 absolute right-10">
          <div>
             <button className="px-3 bg-blue-950 text-white">Admit</button>
          </div>
            <div className="relative">
            <button className="px-3  bg-white border-2 border-blue-950" onClick={handleclick}>PreOperative
                <span className=" text-blue-950">
                     ▼
                 </span>
            </button>
                {click && (
                    <div className="absolute border border-slate-500 bg-blue-200 w-[136px] justify-center">
                        <Dropmenu/>
                    </div>
                )}
            </div>
    </div>
    )
}

  
