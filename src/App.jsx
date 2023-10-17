import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './Pages/LoginPage.jsx'
import Dashboard from './Pages/DashboardPage.jsx'

export default function App() {
  return (
    <Router>
        <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/" element={<Dashboard/>}/>
        </Routes>
    </Router>
  )
}
