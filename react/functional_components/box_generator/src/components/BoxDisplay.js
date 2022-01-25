import react, { useState } from 'react';
import styles from './StyleForm.module.css'
    
const BoxDisplay = (props) => {
    // const messageList = message;
    // console.log(typeof(messageList));
    console.log(props);
    return (
        <ul>
            { props.message.map( (item, i) => (
                <li key={i} style={{backgroundColor: item}} className={styles.box}></li> )) }
        </ul>
        
    );
};
    
export default BoxDisplay;