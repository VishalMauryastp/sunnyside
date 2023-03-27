import React from 'react'

const Card = (props) => {


    return (
        <div className="w-[400px] border">
            <div >
                <article>
                    <img src={props.images} alt={props.name} className="" />
                    <p className="text-center">{props.desc}</p>
                    <h4 className="text-center"> {props.name}</h4>
                    <small className="block text-center">{props.title}</small>
                </article>
            </div>
        </div>
    )
}

export default Card