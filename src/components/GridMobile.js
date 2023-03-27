import { useState } from "react";
import { gridMobile } from "../data/grid"
import React from 'react'

const GridMobile = () => {
  // eslint-disable-next-line
  const [cards, setPeople] = useState(gridMobile)
  return (
    <>
      <section className="grid grid-cols-2">
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

export default GridMobile