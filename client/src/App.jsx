import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './Pages/LoginPage.jsx'
import Dashboard from './Pages/DashboardPage.jsx'
import Patients from "./Pages/Patients.jsx"
import { RecoilRoot } from "recoil"

export default function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patient" element={<Patients />} />
        </Routes>
      </Router>
    </RecoilRoot>
  )
}
