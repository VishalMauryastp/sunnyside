
import StandOutDekstop from "../images/dekstop/image-stand-out.jpg";
import StandOutMobile from "../images/mobile/image-stand-out.jpg";

const StandOut = () => {
    return (
        <>
            <section className="lg:flex items-center">
                <div className="flex-1">
                    <picture>
                        <source media="(min-width:768px )" srcSet={StandOutDekstop} />
                        <img src={StandOutMobile} alt="sd" width="100%" />
                    </picture>
                </div>
                <div className="flex-1">
                    <div className="p-10">
                        <h2 className='text-2xl lg:text-4xl my-5'> Stand out to the right audience</h2>
                        <p className='mb-5'> Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                        </p>
                        <button className="btn-standout">Learn More</button>
                    </div>
                </div>
            </section>


        </>
    )
}

export default StandOut