import { Topbar, Header, Footer } from '@layout'
import {Copyright} from '@components'
import './MainLayout.css'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section>
        <Topbar />
      </section>

      <div>
        <Header />
      </div>

      {children}

      <footer className='footer'>
        <Footer />
        <Copyright year={2024} companyName='Megamart' />
      </footer>
    </>
  )
}

export default MainLayout
