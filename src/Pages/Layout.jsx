import Dashmenu from '../components/Dashboardmenu.jsx'
import Navbar from '../components/Nav.jsx'
import PropTypes from 'prop-types';

export default function Layout({children}) {
  return (
    <div className='flex'>
        <Dashmenu/>
        <div className='flex flex-col w-full'>
            <Navbar/>
            <div className='pt-3 px-5 flex gap-3'>
                    {children}
            </div>
        </div>
    </div>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
