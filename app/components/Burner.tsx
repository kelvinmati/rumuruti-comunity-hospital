import React from 'react'
import burnerImg from "../../public/burner.jpg"
import cleaningImg from "../../public/cleaningimg.avif"
import cleaningImg2 from "../../public/ cleaningImg2.avif"



const Burner = () => {
  return (
    <div >
      <div className='mx-auto w-[90%] grid grid-cols-2 gap-5 items-center py-15'>
        <div className='flex flex-col gap-5'>
      <img src={burnerImg} alt="Hospital care moment" className="  rounded-lg shadow-lg" />
      <img src={cleaningImg2} alt="Community health moment" className="  rounded-lg shadow-lg" />

        </div>
      <img src={cleaningImg} alt="Family care moment" className="  rounded-lg shadow-lg" />


      </div>
   
    </div>
  )
}

export default Burner
