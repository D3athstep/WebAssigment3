import React from "react";
import {Container} from "react-bootstrap";
import Particle from "../components/Particle";
import DetailCard from "../components/Common/DetailCard";

const TouristPlaces = () => {
    const places = [
        {
            title: 'Machu Picchu, Peru',
            coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/270px-Machu_Picchu%2C_Peru.jpg',
            description: 'Machu Picchu is an ancient Inca citadel nestled high in the Andes Mountains of Peru. Its renowned for its well-preserved ruins and breathtaking panoramic views. A UNESCO World Heritage Site, it offers a glimpse into the fascinating history of the Inca civilization.',
            videoLink: 'https://www.youtube.com/watch?v=cnMa-Sm9H4k&pp=ygUQbWFjaHUgcGljaHUgdG91cg%3D%3D'
        },
        {
          title: 'Great Wall of China',
          coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/250px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg',
          description: 'he Great Wall of China is an iconic symbol of Chinese history and culture. This immense defensive structure stretches over 13,000 miles and offers incredible vistas of the Chinese landscape. Its a testament to human ingenuity and determination.',
          videoLink: 'https://www.youtube.com/watch?v=EotbKqZmBuY&pp=ygUYZ3JlYXQgd2FsbCBvZiBjaGluYSB0b3Vy'
        },
        {
          title: 'Eiffel Tower, France',
          coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Photo_of_the_Eiffel_Tower_taken_with_an_iPhone_13_Pro.jpg/250px-Photo_of_the_Eiffel_Tower_taken_with_an_iPhone_13_Pro.jpg',
          description: 'The Eiffel Tower is a Parisian landmark and one of the most recognized structures in the world. Climb to the top for stunning views of the City of Light, or simply admire its intricate ironwork from below.',
          videoLink: 'https://i.ytimg.com/vi/RmnRF_lNDbA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB08vfqwD6t84ZGV6_yzOphQDCp5Q'
        },

    ]
  return (
    <Container fluid className="page-container">
      <Particle />
      <Container>
        <h1 className="project-heading mb-5">
          <strong className="yellow">Tourist Places </strong>
        </h1>
          {places?.map(place => {
              return (
                  <DetailCard key={place.name} {...place}/>
              )
          })}
      </Container>
    </Container>
  )
}

export default TouristPlaces