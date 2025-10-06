import React from 'react'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'
import PageComponent from './PageComponent'
import { Power } from 'lucide-react'

function Home() {
  return (
    <PageComponent>
        <div className='homewrapper flex flex-col min-h-screen p-5'>
            <div className='w-full flex mb-4 sm:mb-0 space-y-3 flex-col sm:flex-row items-start justify-between'>
                <h1 className='text-left font-semibold text-lg'>Home</h1>
                <div className='bg-theme mx-auto sm:mx-0 px-2 py-2 rounded-xl shadow-lg flex gap-2 items-center justify-between'>
                    <img 
                    className='w-10 h-10 border-2 border-white rounded-full'
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                    <div>
                        <h2 className='text-sm font-semibold'>Admin</h2>
                        <p className='text-sm truncate w-28 text-gray-500'>admin123456@gmail.com</p>
                    </div>
                    <span className='bg-white py-2 px-1 rounded-lg shadow-lg'>
                        <Power className='text-blue-500' />
                    </span>
                </div>
            </div>
            <div className='flex-1 flex items-center justify-center mx-auto px-5'>
                <Card/>
            </div>            
        </div>
      </PageComponent>
  )
}

export default Home