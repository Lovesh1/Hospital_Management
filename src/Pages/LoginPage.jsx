import { Link } from "react-router-dom"

export default function LoginPage() {

    const Handlesubmit = () => {
        // your logic on form submit
    }

    const Handlechange = () =>{
        // email and password change
    }

  return (
    <div className=" max-w-lg p-3 mx-auto my-10">
        <Link to={"/"}><img src="../../Logo2.png" alt="LOGO" className=" w-40 mx-auto"></img></Link>

        
    <div className="shadow-lg p-8 bg-white mt-7">
        <h1 className="text-center font-semibold text-2xl">Welcome Back</h1>
        <p className="text-center text-slate-400">Enter your credential to access your Account</p>

        <form className=" flex flex-col gap-3 mt-5" onSubmit={Handlesubmit}>

        {/* Email */}
            <label htmlFor="email">E-mail Address</label>
            <div className="flex bg-blue-50 rounded-md">
            <img src="../../email-logo.png" className=" w-9 p-2"></img>
            <input type="email" 
            id="email" 
            className=" p-1 bg-blue-100 outline-none" 
            onChange={Handlechange}>
            </input>

            </div>

        {/* password */}
            <label htmlFor="pass">Password</label>
            <div className="flex bg-blue-50 rounded-md">
            <img src="../../pass-logo.png" className=" w-9 p-2"></img>
            <input 
            type="password" 
            id="pass"
            className=" p-1 bg-blue-100 outline-none" 
            onChange={Handlechange}>
            </input>
            
            </div>

            <button className="p-2 mt-4 rounded-md bg-blue-950 text-white hover:opacity-90">Submit</button>
        </form>

     </div>
</div>
  )
}
