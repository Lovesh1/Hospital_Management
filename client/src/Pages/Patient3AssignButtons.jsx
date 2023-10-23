import { useState } from "react"

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
        <div className="flex gap-4 absolute left-10 flex-wrap h-[80px]">
            {doc ? (
                <div className="w-32">
                    <label className="text-slate-400 text-[12px]">Assign Doctor</label>
                    <input type="text" className="outline-none px-2" placeholder="Dr Vikas"></input>
                </div>
            ) : (
                <div>
                    <button className="px-3 bg-blue-950 text-white rounded-md" onClick={doclick}>Assign Doctor</button>
                </div>
            )}

            {taker ? (
                <div className="w-32">
                    <label className="text-slate-400 text-[12px]">Assigned caretaker</label>
                    <input type="text" className="outline-none px-2" placeholder="Mrs Kavita"></input>
                </div>
            ) : (
                <div >
                    <button className="px-3 bg-blue-950 text-white rounded-md" onClick={careclick}>Assign Doctor</button>
                </div>
            )}

            {tag ? (<div className="mt-5">
                <button className="px-5 bg-pink-300 text-blue-950 font-semibold rounded-md">Normal</button>
            </div>
            ) : (
                <div>
                    <button className="px-3 border-2 border-blue-950 bg-white rounded-md" onClick={tagclick}>Add Tags</button>
                </div>
            )}

        </div>
    )
}

export function Admit() {
    return (

        <div className="flex gap-4 absolute right-10">
            <div>
                <button className="px-3 outline-none bg-blue-950 text-white">Admit</button>
            </div>
            <div>
                <select className="px-3  bg-white border border-blue-950 outline-none rounded-md">
                    <option >PreOperative</option>
                    <option >Surgery</option>
                    <option >Severe</option>
                </select>

            </div>
        </div>
    )
}


