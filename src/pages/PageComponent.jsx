import React from 'react'
import Sidebar from '../components/Sidebar'


function PageComponent({children}) {
  return (
    
    <div className='flex bg-theme py-3 px-3 lg:px-0 lg:pe-3'>
    <Sidebar/>     
       <section className='bg-white w-full rounded-3xl'>
      {children}
       </section>
       </div>
  )
 
}

export default PageComponent