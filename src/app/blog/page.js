import ListadoPosts from "../components/ListadoPosts"
import DashboardLayout from "../dashboard/layout"


export const metadata = {
  title:'GuitarLA - Blog',
}

const Blogs = () => {
  return (
    <DashboardLayout>
       <ListadoPosts/>
    </DashboardLayout>
    
  )
}

export default Blogs