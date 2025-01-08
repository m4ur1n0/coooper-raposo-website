import React from 'react'

const ProjectImage = ( { image_name, alt='', className=''} ) => {
  const src = `/images/${image_name}`;
  console.log(src);
  return (
    <div className={`w-[80%] object-cover flex flex-col items-start justify-center mb-10  overflow-hidden   ${className}`}>
        <img src={src} alt={alt || "Project Image"} />
    </div>
  )
}

export default ProjectImage
