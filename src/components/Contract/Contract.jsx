import { FaVoicemail } from "react-icons/fa";
import mas_icon from "../../assets/msg-icon.png"
import { MdMarkEmailRead } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const Contract = () => {
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            <div className="my-24">
                <h2 className="text-4xl font-semibold text-center mb-3">Contract Us</h2>
                <p className="text-lg font-semibold text-center">Get In Touch</p>
            </div>
            <div className="flex justify-between gap-20 lg:gap-2 items-center flex-col md:flex-row">
                <div className="md:text-left">
                    <div className="flex gap-2 mb-4">
                        <h1 className="text-3xl font-semibold">Send Us a Message</h1>
                        <img className="w-[35px]" src={mas_icon} alt="" />
                    </div>
                    <p className="lg:w-2/3 mb-4 text-lg">Free free to read out thought sit amet consectetur adipisicing elit. Harum, nobis omnis. Commodi, placeat! Perferendis excepturi reiciendis aspernatur rerum, praesentium molestias.</p>
                    <ul className="space-y-4">
                        <div className="flex gap-3">
                            <MdMarkEmailRead className="text-red-800" size={26} />
                            <li className="text-lg font-semibold">alaminahmed@gmail.com</li>
                        </div>
                        <div className="flex gap-3">
                            <BiSolidPhoneCall className="text-red-800" size={26} />
                            <li className="text-lg font-semibold">+123-456-789</li>
                        </div>
                        <div className="flex gap-3">
                            <FaLocationDot className="text-red-800" size={26} />
                            <li className="text-lg font-semibold">99 Roving St., Big City, PKU</li>
                        </div>
                    </ul>
                </div>
                <div className="card shrink-0 w-full max-w-sm">
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="email" placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="password" placeholder="Enter Your Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea rows={5} className="textarea textarea-bordered" placeholder="Enter Your Message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-800 text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contract;