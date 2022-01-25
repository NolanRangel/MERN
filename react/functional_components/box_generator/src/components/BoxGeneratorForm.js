import React, { useState } from 'react';
import styles from './StyleForm.module.css'




const BoxGeneratorForm = (props) => {
    const [msg, setMsg] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        props.onNewMessage( msg );
        setMsg("")
        
    };
    
    return (
        <form onSubmit={ handleSubmit } className={styles.form}>
            <div className=' my-5'>
                <label className='mx-3'>Color</label>
                <input onChange={ (e) => setMsg(e.target.value) } value={ msg }/>
                <button type='submit' className='btn btn-primary mx-3'>Add</button>
            </div>
        </form>
    );
};
    
export default BoxGeneratorForm;