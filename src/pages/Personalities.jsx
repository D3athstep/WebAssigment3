import React from "react";
import { Container } from "react-bootstrap";
import DetailCard from "../components/Common/DetailCard";

const Personalities = () => {
    const personalities = [
        {
            title: 'Hannibal Barca',
            coverImage: ' https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/HannibalBarca.jpg/220px-HannibalBarca.jpg',
            description: ' Hannibal ( Punic for "gift of Baal " or "grace of Baal"), Carthaginian general ( 247 BC - 182 BC ). According to many, the most capable military leader of all time.He lived at the time of Roman supremacy over the Mediterranean , and became famous as a great military leader and tactician. Most famous for his participation in the Second Punic War when he defeated the Roman army in the battle of Ticino and Trebia, 217 BC. Kr. near Lake Trasimeno , 216 BC. Kr. at Kana.',
            videoLink: 'https://www.youtube.com/watch?v=g0zA_e7-YSE&t=3s&pp=ygUbZGogcGVhY2ggY29iYmxlciBwdW5pYyB3YXJz'
        },
        {
            title: 'Scipio Africanus',
            coverImage: ' https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Bust_of_Sulla_%28loan_from_Ny_Carlsberg_Glyptotek%29_-_Glyptothek_-_Munich_-_Germany_2017.jpg/220px-Bust_of_Sulla_%28loan_from_Ny_Carlsberg_Glyptotek%29_-_Glyptothek_-_Munich_-_Germany_2017.jpg',
            description: ' Publius Cornelius Scipio Africanus was a Roman general and statesman, most notable as one of the main architects of Romes victory against Carthage in the Second Punic War. Often regarded as one of the greatest military commanders and strategists of all time, his greatest military achievement was the defeat of Hannibal at the Battle of Zama in 202 BC. This victory in Africa earned him the honorific epithet Africanus, literally meaning the African, but meant to be understood as a conqueror of Africa.',
            videoLink: 'https://www.youtube.com/watch?v=g0zA_e7-YSE&t=3s&pp=ygUbZGogcGVhY2ggY29iYmxlciBwdW5pYyB3YXJz'
        }
    ]
    return (
        <Container fluid className="page-container">
            <Container>
                <h1 className="project-heading mb-5">
                    <strong className="yellow">Personalities  I love </strong>
                </h1>
                {personalities?.map(person => {
                    return (
                        <DetailCard key={person.name} {...person}/>
                    )
                })}
            </Container>
        </Container>
    )
}

export default Personalities