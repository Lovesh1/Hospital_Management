import { useState} from "react"
import {useNavigate} from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export default function Toggle({drop}) {

    const [option, setOption] = useState(null);
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      
      setOption(e.target.value);
      navigate(`/${option.toLowerCase()}`)
    };

    return (
        <select className="outline-none bg-blue-950"  defaultValue={option}>
            {drop.map((item , idx)=> {
                return (
                    (<option key={idx} onChange={handleChange} >{item.name}</option>)
                )
            })}
        </select>
    )
}
