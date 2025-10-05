import React, { useState,useEffect } from 'react'
import electricCar from "../assets/images/electric-car.png"
import pump from "../assets/images/pump.png"
import rupee from "../assets/images/rupee.png"
import { getCardItems } from '../Data.jsx'
import NoData from '../pages/NoData.jsx'

function Card() {
const [items, setItems] = useState([])


useEffect(() => {
    const data = getCardItems()
    setItems(data)
  }, [])

 return (
 <div className="flex flex-wrap justify-center gap-6">
  {items.map((item, id) => (
    <div key={id} className='bg-theme px-10 py-3 rounded-3xl'>
      <div className='py-4 px-5'>
        <img className="w-25 h-25" src={item.img} alt={item.title} />
      </div>
      <h2 className='text-center text-lg font-semibold'>{item.title}</h2>
    </div>
  ))}
</div>


  )
}

export default Card