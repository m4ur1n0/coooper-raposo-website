import React from 'react'

const GenericProjectSection = ({title, subtitle, date, body, image_name}) => {
  return (
    <div className={`generic-project-section ${title}-project-section p-5 flex flex-col justify-left`}>
      <img 
        src={`/images/${image_name}`} 
        alt={`${title} Image`}
        className={`${title}-project-section-image m-10 object-contain max-h-[650px]`}/>

        <div className='project-section-content pl-4'>
          <h1 className={`${title}-project-section-title `}>{title}</h1>
          <h3 className={`${title}-project-section-subtitle`}>{subtitle}</h3>
          <h4 className={`${title}-project-section-date mb-2`}>{date}</h4>
          {body.split('\n').map((paragraph, index) => (
            <div className='project-section-body-paragraph pb-2' key={index}>
              {paragraph}
            </div>
          ))}
        </div>


    </div>
  )
}

export default GenericProjectSection