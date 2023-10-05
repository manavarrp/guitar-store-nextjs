import Link from 'next/link'
import DashboardLayout from './dashboard/layout'


const Pge404 = () => {
  return (
    <DashboardLayout>
      <p className='error'>Pagina No Encontrada</p>
      <Link href='/' className='error-enlace'>Ir a inicio</Link>
    </DashboardLayout>
  )
}

export default Pge404
