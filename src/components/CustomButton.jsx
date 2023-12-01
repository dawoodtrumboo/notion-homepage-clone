import React from 'react'

const CustomButton = ({children,paddingX, paddingY}) => {
  return (
    <button className={`rounded-md bg-black hover:bg-[#363636] text-white font-semibold px-${paddingX} py-${paddingY}`} >{children}</button>

  )
}

export default CustomButton