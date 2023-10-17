
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
    { carddata.map((item,index) => (<div key={index} className="flex flex-col shadow-lg bg-white p-3 w-80 h-28">
              <div  className="flex justify-between ">
                <h1 className="text-bold text-2xl">{item.name}</h1>
                <img src={item.imgsrc} className="w-16"></img>
                
              </div>
              {/* backend here */}
              <p>2</p>
          </div>
            
            )) }  
           
    </div>
  )
}
