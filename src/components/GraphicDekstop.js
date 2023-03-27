import { useState } from "react";
import { graphicDekstop } from "../data/GraphicDesign";

const GraphicDekstop = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(graphicDekstop)
    return (
        <>
            <section className="flex items-center" >
                {cards.map(({ id, images, title, text }) => (
                    <article key={id} className="relative flex-1">
                        <img src={images} width="100%" alt={title} />
                        <div className="absolute bottom-5 left-0 text-center">
                            <h3 className="text-xl mb-5">{title}</h3>
                            <p>{text}</p>
                        </div>
                    </article>
                ))}
            </section>
        </>
    )
}

export default GraphicDekstop

