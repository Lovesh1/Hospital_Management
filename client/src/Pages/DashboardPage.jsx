import Layout from './Layout.jsx'
import Card from '../components/Cards.jsx'
import { AuthGuard } from '../authentication/authGuard.jsx'

 function DashboardPage() {
  return (
    <Layout>
       <Card/>
    </Layout>
  )
}


export default AuthGuard(DashboardPage)