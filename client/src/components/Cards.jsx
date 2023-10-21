import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const carddata = [
  { name: 'Total Doctor', imgsrc: '../../doctor.png', count: 0 },
  { name: 'Pending Request', imgsrc: '../../patient.png', count: 0 },
  { name: 'Total Revenue', imgsrc: '../../rupee.png', count: 0 },
  { name: 'Total Nurse', imgsrc: '../../doctor2.png', count: 0 },
  { name: 'Active Request', imgsrc: '../../graph2.png', count: 0 },
  { name: "Today's Revenue", imgsrc: '../../rupee2.png', count: 0 },
  { name: 'Total Patient', imgsrc: '../../doctor3.png', count: 0 },
  { name: 'Complete Request', imgsrc: '../../graph.png', count: 0 },
  { name: 'Active Care Users', imgsrc: '../../activeusers.png', count: 0 },
  { name: 'SOS', imgsrc: '../../sos.png', count: 0 }
]

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', 
  gap: '1rem',
  padding: '1rem',
};

export default function Cards() {

  let [countData, setCountData] = useState({})
  console.log(countData)
  useEffect(() => {
    const init = async () => {
      let response = await axios.get("http://localhost:4000/hospital/dashboard", {
        headers: {
          token: localStorage.getItem("token")
        }
      })
      setCountData(response.data)
    }
    init()
  },[])
  return (

    <div className="grid" style={containerStyle}>
        {/* backend work here */}
    { carddata.map((item,index) => (
        <Link key={index} to={item.name === 'Active Care Users' ? "../Pages/Active_Users" : "/"} className="cursor-pointer">
          <div className={`flex flex-col shadow-lg p-3 w-80 h-36 ${item.name === 'Active Care Users' ? 'bg-slate-300' : 'bg-white'} ${item.name === 'SOS' ? 'bg-red-50' : 'bg-white'}`}>
            <div className="flex justify-between ">
              <h1 className="text-bold text-2xl">{item.name}</h1>
              <img src={item.imgsrc} className="w-16"></img>

            </div>
            {/* backend here */}
            <p className="text-slate-800">{countData[item.name] || 0}</p>
          </div>
        </Link>

      ))}

    </div>
  )
}
