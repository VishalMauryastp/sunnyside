import React from 'react'
import arrow from "../images/icon-arrow-down.svg"

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay">
          <h1 className="text-4xl uppercase text-center text-white tracking-widest">We are creatives</h1>
          <img src={arrow} alt="" className="mt-20" />
        </div>
      </section>
    </>
  )
}

export default Showcase