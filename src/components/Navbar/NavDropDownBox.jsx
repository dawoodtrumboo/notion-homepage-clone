import React from 'react'
import { LuBookOpenCheck } from "react-icons/lu";
const NavDropDownBox = ({ hoveredTab }) => {
    return (
        <div className='nav-dropdown absolute top-9 left-0 rounded-md px-3 shadow-md gap-20 min-w-max bg-white'>

            {

                hoveredTab === 'product' ?

                    <div className='w-full flex gap-5'>
                        <ul className='p-2 space-y-4'>
                        <li className='flex items-center  leading-none gap-2'>
                                <LuBookOpenCheck size={20} color='red'/>
                                <div>
                                    <p>Wiki Gallery</p>
                                    <span>Centralise your knowledge</span>
                                </div>
                            </li>
                            <li className='flex items-center  leading-none gap-2'>
                                <svg
                                    className="target"
                                    viewBox="0 0 49 49"
                                    style={{ width: '20px', height: '20px', display: 'block', fill: '#0885D1', flexShrink: 0, color: 'var(--color-icon)' }}
                                >
                                    <path
                                        clipRule="evenodd"
                                        d="m48.2037 9.1569-6.1556 6.2475-.0306-.0613c-3.0319 3.0932-5.2982 3.7975-9.7082 3.3382l-3.1543 3.185c1.1025 2.0212.8268 4.6244-.8575 6.3394-2.0519 2.1131-5.4513 2.1131-7.5644.0612s-2.1438-5.4512-.0613-7.5644c1.6844-1.715 4.2569-2.0212 6.3088-.9494l3.1544-3.185c-.5207-4.41.1225-6.6762 3.1543-9.76933l6.1557-6.2475 1.715 7.04375zm-14.5467 12.7706h.8269v.0612c1.1331 0 2.1438-.1225 3.0931-.3369.2144.9494.3369 1.8988.3369 2.9094 0 7.4113-6.0025 13.4138-13.4137 13.4138-7.4113 0-13.4138-6.0025-13.4138-13.4138 0-7.4112 6.0025-13.4137 13.4138-13.4137.9187 0 1.8375.0918 2.695.2756-.245 1.1944-.3369 2.4806-.245 3.92-.7963-.2144-1.5925-.3675-2.45-.3675-5.2675 0-9.555 4.2875-9.555 9.555s4.2875 9.555 9.555 9.555 9.555-4.2875 9.555-9.555c0-.9188-.1532-1.7763-.3982-2.6031zm8.483-2.5419c.7044-.5206 1.3781-1.1331 2.0825-1.8375l1.5925-1.6231c1.0413 2.6644 1.6538 5.5431 1.6538 8.575 0 12.6787-10.2901 22.9688-22.9688 22.9688-12.6788 0-22.96875-10.2901-22.96875-22.9688 0-12.6788 10.28995-22.96875 22.96875-22.96875 2.8787 0 5.635.55125 8.1769 1.53125l-1.5619 1.5925c-.7044.70438-1.2863 1.40875-1.8069 2.11313-1.5312-.39813-3.1544-.64313-4.8081-.64313-10.1369 0-18.375 8.2381-18.375 18.375s8.2381 18.375 18.375 18.375 18.375-8.2381 18.375-18.375c0-1.7763-.2756-3.4913-.735-5.1144z"
                                        fill="#0885D1"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                                <div>
                                    <p>Projects</p>
                                    <span>For every team and size</span>
                                </div>

                            </li>
                            <li className='flex items-center leading-none gap-2'>
                                <svg
                                    className="doc"
                                    viewBox="0 0 49 49"
                                    style={{ width: '20px', height: '20px', display: 'block', fill: '#FAA700', flexShrink: 0, color: 'var(--color-icon)' }}
                                >
                                    <path d="m40.22 14.512-12.33-9.99c-.72-.6-1.65-.93-2.61-.93H11.36c-2.28 0-4.11 1.83-4.11 4.11v33.78c0 2.28 1.86 4.11 4.11 4.11h26.28c2.28 0 4.11-1.83 4.11-4.11v-23.76c0-1.23-.57-2.43-1.53-3.21Zm-13.11-6.81 10.38 9.06c.42.36.18 1.05-.39 1.05h-8.88c-.6 0-1.11-.48-1.11-1.11v-9Zm8.85 33.75H13.01c-.69 0-1.26-.57-1.26-1.29v-31.2c0-.69.57-1.26 1.26-1.26h10.35v10.14c0 2.07 1.68 3.75 3.75 3.75h10.11v18.6c0 .69-.57 1.26-1.26 1.26Z" fill="#FAA700" />
                                    <path d="M17.75 27.232h13.5M17.75 34.402h13.5" stroke="#FAA700" strokeWidth="1.824" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div>
                                    <p>Docs</p>
                                    <span>Simple and Powerful</span>
                                </div>

                            </li>

                            <li className='flex items-center leading-none gap-2'>
                            <svg
      className="sparkles"
      viewBox="0 0 24 23"
      style={{ width: '20px', height: '20px', display: 'block', fill: '#9D33D9', flexShrink: 0, color: '#9D33D9' }}
    >
      <g>
        <path d="M10.4563 5.72844C10.9113 5.57094 10.9113 5.29094 10.4563 5.11594L7.98881 4.17094C7.55131 4.01344 7.04381 3.50594 6.86881 3.05094L5.92381 0.583437C5.76631 0.128438 5.48631 0.128438 5.31131 0.583437L4.36631 3.05094C4.20881 3.48844 3.70131 3.99594 3.24631 4.17094L0.778811 5.11594C0.323811 5.27344 0.323811 5.55344 0.778811 5.72844L3.24631 6.67344C3.68381 6.83094 4.19131 7.33844 4.36631 7.79344L5.31131 10.2609C5.46881 10.7159 5.74881 10.7159 5.92381 10.2609L6.86881 7.79344C7.02631 7.35594 7.53381 6.84844 7.98881 6.67344L10.4563 5.72844Z"></path>
        <path d="M22.4788 14.3734C23.8788 14.0234 23.8788 13.4459 22.4788 13.0959L19.3813 12.3259C17.9813 11.9759 16.5463 10.5409 16.1963 9.14091L15.4263 6.04341C15.0763 4.64341 14.4988 4.64341 14.1488 6.04341L13.3788 9.14091C13.0288 10.5409 11.5938 11.9759 10.1938 12.3259L7.09631 13.0959C5.69631 13.4459 5.69631 14.0234 7.09631 14.3734L10.1938 15.1434C11.5938 15.4934 13.0288 16.9284 13.3788 18.3284L14.1488 21.4259C14.4988 22.8259 15.0763 22.8259 15.4263 21.4259L16.1963 18.3284C16.5463 16.9284 17.9813 15.4934 19.3813 15.1434L22.4788 14.3734Z"></path>
      </g>
    </svg>
                                <div>
                                <p>Notion AI</p>
                                <span>Integrated AI</span>
                                </div>

                            </li>

                           
                        </ul>

                        <ul className='border-l-[1px] border-gray-200 p-3'>
                            <li>
                                <p>Template Gallery</p>
                                <span>Setup to get started</span>
                            </li>
                            <li>
                                <p>Customer Stories</p>
                                <span>See how teams use notion</span>
                            </li>
                            <li>
                                <p>Connection</p>
                                <span>Connect your tools to notion</span>
                            </li>
                        </ul>
                    </div>
                    :

                    hoveredTab === 'download' ?
                        <ul className='space-y-2'>
                            <li>iOS & Android</li>
                            <li>Mac & Windows</li>
                            <li>Web & Computer</li>
                        </ul> :

                        hoveredTab === 'solution' ?
                            <div className='flex gap-5'>

                                <ul className='px-2 py-3 space-y-2'>
                                    <h6 className='uppercase text-gray-500 text-xs'>By Team size</h6>
                                    <li>
                                        <p>Enterprises</p>
                                        <span>Advance Features for your org</span>
                                    </li>
                                    <li>
                                        <p>Enterprises</p>
                                        <span>Advance Features for your org</span>
                                    </li>
                                    <li>
                                        <p>Enterprises</p>
                                        <span>Advance Features for your org</span>
                                    </li>
                                </ul>

                                <ul className='border-l-[1px] border-gray-200 px-4 py-3 space-y-2'>
                                    <h6 className='uppercase text-gray-500 text-xs'>By Team Function</h6>
                                    <li>
                                        <p>Enterprises</p>
                                    </li>
                                    <li>
                                        <p>Enterprises</p>
                                    </li>
                                    <li>
                                        <p>Enterprises</p>
                                    </li>
                                    <li>
                                        <p>Enterprises</p>
                                    </li>
                                </ul>

                                <ul className='border-l-[1px] border-gray-200 px-4 py-3 space-y-2'>
                                    <h6 className='uppercase text-gray-500 text-xs'>Notion for</h6>
                                    <li>
                                        <p>Enterprises</p>
                                    </li>
                                    <li>
                                        <p>Enterprises</p>
                                    </li>
                                    <li>
                                        <p>Enterprises</p>
                                    </li>
                                    <li>
                                        <p>Enterprises</p>
                                    </li>
                                </ul>
                            </div> :
                            hoveredTab === 'resources' ?

                                <ul className='px-2 py-3 space-y-2'>
                                    <li>Blog</li>
                                    <li>Guidlines & Tutorials</li>
                                    <li>Webinars</li>
                                    <li>Help Center</li>
                                    <li>API docs</li>
                                    <li>Community</li>
                                    <li>Hire a consultant</li>
                                </ul>
                                : ''

            }




        </div>
    )
}

export default NavDropDownBox