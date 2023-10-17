import { Link } from "react-router-dom"

const carddata = [
  {name: 'Total Doctor', imgsrc: '../../doctor.png'},
  {name: 'Pending Request', imgsrc: '../../patient.png'},
  {name: 'Total Revenue', imgsrc: '../../rupee.png'},
  {name: 'Total Nurse', imgsrc: '../../doctor2.png'},
  {name: 'Active Request', imgsrc: '../../graph2.png'},
  {name: 'Today"s Revenue', imgsrc: '../../rupee2.png'},
  {name: 'Total Patient', imgsrc: '../../doctor3.png'},
  {name: 'Complete Request', imgsrc: '../../graph.png'},
  {name: 'Active Care Users', imgsrc: '../../activeusers.png'},
  {name: 'SOS', imgsrc: '../../sos.png'},
]

export default function Cards() {
  
  return (
    <div className="flex flex-wrap p-4 px-10 gap-5 ">
        {/* backend work here */}
    { carddata.map((item,index) => (
        <Link key={index} to={item.name === 'Active Care Users' ? "../Pages/Active_Users" : "/"} className="cursor-pointer">
            <div className={`flex flex-col shadow-lg p-3 w-80 h-36
                               ${item.name === 'Active Care Users' ? 'bg-slate-300' : 'bg-white'}
                               ${item.name === 'SOS' ? 'bg-red-50' : 'bg-white'}`}>
              <div  className="flex justify-between ">
                <h1 className="text-bold text-2xl">{item.name}</h1>
                <img src={item.imgsrc} className="w-16"></img>
                
              </div>
              {/* backend here */}
              <p className="text-slate-800">2</p>
          </div>
        </Link>
            
     )) }  
           
    </div>
  )
}
