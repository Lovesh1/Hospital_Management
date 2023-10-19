import Dashmenu from '../components/Dashboardmenu.jsx'
import Navbar from '../components/Nav.jsx'

export default function Layout(props) {
  return (
    <div className='flex'>
        <Dashmenu/>
        <div className='flex flex-col w-full'>
            <Navbar/>
            <div>
                    {props.children}
            </div>
        </div>
    </div>
  )
}
