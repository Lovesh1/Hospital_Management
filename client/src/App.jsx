import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './Pages/LoginPage.jsx'
import Layout from "./Pages/Layout.jsx"

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Layout />} />
        </Routes>
      </Router>
  )
}
