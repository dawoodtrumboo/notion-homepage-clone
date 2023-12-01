import React, { useState } from 'react'
import logo from '../../assets/notion.svg'
import { FaAngleDown } from "react-icons/fa";
import NavDropDownBox from './NavDropDownBox';
import './nav.css'
import CustomButton from '../CustomButton';
const Navbar = () => {

    const [hoveredTab, setHoveredTab] = useState('');
    const [featuresTab, setFeaturesTab] = useState('ai');

    const handleMoveIn = (value)=>{
        console.log('in');
        setHoveredTab(value);
    }

    const handleMouseOut = ()=>{
        console.log('out')
        setHoveredTab('');
    }

   

    return (
        <nav className='sticky top-0 flex justify-between items-center gap-8 p-4 bg-white z-50'>
            <div className='flex gap-2 items-center font-semibold'>
                <img src={logo} className='w-10 h-10' />
                <h5>Notion</h5>
            </div>




            <div className='flex justify-between w-full font-light'>
                <ul className='flex gap-5 '>

                    <li className='relative flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100' 
                    onMouseOver={()=>handleMoveIn('product')} onMouseOut={()=>handleMouseOut()}>
                        Product
                        <FaAngleDown size={10} />
                        {hoveredTab==='product' && <NavDropDownBox hoveredTab = {hoveredTab}/>}
                    </li>

                    <li className='relative flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100' 
                    onMouseOver={()=>handleMoveIn('download')} onMouseOut={()=>handleMouseOut()}>
                         Download
                        <FaAngleDown size={10} />
                        {hoveredTab==='download' && <NavDropDownBox hoveredTab = {hoveredTab}/>}
                    </li>
                    <li className='relative flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100'
                    onMouseOver={()=>handleMoveIn('product')} onMouseOut={()=>handleMouseOut()}>
                        Solution
                        <FaAngleDown size={10} />
                        {hoveredTab==='solution' && <NavDropDownBox hoveredTab = {hoveredTab}/>}
                    </li>
                    <li className='relative flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100'
                    onMouseOver={()=>handleMoveIn('resources')} onMouseOut={()=>handleMouseOut()}>
                        Resources
                        <FaAngleDown size={10} />
                        {hoveredTab==='resources' && <NavDropDownBox hoveredTab = {hoveredTab}/>}
                    </li>
                    <li className='relative flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100'>
                        Pricing
                    </li>
                </ul>
                <div className='flex gap-4 items-center'>
                    <button className='px-2 py-1 rounded-md hover:bg-gray-100'>Request a demo</button>
                    <hr className='border-[1px] w-5 rotate-90' />
                    <button className='px-2 py-1 rounded-md hover:bg-gray-100'>Log in</button>
                    <CustomButton paddingX={3} paddingY={1}><span className='text-[13.5px]'>Get Notion free</span></CustomButton>
                </div>
            </div>
        </nav>
    )
}

export default Navbar