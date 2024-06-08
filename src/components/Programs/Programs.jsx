import program1 from "../../assets/program-1.png"
import program2 from "../../assets/program-2.png"
import program3 from "../../assets/program-3.png"

import program_icon1 from "../../assets/program-icon-1.png"
import program_icon2 from "../../assets/program-icon-2.png"
import program_icon3 from "../../assets/program-icon-3.png"

const Programs = () => {
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            <div className="my-24">
                <h2 className="text-4xl font-semibold text-center mb-3">Our Program</h2>
                <p className="text-lg font-semibold text-center">What We Offfer</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative">
                    <img className="rounded-[10px] lg:w-[100%]" src={program1} alt="" />
                    <div className="rounded-[10px] flex flex-col justify-center items-center text-white cursor-pointer absolute top-0 left-0 bottom-0 right-0 bg-gray-900/40 hover:opacity-100 opacity-0">
                        <img className="w-[50px] mb-4" src={program_icon1} alt="" />
                        <p>Gradution Degree</p>
                    </div>
                </div>
                <div className="relative">
                    <img className="rounded-[10px] lg:w-[100%]" src={program2} alt="" />
                    <div className="rounded-[10px] flex flex-col justify-center items-center text-white cursor-pointer absolute top-0 left-0 bottom-0 right-0 bg-gray-900/40 hover:opacity-100 opacity-0">
                        <img className="w-[50px] mb-4" src={program_icon2} alt="" />
                        <p>Masters Degree</p>
                    </div>
                </div>
                <div className="relative">
                    <img className="rounded-[10px] lg:w-[100%]" src={program3} alt="" />
                    <div className="rounded-[10px] absolute flex flex-col justify-center items-center text-white cursor-pointer top-0 left-0 bottom-0 right-0 bg-gray-900/40 hover:opacity-100 opacity-0">
                        <img className="w-[50px] mb-4" src={program_icon3} alt="" />
                        <p>Post Gradution</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;