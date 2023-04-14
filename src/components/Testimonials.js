import { testimonials } from "../data/testimonials";
import Card from "./Card";
const Testimonials = () => {
    // eslint-disable-next-line
    return (
        <>
            <section className="py-10 px-5 lg:py-20">
                <h2 className="testimonials-header  text-3xl uppercase tracking-widest text-center">Client testimonials</h2>
            
               
                <div className="md:grid gap-7 grid-cols-2 lg:grid-cols-3 xl:max-w-6xl  xl:mx-auto my-10">
                        
                    {testimonials.map(({ id, images,name, desc, title }) =>

                      
                      
                        <article key={id} >
                            <img src={images} alt={name} className="w-20 rounded-full block mx-auto " />
                            <p className="text-center">{desc}</p>
                            <h4 className="text-center"> {name}</h4>
                            <small className="block text-center">{title}</small>
                           
                        </article>
                    )}

                </div>
                {/* <section className="flex flex-wrap">
                        <Card
                            images="a.jpg"
                            name="sjbf"
                            desc="hsdbsiy"
                            title="dbvkh"
                        />

                
                </section> */}


            </section>
        </>
    )
}

export default Testimonials
