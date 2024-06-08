import { IoIosArrowRoundForward } from "react-icons/io";

const Slide = ({ image }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[400px] lg:h-[800px] relative'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/45'>
                <div className='font-lato left-10 lg:left-20 lg:top-50 absolute'>
                    <h1 className='lg:text-6xl text-4xl font-bold text-white'>
                        Welcome To <br /> Eduan University
                    </h1>
                    <br />
                    <p className='text-lg lg:w-2/3 lg:text-[22px] text-white'>Deleniti nostrum laboriosam praesentium quasi quam voluptate.
                        Frycimus suscipit</p>
                    <div className="flex items-center mt-8">
                        <div>
                            <button className="flex justify-center items-center px-6 py-3 text-lg bg-red-800 text-white font-semibold">Apply Now <IoIosArrowRoundForward size={26}></IoIosArrowRoundForward> </button>
                        </div>
                        <div>
                            <button className="flex justify-center items-center px-6 py-3 text-lg bg-yellow-500 font-semibold ml-3">Learn More <IoIosArrowRoundForward size={26}></IoIosArrowRoundForward></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide