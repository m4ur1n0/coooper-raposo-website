import React from 'react'

const ProjectImage = (image_name, alt='') => {
  return (
    <div className='w-[80%] max-h-[70vh] object-contain flex flex-col items-start justify-center my-24'>
        <img src={`/images/${image_name}`} alt={alt || "Project Image"} />
    </div>
  )
}

export default ProjectImage
