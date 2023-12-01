import React from 'react'
import "./RouteCompo.css"
import Bird from "../images/bird.png"
function Lazy() {
  return (
    <>
    <div className='route-lazy-parent'><img src={Bird} alt='imglazy' className='lazy-img'/></div>
    </>
  )
}

export default Lazy;