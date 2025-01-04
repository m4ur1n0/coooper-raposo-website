import React from 'react'

const ProjectImage = (path_to_image, alt='') => {
  return (
    <div className='w-[80%] max-h-[70vh] object-contain flex flex-col items-start justify-center my-24'>
        <img src={path_to_image} alt={alt || "Project Image"} />
    </div>
  )
}

export default ProjectImage
