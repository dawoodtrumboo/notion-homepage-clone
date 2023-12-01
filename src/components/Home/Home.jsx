import React from 'react'
import CustomButton from '../CustomButton'
import Features from './FeatureSection/Features'
import { FaArrowRight } from "react-icons/fa6";
import logo from '../../assets/notion.svg'
import { FaInstagram ,FaTwitter, FaLinkedinIn, FaFacebook ,FaYoutube} from "react-icons/fa";


import {
    amazon,
    angellist,
    doordash,
    figma,
    ge,
    headspace,
    nike,
    pintrest,
    pixar,
    plaid,
    robinhood,
    snowflake,
    toyoto,
    uber
} from '../../assets/brandlogos';
import Features2 from './FeatureSection/Features2';
import Service from './ServiceSection/Service';
import TemplateCard from './TemplateCard';

const Home = () => {


    return (
        <div>
            {/* HEADER SECTION */}
            <header className='text-center space-y-5 leading-none mt-10'>
                <h1>Write, plan, share.<br /> With AI at your side.</h1>
                <h3>Notion is the connected workspace where better, faster work happens.</h3>
                <CustomButton paddingX={4} paddingY={3}><span className='text-[16.5px] p-2'>Get Notion free</span></CustomButton>
            </header>

            {/* FEATURES SECTION */}
            <Features />

            {/* BRAND LOGOS SECTION */}

            <div className='flex flex-col items-center gap-5 my-[120px]'>
                <div className='flex flex-col items-center text-center leading-none '>
                    <h2>Millions run on Notion every day</h2>
                    <h4 className='w-[75%] leading-5 mt-2'>Powering the world’s best teams, from next-generation startups to established enterprises.</h4>
                    <a className='text-[#00a1befa] hover:border-b-[1px] border-[#00a1befa] flex items-center mt-1 gap-1'>Read customer stories <FaArrowRight size={12} color='#00a1befa' /></a>
                </div>

                <div className='max-w-[70%] flex flex-wrap gap-x-10'>
                    <img src={figma} className='w-[120px] object-contain' />
                    <img src={pixar} className='w-[120px] object-contain' />
                    <img src={doordash} className='w-[120px] object-contain' />
                    <img src={nike} className='w-[120px] object-contain' />
                    <img src={amazon} className='w-[120px] object-contain' />
                    <img src={pintrest} className='w-[120px] object-contain' />
                    <img src={ge} className='w-[120px] object-contain' />
                    <img src={uber} className='w-[120px] object-contain' />
                    <img src={plaid} className='w-[120px] object-contain' />
                    <img src={toyoto} className='w-[120px] object-contain' />
                    <img src={snowflake} className='w-[120px] object-contain' />
                    <img src={headspace} className='w-[120px] object-contain' />
                    <div className='flex mx-auto'>
                        <img src={angellist} className='w-[120px] object-contain' />
                        <img src={robinhood} className='w-[120px] object-contain' />
                    </div>

                </div>
            </div>

            <div className='flex flex-col gap-16 items-center text-center leading-none w-[70%] mx-auto'>
                <h2>Consolidate tools.<br />Cut costs.</h2>
                <div className='relative w-[70%]'>
                    <img src='https://www.notion.so/cdn-cgi/image/format=webp,width=1200/front-static/pages/home/tools-before-notion-V2.png' />
                    <img src='https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/tools-strikethrough-V2.png' className='absolute top-3 mix-blend-multiply' />
                    <img src='https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/giant-pencil-illustration.png' className='w-[200px] absolute -top-[150px] -right-20' />
                </div>
                <>
                    <h3 className=' before:content-[open-quote] after:content-[close-quote] w-[70%] font-serif font-normal leading-10'> We got rid of nearly a dozen different tools because of what Notion does for us.</h3>
                    <div className='text-md flex gap-2 justify-center'>
                        <img src='https://www.notion.so/cdn-cgi/image/format=webp,width=256/front-static/shared/logos/color/metalab.png' className='w-[120px] object-cover' />
                        <div className='flex flex-col justify-center text-start gap-1'>
                            <h4 className='font-semibold'>Justin Watt</h4>
                            <p>Director of Ops & Marketing, MetaLab</p>
                        </div>
                    </div>
                </>
            </div>

            {/* FEATURE 2 SECTION START HERE */}


            <Features2 />

            <div className='flex flex-col gap-5 items-center text-center leading-none w-[70%] mx-auto mt-[50px]'>
                <h3 className=' before:content-[open-quote] after:content-[close-quote] w-[70%] font-serif font-normal leading-10'>Notion adapts to your needs. It’s as minimal or as powerful as you need it to be.</h3>
                <div className='text-md flex gap-4 justify-center'>
                    <img src='https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/shared/logos/color/match-group.png' className='w-[30px] object-cover' />
                    <div className='flex flex-col justify-center text-start gap-1'>
                        <h4 className='font-semibold'>Rahim Makani</h4>
                        <p>Director of Product, Matchgroup</p>
                    </div>
                </div>
            </div>

            {/*  SERVICES SECTION START HERE */}

            <Service />


            <div className='flex flex-col items-center my-[120px]'>
                <div className='flex flex-col items-center text-center leading-none '>
                    <h2>Join a global movement.<br /> Unleash your creativity.</h2>
                    <h4 className='w-[90%] leading-5 mt-2'>Our vibrant community produces content, teaches courses, and leads events all over the world.</h4>
                    <a className='text-[#00a1befa] hover:border-b-[1px] border-[#00a1befa] flex items-center mt-1 gap-1'>Learn More <FaArrowRight size={12} color='#00a1befa' /></a>
                </div>
            </div>
            <div className='w-[70%] mx-auto'>
                <img src='https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/home/avatars.png' />
            </div>

            {/* GRID LAYOUT */}
            <div className='home-grid w-[70%] mx-auto'>

                <div className='leading-none flex flex-col justify-center p-[40px] font-semibold text-xs col-span-2'>
                    <h2 className='text-[#0885D1]'>1M+</h2>
                    <p>community members</p>
                </div>
                <div className='leading-none flex flex-col justify-center p-[40px] font-semibold text-xs col-span-2'>
                    <h2 className='text-[#0885D1]'>150+</h2>
                    <p>community groups</p>
                </div>
                <div className='leading-none flex flex-col justify-center p-[40px] font-semibold text-xs col-span-2'>
                    <h2 className='text-[#0885D1]'>50+</h2>
                    <p>countries represented</p>
                </div>
                <div className='leading-none flex flex-col justify-center p-[40px] !text-lg space-y-2 col-span-3'>
                    <h4 className='font-semibold !text-lg'>An always-on support network+</h4>
                    <p className='leading-none'>Swap setups and share tips in over 149 online communities.</p>
                    <img src='https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/community-icons-V2.png' className='w-[250px]' />
                </div>
                <div className='leading-none flex flex-col justify-center px-[40px] pt-[40px] !text-lg space-y-2 col-span-3'>
                    <h4 className='font-semibold !text-lg'>Choose your language</h4>
                    <p className='leading-2'>Notion currently supports English, Korean, Japanese, French, German, Spanish, and Portuguese. With more to come!</p>
                    <img src='https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/welcome-to-notion.png' className='w-[550px] pt-9' />
                </div>
                <div className='leading-none flex flex-col justify-center items-center p-[40px] !text-lg gap-4 col-span-4 row-span-3'>
                    <div className='w-[500px] h-[500px]'>
                        <img src='data:image/jpeg;base64,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'
                            className='w-full' />

                    </div>
                    <p className='leading-none'>Community meet-up in Tokyo</p>
                </div>
                <div className='leading-none flex flex-col gap-2 justify-center p-[28px] font-semibold text-xs col-span-2'>

                    <div className='flex items-center gap-2'>
                        <div className='w-10 h-10 rounded-full bg-black'>
                        </div>
                        <div>
                            <h4>Deborah Mecca</h4>
                            <p>@DebMecca</p>
                        </div>
                    </div>
                    <p className='font-normal text-[14px] leading-5'>I used to HATE documenting things. And then I started using
                        <span class="text-[#2e95c9]">@NotionHQ</span>  and I document a lot. A LOT A LOT. Now I just realize that it wasn't that I hated documenting, I just hated Google Docs.
                    </p>
                </div>
                <div className='leading-none flex flex-col gap-2 justify-center p-[28px] font-semibold text-xs col-span-2'>

                    <div className='flex items-center gap-2'>
                        <div className='w-10 h-10 rounded-full bg-black'>
                        </div>
                        <div>
                            <h4>Deborah Mecca</h4>
                            <p>@DebMecca</p>
                        </div>
                    </div>
                    <p className='font-normal text-[14px] leading-5'>I used to HATE documenting things. And then I started using
                        <span class="text-[#2e95c9]">@NotionHQ</span>  and I document a lot. A LOT A LOT. Now I just realize that it wasn't that I hated documenting, I just hated Google Docs.
                    </p>
                </div>
                <div className='leading-none flex flex-col gap-2 justify-center p-[28px] font-semibold text-xs col-span-2'>

                    <div className='flex items-center gap-2'>
                        <div className='w-10 h-10 rounded-full bg-black'>
                        </div>
                        <div>
                            <h4>Deborah Mecca</h4>
                            <p>@DebMecca</p>
                        </div>
                    </div>
                    <p className='font-normal text-[14px] leading-5'>I used to HATE documenting things. And then I started using
                        <span class="text-[#2e95c9]">@NotionHQ</span>  and I document a lot. A LOT A LOT. Now I just realize that it wasn't that I hated documenting, I just hated Google Docs.
                    </p>
                </div>

            </div>


            <div className='flex flex-col items-center my-[120px]'>
                <div className='flex flex-col items-center text-center leading-none gap-5 '>
                    <h2>Endless ways to use it</h2>
                    <a className='text-[#00a1befa] hover:border-b-[1px] border-[#00a1befa] flex items-center mt-1 gap-1'>Browse all templates <FaArrowRight size={12} color='#00a1befa' /></a>
                </div>
            </div>

            <div className='grid grid-cols-4 mx-auto w-[70%] gap-5'>
                <div className='bg-[#F1EFEE] border-[#e4e4e4]  border-[1px] pt-[24px] pl-[32px] space-y-5 rounded-2xl row-span-3 col-span-2 flex flex-col justify-between'>
                        <div className='space-y-8'>
                        <svg
        className="checkeredFlag"
        viewBox="0 0 27 30"
        style={{
            width: '20px',
            height: '20px',
            display: 'block',
            fill: '#0885D1',
            flexShrink: 0,
            color: '#0885D1',
        }}
    >
        <path
            d="M2.00492 29.512C2.95444 29.5145 3.74826 28.7397 3.75148 27.7614L3.77667 20.1222C4.20869 19.9939 5.21679 19.68 6.62668 19.6838C11.7051 19.6974 15.4801 22.3546 20.5585 22.3682C22.7165 22.3739 24.0124 22.0465 25.1507 21.5172C26.2458 21.0022 26.7956 20.0398 26.8002 18.6731L26.846 4.76127C26.85 3.5528 26.0183 2.73054 24.8098 2.72731C23.8171 2.72466 22.5783 3.19612 20.521 3.19062C15.6008 3.17749 11.6676 0.51984 6.58919 0.506282C4.50314 0.500712 3.30805 0.799642 2.02571 1.38607C0.959488 1.87237 0.352786 2.61886 0.34847 3.92803L0.269935 27.7521C0.266758 28.716 1.05541 29.5094 2.00492 29.512ZM3.95915 12.7711L3.97291 8.59899C4.31927 8.26902 5.19818 7.86854 6.68 7.8725C7.09721 7.87361 7.98899 7.93354 8.65044 8.03601L8.663 4.22358C10.3599 4.4583 11.9551 4.96609 13.5936 5.45961L13.581 9.25766C15.1619 9.7798 16.9588 10.2162 18.5119 10.4074L18.5245 6.59493C19.1285 6.66848 19.7469 6.71329 20.3799 6.71498C21.4877 6.71794 22.4663 6.61984 23.2007 6.42039L23.1882 10.2184C22.569 10.3894 21.5471 10.5306 20.3674 10.5274C19.9358 10.5263 19.3028 10.5102 18.5119 10.4074L18.4981 14.5795C19.3322 14.6824 20.0659 14.6987 20.6126 14.7002C21.7204 14.7032 22.4976 14.5901 23.1744 14.4049L23.1622 18.0879C22.8447 18.4179 21.9226 18.8039 20.4264 18.7999C19.779 18.7982 19.1463 18.7246 18.4848 18.6221L18.4981 14.5795C16.7294 14.3302 15.2057 13.952 13.5673 13.4298L13.5543 17.3717C12.0021 16.9071 10.3922 16.4569 8.62331 16.2651L8.63668 12.2081C8.09023 12.1347 7.51505 12.0469 6.66625 12.0446C5.18443 12.0406 4.30552 12.4411 3.95915 12.7711ZM8.63668 12.2081C10.4342 12.4719 11.8282 12.9216 13.5673 13.4298L13.581 9.25766C11.9425 8.77852 10.4623 8.29981 8.65044 8.03601L8.63668 12.2081Z"
            fill="currentColor"
        ></path>
    </svg>
    <h4 className='text-xl font-bold'>Product roadmap</h4>
    <a className='text-[#00a1befa] hover:border-b-[1px] border-[#00a1befa] flex items-center mt-1 gap-1'>Browse all templates <FaArrowRight size={12} color='#00a1befa' /></a>
                        </div>
                        <div className='flex w-full justify-end'>
                        <img src='https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/home/company-wiki-template.png' className='w-[400px] object-cover rounded-t-xl'/>
                        </div>
                </div>
                <TemplateCard/>
                <TemplateCard/>
                <TemplateCard/>
                <TemplateCard/>
                <TemplateCard/>
                <TemplateCard/>
                
            </div>

            <div className='flex flex-col items-center my-[120px]'>
                <div className='flex flex-col gap-3 items-center text-center leading-none '>
                    <h2>Great started for free</h2>
                    <h4 className='w-[90%] leading-5 mt-2'>Play around with it first. Pay and add your team later.</h4>
                    <div className='flex gap-3 items-center'>
                        <CustomButton paddingX={4} paddingY={3}>Try Notion free</CustomButton>
                    <a className='text-[#00a1befa] hover:border-b-[1px] border-[#00a1befa] flex items-center mt-1 gap-1'>Request a demo <FaArrowRight size={12} color='#00a1befa' /></a>
                    </div>
                </div>
            </div>
            <div className='w-[50%] mx-auto'>
                <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/notion-parade.png"  />
            </div>



            <footer className='flex gap-10 px-[125px] py-[80px] border-t-[1px] border-gray-200 max-h-[105vh]'>

                <div className='space-y-5'>
            <div className='flex gap-2 items-center font-semibold'>
                <img src={logo} className='w-10 h-10' />
                <h5>Notion</h5>
            </div>

                <div className='flex items-center gap-3 text-2xl text-gray-500 '>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaLinkedinIn/>
                    <FaFacebook/>
                    <FaYoutube/>
                </div>
                </div>
                <div className='flex flex-col w-full'>
                <div className=' h-full w-full flex flex-col flex-wrap gap-10'>

                    <ul className='space-y-1 text-gray-500'>
                        <span className='font-semibold text-black'>Product</span>
                        <li><a href='#'>Wikis </a></li>
                        <li><a href='#'>Projects </a></li>
                        <li><a href='#'>Docs </a></li>
                        <li><a href='#'>Notion AI </a></li>
                        <li><a href='#'>What's new </a></li>
                    </ul>
                    <ul className='space-y-1 text-gray-500'>
                        <span className='font-semibold text-black'>Solutions</span>
                        <li><a href='#'>Enterprise </a></li>
                        <li><a href='#'>Small business </a></li>
                        <li><a href='#'>Personal use </a></li>
                        <li><a href='#'>Remote work </a></li>
                        <li><a href='#'>Startups </a></li>
                        <li><a href='#'>Education </a></li>
                        <li><a href='#'>Nonprofits </a></li>
                        <li><a href='#'>Engineering </a></li>
                        <li><a href='#'>Product </a></li>
                        <li><a href='#'>Design </a></li>
                        <li><a href='#'>Managers </a></li>
                    </ul>
                    <ul className='space-y-1 text-gray-500'>
                        <span className='font-semibold text-black'>Download</span>
                        <li><a href='#'>iOS & Android </a></li>
                        <li><a href='#'>Mac & Windows </a></li>
                        <li><a href='#'>Web Clipper </a></li>
                    </ul>
                    <ul className='space-y-1 text-gray-500'>
                        <span className='font-semibold text-black'>Build</span>
                        <li><a href='#'>Integrations </a></li>
                        <li><a href='#'>Templates </a></li>
                        <li><a href='#'>API docs </a></li>
                        <li><a href='#'>Guidelines & tutorials</a></li>
                        <li><a href='#'>Hire a consultant </a></li>
                        <li><a href='#'>Become an affiliate </a></li>
                    </ul>
                    <ul className='space-y-1 text-gray-500'>
                        <span className='font-semibold text-black'>Learn</span>
                        <li><a href='#'>Customer stories </a></li>
                        <li><a href='#'>Help center </a></li>
                        <li><a href='#'>Webinars </a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Community </a></li>
                    </ul>

                    <ul className='space-y-1 text-gray-500'>
                        <span className='font-semibold text-black'>Get Started</span>
                        <li><a href='#'>Switch from Confluence </a></li>
                        <li><a href='#'>Switch from Asana </a></li>
                        <li><a href='#'>Switch from Evernote </a></li>
                        <li><a href='#'>Compare vs Monday</a></li>
                        <li><a href='#'>Compare vs Clickup </a></li>
                        <li><a href='#'>Compare vs Jira</a></li>
                    </ul>
                    <ul className='space-y-1 text-gray-500'>
                        <span className='font-semibold text-black'>Resources</span>
                        <li><a href='#'>Price </a></li>
                        <li><a href='#'>About us </a></li>
                        <li><a href='#'>Careers</a></li>
                        <li><a href='#'>Media kit</a></li>
                        <li><a href='#'>Email us </a></li>
                        <li><a href='#'>Security </a></li>
                        <li><a href='#'>Cookie settings </a></li>
                        <li><a href='#'>Terms & privacy </a></li>
                        <li><a href='#'>California Privacy Notice </a></li>
                        <li><a href='#'>Status </a></li>
                    </ul>

                    

                </div>
                <div>
                    <p>Do Not Sell or Share My Info</p>
                    <p className='text-gray-500'>© 2023 Notion Labs, Inc.</p>
                </div>
                </div>


                
            </footer>
        </div>
    )
}

export default Home