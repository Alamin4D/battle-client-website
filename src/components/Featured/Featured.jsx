import { CgCalendarDates } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Featured = ({ item }) => {
    const { _id, name, image, location, deadline, fees } = item;
    return (
        <div className="px-6">
            <div className="bg-base-100 shadow-xl">
                <Link to="/scholarship">
                    <figure className="px-10 pt-10 hover:scale-110 transition">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                </Link>
                <div className="card-body">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <IoLocationOutline className="text-red-800" size={20} />
                            <p>{location}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <CgCalendarDates className="text-red-800" size={20} />
                            <p>{deadline}</p>
                        </div>
                    </div>
                    {/* <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <IoLocationOutline className="text-red-800" size={20} />
                            <p>{fees}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <CgCalendarDates className="text-red-800" size={20} />
                            <p>{deadline}</p>
                        </div>
                    </div> */}
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-start mt-4">
                        <Link to={`/scholarship/${_id}`}>
                            <button className="btn bg-red-800 text-white">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;