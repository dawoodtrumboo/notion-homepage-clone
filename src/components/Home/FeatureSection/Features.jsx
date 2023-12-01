import React,{useState} from 'react'
import doodle from '../../../assets/doodle-bg.png'
import FeatureCard from './FeatureCard'
import ai from '../../../assets/AI.png'
import wiki from '../../../assets/wiki.png'
import projects from '../../../assets/projects.png'
import docs from '../../../assets/docs.png'
const Features = () => {

    const [featuresTab, setFeaturesTab] = useState('ai');

    const handleFeaturesMouseIn = (value) => {
        setFeaturesTab(value);
    }
  return (
    <div className='flex flex-col items-center gap-1 mx-auto w-[70%]'>
    <img src={doodle} className='w-[70%]' />

    <div className='flex flex-col items-center w-full gap-2'>
        <div className='flex gap-8 w-full'>
            <FeatureCard
                title='AI'
                description='Ask literally anything. Notion will answer.'
                tag={true}
                bgColor='bg-[#9D33D9]'
                textColor='text-[#9D33D9]'
                isActive = {featuresTab}
                onHoverIn={() => handleFeaturesMouseIn('ai')} />

            <FeatureCard
                title='Wikis'
                description='Centralize your knowledge. No more hunting for answers'
                bgColor='bg-[#E94D43]'
                textColor='text-[#E94D43]'
                isActive = {featuresTab}
                onHoverIn={() => handleFeaturesMouseIn('wikis')} />

            <FeatureCard
                title='Projects'
                description='Manage complex projects without chaos.'
                bgColor='bg-[#0885D1]'
                textColor='text-[#0885D1]'
                isActive = {featuresTab}
                onHoverIn={() => handleFeaturesMouseIn('projects')} />

            <FeatureCard
                title='Docs'
                description='Simple, powerful, beautiful. Next-gen notes & docs.'
                bgColor='bg-[#FAA700]'
                textColor='text-[#FAA700]'
                isActive = {featuresTab}
                onHoverIn={() => handleFeaturesMouseIn('docs')} />
        </div>
        <div className='rounded-2xl bg-gray-100 shadow-lg border-[1px] border-gray-200 w-full overflow-hidden'>
            {
                featuresTab === 'ai' ?
                    <img src={ai} className='w-full h-full object-cover ' />
                    : featuresTab === 'wikis' ?
                    <img src={wiki} className='w-full h-full object-cover '/>
                    : featuresTab === 'projects' ?
                    <img src={projects} className='w-full h-full object-cover '/>
                    : featuresTab === 'docs' ?
                    <img src={docs} className='w-full h-full object-cover '/>
                    :null
            }

        </div>
    </div>


</div>
  )
}

export default Features