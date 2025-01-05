import React from 'react'

const ProjectImage = ( { video_name} ) => {
  const src = `/videos/${video_name}`;
  console.log(src);
  return (
    <div className='w-[80%] object-cover flex flex-col items-start justify-center mb-10  overflow-hidden'>
        <video  controls>
            <source src={src} type="video/mp4" />
        </video>
    </div>
  )
}

export default ProjectImage
