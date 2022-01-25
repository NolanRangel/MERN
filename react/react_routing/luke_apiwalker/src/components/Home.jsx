import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const [select, setSelect] = useState("")
    const [num, setNum,] = useState(0)
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(`/${select}/${num}`);
        history.push(`/${select}/${num}`)
    }


    return (
        <div className="Container">
        <div className='row alert alert-dark mt-5'>
            <div className='row'>
                <div className='col-md-4'></div>

                <div className='col-md-4 '>
                    <form onSubmit={handleSubmit} className=' d-flex justify-content-around gap-4'>

                        <label htmlFor='dropdown'>Search for: </label>
                        <select id='dropdown'className='' onChange={(e)=> setSelect(e.target.value)}>
                            <option value=""></option>
                            <option value='people'>Person</option>
                            <option value='planets'>Planet</option>
                        </select>

                        <label htmlFor='id'>ID: </label>
                        <input type='number' className='' onChange={(e)=> setNum(e.target.value)}/>

                        <button className='btn btn-lg btn-primary' value='submit' disabled={select.value === ""}>Search</button>

                    </form>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Home;

