import AboutMeSection from '@/components/AboutMeSection'
import Footer from '@/components/Footer'
import GenericProjectSection from '@/components/GenericProjectSection'
import PhotoSlideShow from '@/components/PhotoSlideShow'
import ResumeSection from '@/components/ResumeSection'
import Tegner from '@/components/Tegner'
import React, { useEffect } from 'react'

const index = ({renderedComp}) => {

    /**
     * const navbar_routes = {
        'About' : ['About Me', 'Resume/CV'],
        'Architecture' : ['Project 1', 'Project 2', 'Project 3'],
        'Digital' : ['Title 1'],
        'Objects' : ['Object 1', 'Object 2', 'Object 3', 'Object 4'],
        'Press and Publications' : ['News Story 1', 'Interview 1', 'Interview 2'],
        'Work Experience' : []
    };
     * 
     */

    const ProjectProps = {
        'Project 1' : {
            title : 'My Horse Love Affair',
            subtitle : 'What no one saw coming, that which, from which, no one could look away...',
            date : "January 6th, 2021",
            body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nNatoque urna turpis eros lectus nulla erat. Cursus pellentesque dis nascetur cursus ullamcorper nisi tincidunt donec. Senectus vivamus habitasse phasellus tortor quam urna? Lacus class montes est etiam eros. Tellus magnis semper per praesent orci pellentesque, hendrerit suscipit. Donec bibendum integer lacinia sapien; felis iaculis.",
            image_name : "horse_nation.jpg"
        },
        'Project 2' : {
            title : 'When Several Horses Approached Me In The Prarie',
            subtitle : 'What no one saw coming, that which, from which, no one could look away...',
            date : "January 6th, 2021",
            body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nNatoque urna turpis eros lectus nulla erat. Cursus pellentesque dis nascetur cursus ullamcorper nisi tincidunt donec. Senectus vivamus habitasse phasellus tortor quam urna? Lacus class montes est etiam eros. Tellus magnis semper per praesent orci pellentesque, hendrerit suscipit. Donec bibendum integer lacinia sapien; felis iaculis.",
            image_name : "horse_buffet.jpg"
        },
        'Project 3' : {
            title : 'I saw him Jump. I saw him Jump. I saw him Jump.',
            subtitle : 'What no one saw coming, that which, from which, no one could look away...',
            date : "January 6th, 2021",
            body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nNatoque urna turpis eros lectus nulla erat. Cursus pellentesque dis nascetur cursus ullamcorper nisi tincidunt donec. Senectus vivamus habitasse phasellus tortor quam urna? Lacus class montes est etiam eros. Tellus magnis semper per praesent orci pellentesque, hendrerit suscipit. Donec bibendum integer lacinia sapien; felis iaculis.",
            image_name : "horse_jump.jpg"
        },
    }
    
    const renderedCompToComp = {
        // 'About Me' : <AboutMeSection prop1={"test1"} />,
        'About Me' : <PhotoSlideShow />,
        'Resume/CV' : <ResumeSection />,
        // 'Project 1' : <GenericProjectSection {...(ProjectProps['Project 1'])} />,
        // 'Project 2' : <GenericProjectSection {...(ProjectProps['Project 2'])} />,
        // 'Project 3' : <GenericProjectSection {...(ProjectProps['Project 3'])} />,
        'Tegner Museum' : <Tegner />
        

    }

  return (
    <div className='page-content px-10 flex-0 w-[100%]  flex flex-col justify-start items-center overflow-y-scroll '>

        {/** DYNAMICALLY RENDER THE ACTUAL PAGE CONTENT */}
        
        {
            renderedCompToComp[renderedComp] || <div className='w-full h-full flex flex-col items-center justify-center'>Coming Soon!</div>
        }


        {/* <Footer /> */}
        
    </div>
  )
}

export default index