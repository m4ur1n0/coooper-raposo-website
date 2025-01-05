import React from 'react'

const ProjectParagraph = ({children}) => {
  return (
    <div className='w-[80%] mb-10'>
      <p className='leading-loose text-justify font-thin'>
        {children}
      </p>
    </div>
  )
}

export default ProjectParagraph
