import React from 'react'
import Sidebar from '../components/Sidebar'
import PageComponent from './PageComponent'
import NoData from './NoData'

function Settings() {
  return (
    <PageComponent>
        <div className='homewrapper flex flex-col min-h-screen p-5'>
                <div className='w-full'>
                    <h1 className='text-left font-semibold text-lg'>Settings</h1>
                </div>
                <div className='flex-1 flex items-center justify-center mx-auto px-5'>
                 <NoData/>
                </div>            
        </div>
    </PageComponent>
  )
}

export default Settings