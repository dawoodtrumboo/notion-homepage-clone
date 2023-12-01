import React from 'react'

const ServiceCard = ({imgUrl,title,handleClick,isActive}) => {
  return (
    <div onClick={handleClick} className={`${isActive === title.toLowerCase() ? '!bg-white border-[2px] border-[#F6F5F4]' :''}`}>
    <img src={imgUrl} className='w-[80px] object-cover' />
    <span>{title}</span>
</div>
  )
}

export default ServiceCard