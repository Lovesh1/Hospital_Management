import { Link } from "react-router-dom"

const dashmenuitem = [
    {name: 'Users', imgsrc: '../../patients.png'},
    {name: 'Specialities', imgsrc: '../../patients.png'},
    {name: 'Diagnoses', imgsrc: '../../patients.png'},
    {name: 'Requests', imgsrc: '../../patients.png'},
    {name: 'Treatments', imgsrc: '../../patients.png'},
    {name: 'Medicines', imgsrc: '../../patients.png'},
    {name: 'Manage Account', imgsrc: '../../patients.png'},
    {name: 'Log Out', imgsrc: '../../logout.png'},
]

export default function Dashboardmenu() {
  return (
    <div className=" bg-blue-950 text-white w-64 items-center min-h-screen">
           <Link> <img src="../../Logo2.png" className=" bg-slate-700 p-2"></img></Link>

        <ul className="flex flex-col mt-5">
            <Link to="/" className="flex gap-2 p-2 text-xl mb-2 cursor-pointer focus:bg-slate-500">
                <img src="../../dashboard.png" className="w-9 p-1"></img>
                <h1 className="pt-2">Dashboard</h1>
            </Link>
        {dashmenuitem.map((item, index) => (
          <Link to="/" key={index} className="flex gap-2 focus:bg-slate-500 text-xl p-2">
            <img src={item.imgsrc} alt={item.name}  className="w-9 p-1 bg-[#091733] rounded-md"/>
            <h1 className=" cursor-pointer">{item.name}</h1>
          </Link>
        ))}
        </ul>
    </div>
  )
}
