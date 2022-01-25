import React from "react";
import { useParams } from 'react-router-dom';

const Display = () => {
    const { input, textColor, bgColor } = useParams();
    console.log(textColor);
    console.log(bgColor);

    const styles = {
        color: textColor ? textColor : 'black',
        backgroundColor: bgColor ? bgColor : 'white'
    }

    return(
        <h2 style={ styles }>{isNaN(input) ? `The word is: ${input}` : `The number is: ${input}`}</h2>
    )
}
export default Display;