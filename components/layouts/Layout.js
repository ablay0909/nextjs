import React from 'react'
import Header from '../Header'
import styles from './layout.module.css'
function Layout({ children }) {
  return (
    <div >
      <Header />
      <main >
        {children}
      </main>
    </div>
  )
}



export default Layout