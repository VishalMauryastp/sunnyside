
import StandOutDekstop from "../images/dekstop/image-transform.jpg";
import StandOutMobile from "../images/mobile/image-transform.jpg";

const StandOut = () => {
    return (
        <>
            <section className="lg:flex flex-row-reverse items-center">
                <div className="flex-1">
                    <picture>
                        <source media="(min-width:768px )" srcSet={StandOutDekstop} />
                        <img className="" src={StandOutMobile} alt="sd" width='100%' />
                    </picture>
                </div>
                <div className=" flex-1">
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

// import React from 'react'
// import transfromDekstop from "../images/dekstop/image-stand-out.jpg";
// import transfromMobile from "../images/mobile/image-transform.jpg";

// const Transfrom = () => {
//     return (
//         <>
//             <section className="lg:flex items-center  border-2 border-red-500">
//                 <div className='w-1/2 h-fit'>
//                     <picture className=" border-2 border-red-500 ">
//                         <source media="(min-width:768px)" srcSet={transfromDekstop} />
//                         <img src={transfromMobile} alt="sd" />
//                     </picture>
//                 </div>
//                 <div className=" p-5 text-center lg:text-left  lg:w-1/2 lg:p-0 lg:ml-5 lg:px-20 border-2 border-red-500 " >
//                     <h2 className='text-2xl lg:text-4xl my-5'>Transform your brand</h2>
//                     <p className='mb-5'>We are a full-service creative agency specializing in helping brands grow fast.
//                         Engage your clients through compelling visuals that do most of the marketing for you.
//                     </p>
//                     <button className="btn-transfrom">Learn More</button>
//                 </div>
//             </section>


//         </>
//     )
// }

// export default Transfrom