import React from 'react'
import ProjectImage from './ProjectImage'
import ProjectTitle from './ProjectTitle'
import ProjectParagraph from './ProjectParagraph'

const Tegner = () => {
  return (
    <div className='w-full flex flex-col justify-start'>
        <ProjectImage image_name={'tegner1.png'} />

        <ProjectTitle date={2023}>
            Extension for the Rudolph Tegner Museum and Statue Park
        </ProjectTitle>

        <ProjectParagraph>
        This project envisions an extension to the existing Rudolph Tegner Museum and Statue Park in the north of the island of Zealand, Denmark. The design arose from an analysis of the relationship between the monolithic concrete museum building, which houses many of Tegner’s draft sculptures and drawings, and the outdoor statue park which holds his finished bronze works. Attempting to strike a balance between the geometric rigidity and rationality of the museum building and the untamed landscape of the statue park, the extension morphs around the contours of the topography and the placement of existing trees, nestling enclosed gallery spaces around shaded courtyards.
        </ProjectParagraph>

        <ProjectImage image_name={'tegner2.jpeg'} />

        <ProjectParagraph>
        The extension integrates 300 square meters of gallery space, a reception area, offices, and an indoor/outdoor cafe into the existing site. Public spaces are enclosed by glass curtain walls and parametric roofs that distort around the tree courtyards, while private office and kitchen spaces are enclosed in horizontal wooden slats. 

        </ProjectParagraph>

        <ProjectImage image_name={'tegner3.jpg'} />

    </div>
  )
}

export default Tegner