import { Sidebar } from 'lucide-react'
import React from 'react'

function Common({children}) {
  return (
    <div className='flex bg-theme py-3 pe-3'>
    <Sidebar/>     
       <section className='bg-white w-full rounded-3xl'>
      {children}
       </section>
       </div>
  )
}

export default Common