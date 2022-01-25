import React, { useState } from 'react'

const Tabs = (props) => {
    // console.log(props);
    const [selected, setSelected] = useState(props.items[0])
    // console.log(selected);

    return (
        <div className="card bg-dark mt-5" >
            <ul className='nav nav-tabs mx-5'>
                {props.items.map((item, i) => {
                let styleAddOn = "";
                item === selected&&(styleAddOn += "active bg-dark text-light");
                return(
                <li key={i} className='nav-item mx-2 mt-4'>

                    <button className={`nav-link bg-success link-dark border-light ${styleAddOn}`}
                        onClick={(e) => {setSelected(item)}}> {item.label} </button>

                </li>)

                })
            }
            </ul>
            <div className='m-5'>
                <p className='text-light'> {selected.callback(selected.content)} </p>
            </div>

        </div>
    )
}

export default Tabs;





