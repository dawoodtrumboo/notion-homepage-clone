import React from 'react'

const NavDropDownBox = ({ hoveredTab }) => {
    return (
        <div className='nav-dropdown absolute top-9 left-0 rounded-md px-3 shadow-md gap-20 min-w-max bg-white'>

            {

                hoveredTab === 'product' ?

                    <div className='w-full flex gap-5'>
                        <ul className='p-2'>
                            <li>
                                <p>Wiki Gallery</p>
                                <span>Centralise your knowledge</span>
                            </li>
                            <li>
                                <p>Projects</p>
                                <span>For every team and size</span>
                            </li>
                            <li>
                                <p>Docs</p>
                                <span>Simple and Powerful</span>
                            </li>
                            <li>
                                <p>Notion AI</p>
                                <span>Integrated AI</span>
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