import React from 'react'

const ProjectParagraph = ({children, className=''}) => {
  return (
    <div className={`w-[70%] mb-10   ${className}`}>
      <p className='leading-loose text-justify font-thin'>
        {children}
      </p>
    </div>
  )
}

export default ProjectParagraph
