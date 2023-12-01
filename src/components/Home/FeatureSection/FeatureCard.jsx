import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const FeatureCard = ({bgColor,textColor,title, description, tag, onHoverIn, isActive}) => {

  return (
    <div className={`bg-[#F6F5F4] cursor-pointer w-[239px] overflow-hidden h-[134px] rounded-2xl shadow-lg px-5 py-2 border-[1px] border-gray-200 ${isActive === title.toLowerCase() ? 'bg-white':''}`} onMouseOver={onHoverIn}  style={{ transition: 'all 0.3s ease' }}>

                    <div className='flex gap-2 items-center'>
                        {/* Icon */}
                        <div className={`w-8 h-8 rounded-md  bg-opacity-30 ${bgColor}`}></div>
                        <div className='flex gap-2'>
                        <h3 className='font-semibold leading-none'>{title}</h3>
                        {tag && <span className={`text-xs font-semibold rounded-full px-3 leading-none flex items-center justify-center bg-opacity-30 ${bgColor} ${textColor}`}>Now with Q&A</span>}
                        </div>
                    </div>
                    <div className={`flex flex-col text-sm ${isActive === title.toLowerCase() ? 'pt-7':'pt-14'}`} style={{ transition: 'all 0.3s ease' }}>
                    <p>{description}</p>
                    <button className={`flex items-center gap-1 font-semibold ${textColor}`}>Learn more <FaArrowRight size={10}/> </button>
                    </div>

                </div>
  )
}

export default FeatureCard