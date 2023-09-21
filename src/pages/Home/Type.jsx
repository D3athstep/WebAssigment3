import React, {useEffect, useState} from "react";
import TextTransition, {presets} from 'react-text-transition';

const Type = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    const TEXTS = [
        "MERN Stack Developer",
        "Game Developer",
        "Effective Problem Solver"
        
    ]

    return (
        <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    )
}

export default Type