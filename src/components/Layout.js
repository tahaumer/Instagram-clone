import React from 'react'
import Sidebar from './Sidebar'
import Bottombar from './Bottombar'

const Layout = ({children}) => {
  return (
      <div>
        <Sidebar/>
          <main >
            {children}
          </main>
          <Bottombar/>
      </div>
  )
}

export default Layout