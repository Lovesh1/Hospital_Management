import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'
import { AuthGuard } from "../authentication/authGuard"

function LoginPage() {
    let navigate = useNavigate()
    let [login, setLogin] = useState({
        email: "",
        password: ""
    })

    async function sendData() {
        let response = await axios.post("http://localhost:4000/admin/login", login)
        if (response.data.token) {
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
        } else {
            alert(response.data.message)
        }
    }

    return (
        <div className=" max-w-lg p-3 mx-auto my-10">
            <Link to={"/"}><img src="../../Logo2.png" alt="LOGO" className=" w-40 mx-auto"></img></Link>


            <div className="shadow-lg p-8 bg-white mt-7">
                <h1 className="text-center font-semibold text-2xl">Welcome Back</h1>
                <p className="text-center text-slate-400">Enter your credential to access your Account</p>

                <div className=" flex flex-col gap-3 mt-5" >

                    {/* Email */}
                    <label htmlFor="email">E-mail Address</label>
                    <div className="flex bg-blue-50 rounded-md">
                        <img src="../../email-logo.png" className=" w-9 p-2"></img>
                        <input type="email"
                            id="email"
                            className=" p-1 bg-blue-100 outline-none"
                            onChange={(e) => { setLogin({ ...login, email: e.target.value }) }}
                        >
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
                            onChange={(e) => { setLogin({ ...login, password: e.target.value }) }}
                        >
                        </input>

                    </div>

                    <button className="p-2 mt-4 rounded-md bg-blue-950 text-white hover:opacity-90" onClick={sendData}>Submit</button>
                </div>

            </div>
        </div >
    )
}


export default LoginPage