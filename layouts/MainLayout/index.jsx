import * as React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 315px)', width: '100%', display: 'flex', justifyContent: 'center' }}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
