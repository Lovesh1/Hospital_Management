import Dashmenu from '../components/Dashboardmenu.jsx'
import Navbar from '../components/Nav.jsx'
import Card from '../components/Cards.jsx'

export default function DashboardPage() {
  return (
    <div className='flex'>
        <Dashmenu/>
        <div className='flex flex-col w-full'>
            <Navbar/>
            <div className='pt-3 px-5 flex gap-3'>
                {/* some backend work in this component i guess... */}
                    <Card/>
            </div>
        </div>
    </div>
  )
}
