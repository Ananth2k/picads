import React from 'react'
import nodata from "../assets/images/404.png"

function NoData() {
  return (
    <div>
        <img className="w-130 h-50  md:h-100 " src={nodata} alt="np data" />
    </div>
  )
}

export default NoData