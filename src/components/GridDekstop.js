import { useState } from "react";
import { gridDekstop } from "../data/grid"
import React from 'react'

const GridDekstop = () => {
  // eslint-disable-next-line
  const [cards, setPeople] = useState(gridDekstop)
  return (
    <>
      <section  className="grid grid-cols-2 lg:flex flex-row">
        {cards.map(({ id, images }) => (
          <article key={id}>
          <img src={images} alt=""/>
          </article>
    )
        )}
      </section>

    </>
  )
}

export default GridDekstop