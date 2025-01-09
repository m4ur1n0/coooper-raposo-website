import React from 'react'

const ProjectTitle = ({date, children}) => {
  return (
    <div className='w-[70%] mb-3 '>
        <h2 className='font-normal text-[1.2rem]'>{children}</h2>
        <p className='text-gray-500'>{date}</p>
    </div>
  )
}

export default ProjectTitle
