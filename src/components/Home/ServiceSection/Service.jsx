import React, { useState } from 'react'
import '../home.css'
import {
    design,
    engineering,
    hr,
    marketing,
    operations,
    productS
} from '../../../assets/brandlogos'
import ServiceCard from './ServiceCard';

const Service = () => {

    const [servicesTab, setServicesTab] = useState('engineering');

    const handleClick = (value) => {
        setServicesTab(value);
    }
    return (
        <div className='flex flex-col items-center mt-[50px] w-[70%] mx-auto'>
            <h2>Every Team, side-by-side</h2>

            <div className='service-grid grid grid-cols-6 gap-4 w-full'>
                <ServiceCard
                    imgUrl='https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/engineering-v2.png'
                    title='Engineering' 
                    handleClick={()=>handleClick('engineering')}
                    isActive = {servicesTab}
                    />

                <ServiceCard
                    imgUrl='https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/design-v2.png'
                    title='Design' 
                    handleClick={()=>handleClick('design')}
                    isActive = {servicesTab}
                    />

                <ServiceCard
                    imgUrl='https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/product.png'
                    title='Product' 
                    handleClick={()=>handleClick('product')}
                    isActive = {servicesTab}
                    />

                <ServiceCard
                    imgUrl='https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/marketing.png'
                    title='Marketing' 
                    handleClick={()=>handleClick('marketing')}
                    isActive = {servicesTab}
                    />

                <ServiceCard
                    imgUrl='https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/operations.png'
                    title='Operations'
                    handleClick={()=>handleClick('operations')}
                    isActive = {servicesTab}
                     />
                <ServiceCard
                    imgUrl='https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/hr-v2.png'
                    title='HR' 
                    handleClick={()=>handleClick('hr')}
                    isActive = {servicesTab}
                    />



                <div className='w-full rounded-2xl overflow-hidden col-span-6 !p-0 border-[#F6F5F4] border-[2px] shadow-2xl'>
                    {
                        servicesTab === 'engineering' ?
                            <img src={engineering} />
                            : servicesTab === 'design' ?
                                <img src={design} />
                                : servicesTab === 'product' ?
                                    <img src={productS} />
                                    : servicesTab === 'marketing' ?
                                        <img src={marketing} />
                                        : servicesTab === 'operations' ?
                                            <img src={operations} />
                                            : servicesTab === 'hr' ?
                                                <img src={hr} />
                                                : null
                    }
                </div>

            </div>

        </div>
    )
}

export default Service