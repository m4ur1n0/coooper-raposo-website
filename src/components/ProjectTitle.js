import React from 'react'

const ProjectTitle = ({date, children}) => {
  return (
    <div className='w-[80%] my-24'>
        <h1>{children}</h1>
        <p>{date}</p>
    </div>
  )
}

export default ProjectTitle
