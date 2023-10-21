import { Link } from "react-router-dom";



export default function Nav() {
  return (
    <div className="flex justify-between shadow-lg items-center p-5 bg-white">
      <h1 className="text-blue-950 font-semibold text-3xl">{localStorage.getItem("name")}</h1>
      <div className="flex gap-10 mr-28">
        <Link to='/login'> <img src="../../userlogin.png" className="w-12"></img></Link>
        <Link to='/'> <img src="../../bell.png" className="w-12"></img></Link>

      </div>
    </div>
  )
}
