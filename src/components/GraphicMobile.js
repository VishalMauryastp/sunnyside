import { useState } from "react";
import { graphicMobile } from "../data/GraphicDesign";
import React from 'react'

const GraphicMobile = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(graphicMobile)
    return (
        <>
            <section className="">
                {cards.map(({ id, images, title, text }) => (
                    <article key={id} className="relative">
                        <img src={images} alt={title} />
                        <div className=" absolute bottom-5 left-0 text-center">
                            <h3 className="text-xl mb-5">{title}</h3>
                            <p>{text}</p>
                        </div>
                    </article>


                ))}


            </section>

        </>
    )
}

export default GraphicMobile
