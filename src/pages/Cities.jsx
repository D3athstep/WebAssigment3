import React from "react";
import {Container} from "react-bootstrap";
import DetailCard from "../components/Common/DetailCard";

const Cities = () => {
    const citiesList = [
        {
            title: 'Barcelona',
            coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sagrada_Familia_%28July_2022%29_08.jpg/220px-Sagrada_Familia_%28July_2022%29_08.jpg',
            description: 'Barcelona is a vibrant city located on the northeastern coast of Spain. Known for its unique blend of Gothic and modernist architecture, stunning beaches, and rich cultural heritage, Barcelona is a top destination for travelers. Explore the iconic Sagrada Família, stroll along the lively La Rambla, and savor delicious tapas in the historic Gothic Quarter.',
            videoLink: 'https://www.youtube.com/watch?v=0cHbqAIw4zc&pp=ygUPQmFyY2Vsb25hIGluIDRr'
        },
        {
            title: 'Venice',
            coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Giovanni_Antonio_Canal%2C_il_Canaletto_-_Piazza_San_Marco_-_WGA03883.jpg/300px-Giovanni_Antonio_Canal%2C_il_Canaletto_-_Piazza_San_Marco_-_WGA03883.jpg',
            description: 'Venice is a city unlike any other, built on a network of canals in northeastern Italy. It\'s famous for its romantic gondola rides, historic architecture, and unique way of life. Explore St. Mark\'s Square, visit the Doge\'s Palace, and take a scenic gondola ride through the picturesque canals.',
            videoLink: 'https://www.youtube.com/watch?v=JphHw6iU4m8&pp=ygULdmVuaWNlIHRvdXI%3D'
        },
        {
            title: 'Rome',
            coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Colosseum_in_Rome-April_2007-1-_copie_2B.jpg/152px-Colosseum_in_Rome-April_2007-1-_copie_2B.jpg',
            description: 'Rome, the capital of Italy, is a city steeped in history and ancient wonders. From the mighty Colosseum and Roman Forum to the grandeur of the Vatican City, Rome is a treasure trove of cultural and historical landmarks. Enjoy mouthwatering Italian cuisine and toss a coin into the Trevi Fountain for good luck.',
            videoLink: 'https://www.youtube.com/watch?v=EsFheWkimsU&pp=ygUJcm9tZSB0b3Vy'
        }
    ]
    return (
        <Container fluid className="page-container">
            <Container>
                <h1 className="project-heading mb-5">
                    <strong className="yellow">Cities To Visit </strong>
                </h1>
                {citiesList?.map(city => {
                    return (
                        <DetailCard key={city.name} {...city}/>
                    )
                })}

            </Container>
        </Container>
    )
}

export default Cities